import Construction from "@/components/Construction"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

function ServicesPage() {
    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10">
                {/* <Construction/> */}
                <section className="relative xl:mb-32">
                    <Image src="/services.png" alt="services" width={1080} height={402} className="w-full h-full max-w-[1080px]" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl max-w-[900px] absolute top-[50%] translate-y-[-50%] text-center text-white xl:text-foreground left-[50%] translate-x-[-50%] w-full xl:bottom-0  xl:text-left xl:left-auto xl:right-0 xl:translate-x-0">Serivios profesionales preparados para ser tu Estudio Jurídico</h2>
                </section>
                <section className="">
                    <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Penales</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Defensa integral en procesos penales: Enfrentamos cargos penales con estrategias sólidas y un enfoque compasivo, protegiendo sus derechos y luchando por el mejor resultado posible.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Laboral</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Su aliado en el ámbito laboral: Le brindamos asesoría y representación experta en asuntos laborales, desde contratos y negociaciones hasta reclamos por despido y defensa de sus derechos como trabajador.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Civil</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Resolviendo conflictos civiles con eficiencia: Navegamos por la complejidad de los casos civiles, representándolo en disputas familiares, inmobiliarias, contractuales y otras áreas del derecho civil.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Comercial</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>Asesoría legal para el éxito empresarial: Le guiamos en la toma de decisiones estratégicas, la redacción de contratos, la protección de la propiedad intelectual y la resolución de conflictos comerciales.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </main>
    )
}
export default ServicesPage