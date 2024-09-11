import Button from "@/components/Button"
import Page from "@/components/Page"
import Title from "@/components/Titles"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

const lawyers = [
    {
        imageUrl: "/lawer-1.png",
        name: "Angela Estevez",
        title: "Abogada Penalista",
        href: "/about/angela"
    },
    /* {
        imageUrl: "/lawer-2.png",
        name: "Debora Landriel",
        title: "Abogada Civil",
        href: "/about/debora"
    }, */
    {
        imageUrl: "/lawer-3.png",
        name: "Daniel Iacarino",
        title: "Abogado Laboral",
        href: "/about/daniel"
    }
]

function AboutPage() {
    return (
        <Page>

            <section className="flex flex-col gap-10 lg:gap-20">
                <div className="flex flex-col sm:flex-row sm:items-end sm:gap-10 md:gap-20 lg:gap-28 xl:gap-36">
                    <Image src="/person-1.png" alt="person-1" width={405} height={418} className="w-full sm:w-1/2 max-w-[405px]" />
                    <h2>
                        <span className="text-xl sm:text-2xl text-muted-foreground">Bienvenidos a</span>
                        <br className="" />
                        <Title className="text-secondary" as="span">
                            Estevez  <br className="hidden lg:block" /> Estudio Jurídico
                        </Title>
                    </h2>
                </div>
                <div className={cn(dmSans.className, "flex flex-col gap-4")}>
                    <p>En <span className="font-bold">Estevez Estudio Jurídico</span>, nos apasiona brindar soluciones legales efectivas y personalizadas a nuestros clientes. Desde el momento en que se pone en contacto con nosotros, nuestro objetivo principal es aliviar su carga y guiarlo con confianza a través de cualquier desafío legal que enfrente.</p>
                    <p>Entendemos que los asuntos legales pueden ser abrumadores, ya sea que se trate de un conflicto familiar, una disputa comercial, o la necesidad de asesoramiento preventivo. Es por eso que nuestro equipo de abogados altamente capacitados se dedica a escuchar atentamente sus inquietudes, comprender a fondo su situación específica y desarrollar estrategias legales sólidas que se adapten a sus necesidades únicas. Nos esforzamos por mantener una comunicación clara y abierta con usted a lo largo de todo el proceso legal, para que siempre esté informado y empoderado para tomar decisiones importantes.</p>
                </div>
            </section>

            <section className="flex flex-col gap-20">
                <Title className="text-center">Abogados y consejeros profesionales al servicio</Title>
                <div className="flex flex-col gap-14 sm:flex-row sm:grid sm:grid-flow-col sm:gap-7 xl:gap-14">
                    {lawyers.map((lawyer,i) => (
                        <article className="flex flex-col items-center gap-12" key={i}>
                            <div className="overflow-hidden group">
                                <Image src={lawyer.imageUrl} alt={lawyer.name} width={348} height={457} className="transition-transform duration-300 group-hover:scale-125 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <h3 className="text-2xl">{lawyer.name}</h3>
                                <p className={cn(dmSans.className, "text-muted-foreground")}>{lawyer.title}</p>
                                <Button href={lawyer.href}>ver más</Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="flex flex-col justify-center gap-10 md:flex-row">
                <div className="flex max-w-[660px] gap-10">
                    <div className="h-[1px] w-full max-w-[130px] bg-primary hidden md:block relative top-6"></div>
                    <div className="flex flex-col gap-4">
                        <Title type="small">Nuestra Misión</Title>
                        <p className={cn(dmSans.className, "text-muted-foreground")}>Brindar soluciones legales integrales y efectivas que empoderen a nuestros clientes a enfrentar sus desafíos legales con confianza. Nos dedicamos a la excelencia en la representación legal, ofreciendo un servicio personalizado y compasivo que atienda tanto las necesidades legales como las inquietudes personales de cada cliente.</p>
                    </div>
                </div>
                <div className="flex max-w-[660px] gap-10">
                    <div className="h-[1px] w-full max-w-[130px] bg-primary hidden md:block relative top-6"></div>
                    <div className="flex flex-col gap-4">
                        <Title type="small">Nuestra Visión</Title>
                        <p className={cn(dmSans.className, "text-muted-foreground")}>Ser reconocidos como un estudio jurídico líder en la comunidad, valorado por su compromiso con la integridad, la innovación y la obtención de resultados positivos para nuestros clientes. Aspiramos a construir relaciones duraderas basadas en la confianza y el respeto mutuo, convirtiéndonos en aliados de confianza para el éxito legal y personal de nuestros clientes.</p>
                    </div>
                </div>
            </section>

        </Page>
    )
}
export default AboutPage