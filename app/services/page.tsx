import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })


function ServicesPage() {
    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10">
                <section className="relative xl:mb-32">
                    <Image src="/services.png" alt="services" width={1080} height={402} className="w-full h-full max-w-[1080px]" />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl max-w-[900px] absolute top-[50%] translate-y-[-50%] text-center text-white xl:text-foreground left-[50%] translate-x-[-50%] w-full xl:bottom-0  xl:text-left xl:left-auto xl:right-0 xl:translate-x-0">Serivios profesionales preparados para ser tu Estudio Jurídico</h2>
                </section>
                <section className="py-10 xl:py-20">
                    <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="border-b border-primary">
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Penales</h3>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className={cn(dmSans.className, "text-base lg:text-lg")}>Defensa integral en procesos penales: Enfrentamos cargos penales con estrategias sólidas y un enfoque compasivo, protegiendo sus derechos y luchando por el mejor resultado posible.</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary self-start">
                                    <Link href='/services/penal'>Leer Más</Link>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="border-b border-primary">
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Laboral</h3>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className={cn(dmSans.className, "text-base lg:text-lg")}>Su aliado en el ámbito laboral: Le brindamos asesoría y representación experta en asuntos laborales, desde contratos y negociaciones hasta reclamos por despido y defensa de sus derechos como trabajador.</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary self-start">
                                    <Link href='/services/laboral'>Leer Más</Link>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="border-b border-primary">
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Civil</h3>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className={cn(dmSans.className, "text-base lg:text-lg")}>Resolviendo conflictos civiles con eficiencia: Navegamos por la complejidad de los casos civiles, representándolo en disputas familiares, inmobiliarias, contractuales y otras áreas del derecho civil.</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary self-start">
                                    <Link href='/services/civil'>Leer Más</Link>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="border-b border-primary">
                                <h3 className="text-xl md:text-2xl xl:text-3xl">Derecho Comercial</h3>
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <p className={cn(dmSans.className, "text-base lg:text-lg")}>Asesoría legal para el éxito empresarial: Le guiamos en la toma de decisiones estratégicas, la redacción de contratos, la protección de la propiedad intelectual y la resolución de conflictos comerciales.</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary self-start">
                                    <Link href='/services/comercial'>Leer Más</Link>
                                </Button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
                <section className="py-20 xl:py-32 flex flex-col gap-4">
                    <p className={cn(dmSans.className, "text-base lg:text-lg")}>Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque. Diam tristique semper mauris dolor amet. Dolor elit nunc et purus quam amet laoreet eu risus.</p>
                    <p className={cn(dmSans.className, "text-base lg:text-lg")}>Cum mattis mollis odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt faucibus tortor vel. Erat risus etiam quam pretium ornare. Semper orci arcu pulvinar adipiscing pretium. Erat facilisis dis arcu senectus sit mi fermentum eu aliquam. Felis neque posuere pharetra porttitor lacinia proin pretium. Et et pharetra tincidunt vel egestas risus sed mollis adipiscing. Lobortis risus mauris vitae pellentesque lobortis sapien. Mi convallis leo nisl pharetra quam arcu blandit. Metus nisl volutpat ut sed sit sit est. </p>
                    <p className="text-7xl my-16">$10.000,00 / consulta</p>
                    <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary self-start">
                        <Link href='#'>Hacer Reserva</Link>
                    </Button>
                </section>
                <section className="py-10 xl:py-20">
                    <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Proceso Legal</h2>
                        <p className="xl:max-w-xl">Contamos con un eficaz proceso de representación juridica a traves del cual te aseguramos una asistencia de la mejor manera posible.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 place-items-center gap-10 justify-items-start py-20">
                        <div className="flex flex-col gap-4 items-center self-start justify-self-center">
                            <div className="w-full max-w-[200px] aspect-square bg-[url(/timeline-3.png)] bg-cover hover:bg-[url(/timeline-hover-3.png)]"></div>
                            <p className="text-3xl text-center">Discutir el caso</p>
                        </div>
                        <Image src="/arrow.png" alt="services" width={249} height={201} className="hidden md:block justify-self-end w-1/2 h-40" />
                        <div className="flex flex-col gap-4 items-center self-start justify-self-center">
                            <div className="w-full max-w-[200px] aspect-square bg-[url(/timeline-2.png)] bg-cover hover:bg-[url(/timeline-hover-2.png)]"></div>
                            <p className="text-3xl text-center">Practicas profesionales</p>
                        </div>
                        <div className="hidden md:block"></div>
                        <Image src="/arrow.png" alt="services" width={249} height={201} className="hidden md:block rotate-arrow justify-self-end w-1/2 h-40" />
                        <div className="flex flex-col gap-4 items-center self-start justify-self-center">
                            <div className="w-full max-w-[200px] aspect-square bg-[url(/timeline-4.png)] bg-cover hover:bg-[url(/timeline-hover-4.png)]"></div>
                            <p className="text-3xl text-center">Hacer contrato</p>
                        </div>
                        <Image src="/arrow.png" alt="services" width={249} height={201} className="hidden md:block rotate-arrow justify-self-end w-1/2 h-40" />
                        <div className="flex flex-col gap-4 items-center self-start justify-self-center">
                            <div className="w-full max-w-[200px] aspect-square bg-[url(/timeline-1.png)] bg-cover hover:bg-[url(/timeline-hover-1.png)]"></div>
                            <p className="text-3xl text-center">Asesorado legal</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default ServicesPage