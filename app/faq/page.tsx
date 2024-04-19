import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function FaqPage() {
    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10 flex flex-col gap-10 xl:gap-44 xl:py-20">
                <div className="relative mb-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl after-line w-fit pr-4 bg-[#e8e9e1]">Preguntas Frecuentes</h2>
                    <div className="h-[2px] bg-primary w-full hidden md:block absolute top-[50%] translate-y-[-50%] -z-10"></div>
                </div>
                <Accordion type="single" collapsible className="grid grid-cols-1 gap-x-10 gap-y-5">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl">¿Cómo podría no reducirse mi sentencia penal?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>Existen varios factores que pueden afectar la posibilidad de reducir una sentencia. La gravedad del delito, la existencia de antecedentes penales y la falta de cooperación con las autoridades son algunos ejemplos. Siempre es recomendable consultar con un abogado para una evaluación personalizada de su caso.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl">¿Hay un plazo máximo para contratar a un abogado?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>No hay un plazo máximo legal para contratar a un abogado. De hecho, se recomienda buscar asesoría legal lo antes posible para tener una mejor defensa.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl text-left">¿Puedo contratar a un abogado después de entrar en prisión?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>Sí, usted tiene derecho a tener representación legal en cualquier etapa del proceso penal, incluso después de ser encarcelado.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl text-left">¿Qué debo hacer si la policía me detiene?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>Si la policía lo detiene, es importante mantener la calma y recordar sus derechos. No responda preguntas sin la presencia de un abogado y solicite asistencia legal lo antes posible.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl text-left">¿Cómo puedo saber si necesito un abogado?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>Si se enfrenta a una situación legal, es recomendable consultar con un abogado para obtener asesoramiento. Un abogado puede evaluar su caso, explicarle sus opciones legales y proteger sus derechos.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="border-b border-primary">
                            <h3 className="text-xl md:text-2xl xl:text-3xl text-left">¿Cuánto cuesta contratar a un abogado?</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className={cn(dmSans.className, "text-base lg:text-lg")}>El costo de contratar a un abogado varía dependiendo de varios factores, como la complejidad del caso, la experiencia del abogado y la ubicación geográfica. Es importante consultar con diferentes abogados para obtener presupuestos y comparar precios.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}

export default FaqPage