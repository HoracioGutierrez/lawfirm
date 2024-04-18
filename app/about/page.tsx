import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function AboutPage() {
    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10 flex flex-col gap-10 lg:gap-16 xl:gap-24">

                <section className="flex flex-col gap-10 lg:gap-20">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:gap-10 md:gap-20 lg:gap-28 xl:gap-36">
                        <Image src="/person-1.png" alt="person-1" width={405} height={418} className="w-full sm:w-1/2 max-w-[405px]" />
                        <h2>
                            <span className="text-xl sm:text-2xl text-muted-foreground">Bienvenidos a</span>
                            <br className="" />
                            <span className="text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl"> Estevez & <br className="hidden lg:block" /> Landriel</span>
                        </h2>
                    </div>
                    <div className={cn(dmSans.className, "flex flex-col gap-4")}>
                        <p>En <span className="font-bold">Estevez & Landriel</span>, nos apasiona brindar soluciones legales efectivas y personalizadas a nuestros clientes. Desde el momento en que se pone en contacto con nosotros, nuestro objetivo principal es aliviar su carga y guiarlo con confianza a través de cualquier desafío legal que enfrente.</p>
                        <p>Entendemos que los asuntos legales pueden ser abrumadores, ya sea que se trate de un conflicto familiar, una disputa comercial, o la necesidad de asesoramiento preventivo. Es por eso que nuestro equipo de abogados altamente capacitados se dedica a escuchar atentamente sus inquietudes, comprender a fondo su situación específica y desarrollar estrategias legales sólidas que se adapten a sus necesidades únicas. Nos esforzamos por mantener una comunicación clara y abierta con usted a lo largo de todo el proceso legal, para que siempre esté informado y empoderado para tomar decisiones importantes.</p>
                    </div>
                </section>

                <section className="flex flex-col gap-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-center 2xl:w-2/3 mx-auto">Abogados y consejeros profesionales al servicio</h2>
                    <div className="flex flex-col gap-14 sm:flex-row sm:justify-center">
                        <article className="flex flex-col items-center gap-12">
                            <div className="overflow-hidden group">
                                <Image src="/lawer-1.png" alt="person-2" width={348} height={457} className="group-hover:scale-125 transition-transform duration-300 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <h3 className="text-2xl">Angela Estevez</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogada Penalista</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary">
                                    <Link href="/about/angela">ver más</Link>
                                </Button>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-12">
                            <div className="overflow-hidden group">
                                <Image src="/lawer-2.png" alt="person-2" width={348} height={457} className="group-hover:scale-125 transition-transform duration-300 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <h3 className="text-2xl">Andrea Landriel</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogada Civil</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary">
                                    <Link href="/about/andrea">ver más</Link>
                                </Button>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-12">
                            <div className="overflow-hidden group">
                                <Image src="/lawer-3.png" alt="person-2" width={348} height={457} className="group-hover:scale-125 transition-transform duration-300 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <h3 className="text-2xl">Daniel Ramirez</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogado Comercial</p>
                                <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary">
                                    <Link href="/about/daniel">ver más</Link>
                                </Button>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="flex max-w-[660px] gap-10">
                        <div className="h-[1px] w-full max-w-[130px] bg-primary hidden md:block relative top-6"></div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Nuestra Misión</h2>
                            <p className={cn(dmSans.className, "text-muted-foreground")}>Brindar soluciones legales integrales y efectivas que empoderen a nuestros clientes a enfrentar sus desafíos legales con confianza. Nos dedicamos a la excelencia en la representación legal, ofreciendo un servicio personalizado y compasivo que atienda tanto las necesidades legales como las inquietudes personales de cada cliente.</p>
                        </div>
                    </div>
                    <div className="flex max-w-[660px] gap-10">
                        <div className="h-[1px] w-full max-w-[130px] bg-primary hidden md:block relative top-6"></div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Nuestra Visión</h2>
                            <p className={cn(dmSans.className, "text-muted-foreground")}>Ser reconocidos como un estudio jurídico líder en la comunidad, valorado por su compromiso con la integridad, la innovación y la obtención de resultados positivos para nuestros clientes. Aspiramos a construir relaciones duraderas basadas en la confianza y el respeto mutuo, convirtiéndonos en aliados de confianza para el éxito legal y personal de nuestros clientes.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
export default AboutPage