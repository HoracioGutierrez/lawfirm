"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Clock, MailIcon, Phone, PinIcon } from "lucide-react"
import Button from "@/components/Button"
import Title from "@/components/Titles"
import Page from "@/components/Page"
import { sendContactEmail } from "@/actions/sendContactEmail"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

const contactSchema = yup.object({
    name: yup.string().max(100).min(3),
    lastname: yup.string().max(100).min(3),
    email: yup.string().email("Email inválido").required("Email es requerido"),
    message: yup.string().max(2000, "El mensaje es demasiado extenso").min(3, "El mensaje es demasiado corto").required("Mensaje es requerido"),
    phone: yup.string().max(100, "El teléfono es demasiado extenso").min(3, "El teléfono es demasiado corto").required("El teléfono es requerido"),
})

type ContactFormData = yup.InferType<typeof contactSchema>

function ContactPage() {

    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema)
    })

    const { toast } = useToast()

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        try {
            await sendContactEmail({
                name: data.name ?? "",
                lastname: data.lastname ?? "",
                email: data.email,
                message: data.message,
                phone: data.phone,
            })
            toast({
                title: "Enviado",
                description: "Gracias por contactarnos",
                variant: "default",
            })
            reset()
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Error al enviar el mensaje",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Page>
            <div className="grid gap-10 xl:grid-cols-3 2xl:gap-40">

                <section className="xl:col-span-2">
                    <Title className="mb-20">Contactanos</Title>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                            <label className="text-3xl" htmlFor="name">Nombre</label>
                            <input type="text" id="name" {...register("name")} className="py-5 px-7" />
                        </div>
                        <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                            <label className="text-3xl" htmlFor="lastname">Apellido</label>
                            <input type="text" id="lastname" {...register("lastname")} className="py-5 px-7" />
                        </div>
                        <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                            <label className="text-3xl" htmlFor="phone">Telefono*</label>
                            {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}
                            <input type="text" id="phone" {...register("phone")} className="py-5 px-7" />
                        </div>
                        <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                            <label className="text-3xl" htmlFor="email">Email*</label>
                            {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                            <input type="email" id="email" {...register("email")} className="py-5 px-7" />
                        </div>
                        <div className="flex flex-col col-span-2">
                            <label className="text-3xl" htmlFor="message">Mensaje*</label>
                            {errors.message && <p className="text-red-400">{errors.message.message}</p>}
                            <textarea id="message" {...register("message")} className="resize-none h-36"></textarea>
                        </div>
                        <Button className="justify-self-center lg:justify-self-start" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar"}
                        </Button>
                    </form>
                </section>

                <section className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13115.99520438862!2d-58.2652697!3d-34.7304246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32fdb0f958197%3A0x5babbc4033dafa90!2sEstudio%20Juridico%20Estevez%20Landriel!5e0!3m2!1sen!2sar!4v1713536012246!5m2!1sen!2sar" width="10" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" title="Ubicación de Estevez Estudio Jurídico en Google Maps"></iframe>
                </section>

            </div>

            <div className="flex flex-col justify-between gap-4 xl:flex-row xl:gap-0">
                <p className="flex flex-wrap items-center gap-2">
                    <Phone />
                    <span className="break-all">+54 11 3633 2324</span>
                </p>
                <p className="flex flex-wrap items-center gap-2">
                    <MailIcon />
                    <span className="break-all">angelaeestevez@yahoo.com.ar</span>
                </p>
                <p className="flex flex-wrap items-center gap-2">
                    <PinIcon />
                    <span className="break-all">12 de Octubre 767 - Quilmes, Buenos Aires, Argentina.</span>
                </p>
                <p className="flex flex-wrap items-center gap-2">
                    <Clock />
                    <span className="break-all">10.00 am - 6.00 pm</span>
                </p>
            </div>
        </Page>
    )
}
export default ContactPage
