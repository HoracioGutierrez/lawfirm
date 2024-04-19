"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Clock, MailIcon, Phone, PinIcon } from "lucide-react"


function ContactPage() {

    const contactSchema = yup.object({
        name: yup.string().max(100).min(3),
        lastname: yup.string().max(100).min(3),
        email: yup.string().email("Email inválido").required("Email es requerido"),
        message: yup.string().max(100,"El mensaje es demasiado extenso").min(3,"El mensaje es demasiado corto").required("Mensaje es requerido"),
        phone: yup.string().max(100,"El teléfono es demasiado extenso").min(3,"El teléfono es demasiado corto").required("El teléfono es requerido"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactSchema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10 flex flex-col gap-10 xl:gap-44">
                <div className="grid xl:grid-cols-3 gap-10 2xl:gap-40">

                    <section className="xl:col-span-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-20">Contactanos</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                                <label className="text-3xl" htmlFor="name">Nombre</label>
                                <input type="text" {...register("name")} className="py-5 px-7" />
                            </div>
                            <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                                <label className="text-3xl" htmlFor="lastname">Apellido</label>
                                <input type="text" {...register("lastname")} className="py-5 px-7" />
                            </div>
                            <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                                <label className="text-3xl" htmlFor="phone">Telefono*</label>
                                {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}
                                <input type="text" {...register("phone")} className="py-5 px-7" />
                            </div>
                            <div className="flex flex-col w-full col-span-2 xl:col-span-1">
                                <label className="text-3xl" htmlFor="email">Email*</label>
                                {errors.email && <p className="text-red-400">{errors.email.message}</p>}
                                <input type="email" {...register("email")} className="py-5 px-7" />
                            </div>
                            <div className="flex flex-col col-span-2">
                                <label className="text-3xl" htmlFor="message">Mensaje*</label>
                                {errors.message && <p className="text-red-400">{errors.message.message}</p>}
                                <textarea {...register("message")} className="resize-none h-36"></textarea>
                            </div>
                            <Button type="submit" className="text-2xl rounded-none py-3 px-16 hover:bg-secondary  justify-self-center lg:justify-self-start">
                                Enviar
                            </Button>
                        </form>
                    </section>

                    <section className="w-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13115.99520438862!2d-58.2652697!3d-34.7304246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32fdb0f958197%3A0x5babbc4033dafa90!2sEstudio%20Juridico%20Estevez%20Landriel!5e0!3m2!1sen!2sar!4v1713536012246!5m2!1sen!2sar" width="10" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                    </section>

                </div>

                <nav className="flex flex-col justify-between xl:flex-row gap-4 xl:gap-0">
                    <p className="flex gap-2 items-center flex-wrap">
                        <Phone />
                        <span className="break-all">+54 11 3633 2324</span>
                    </p>
                    <p className="flex gap-2 items-center flex-wrap">
                        <MailIcon />
                        <span className="break-all">angelaeestevez@yahoo.com.ar</span>
                    </p>
                    <p className="flex gap-2 items-center flex-wrap">
                        <PinIcon />
                        <span className="break-all">12 de Octubre 767 - Quilmes, Buenos Aires, Argentina.</span>
                    </p>
                    <p className="flex gap-2 items-center flex-wrap">
                        <Clock />
                        <span className="break-all">10.00 am - 6.00 pm</span>
                    </p>
                </nav>
            </div>
        </main>
    )
}
export default ContactPage