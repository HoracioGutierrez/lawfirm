import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"

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
                            <Image src="/lawer-1.png" alt="person-2" width={348} height={457} className="" />
                            <div className="flex flex-col items-center gap-5">
                                <h3>Angela Estevez</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogada Penalista</p>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-12">
                            <Image src="/lawer-2.png" alt="person-2" width={348} height={457} className="" />
                            <div className="flex flex-col items-center gap-5">
                                <h3>Andrea Landriel</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogada Civil</p>
                            </div>
                        </article>
                        <article className="flex flex-col items-center gap-12">
                            <Image src="/lawer-3.png" alt="person-2" width={348} height={457} className="" />
                            <div className="flex flex-col items-center gap-5">
                                <h3>Daniel Ramirez</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>Abogado Comercial</p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default AboutPage