import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

type ServicesType = {
    [key: string]: string[]
}

const servicesTexts: ServicesType = {
    "penal": [
        "En el complejo mundo del derecho penal, donde la libertad y el futuro de las personas pueden estar en juego, en Estevez & Landriel nos comprometemos a defender sus derechos con firmeza y compasión. Nuestro equipo de abogados penales experimentados ha manejado con éxito una amplia gama de casos, desde delitos menores hasta acusaciones graves, brindando a cada cliente la atención personalizada y la representación legal estratégica que merece.",
        "Reconocemos que ser acusado de un delito puede ser una experiencia abrumadora y angustiosa. Por eso, nos tomamos el tiempo para comprender a fondo su situación, analizar las pruebas en su contra y desarrollar estrategias legales sólidas para proteger sus intereses. Mantenemos una comunicación abierta y honesta con nuestros clientes, informándoles sobre cada paso del proceso legal y brindándoles el apoyo emocional que necesitan.",
        "Ya sea que se enfrente a cargos por delitos menores como hurto o conducción bajo la influencia de sustancias prohibidas, o que esté involucrado en acusaciones más graves como asalto o tráfico de drogas, nuestro equipo de expertos en derecho penal luchará incansablemente por el mejor resultado posible en su caso. Exploraremos todas las opciones legales disponibles, incluyendo negociaciones con la fiscalía, mociones previas al juicio y representación en juicio, para lograr una resolución favorable que proteja su libertad y su futuro.",
        "En Estevez & Landriel, comprendemos que ser acusado de un delito puede tener un impacto significativo en su vida personal y profesional. Por eso, nos esforzamos por brindar a nuestros clientes no solo una representación legal excepcional, sino también el apoyo y la comprensión que necesitan durante este momento difícil. Estamos aquí para guiarlo a través del proceso legal, defender sus derechos y luchar por la justicia en su nombre."
    ],
    "civil": [
        "El derecho civil abarca una amplia gama de asuntos que afectan la vida cotidiana de las personas, desde las relaciones familiares y la propiedad inmobiliaria hasta los contratos y la responsabilidad civil. En Estevez & Landriel, contamos con un equipo de abogados civiles experimentados que brindan asesoría legal integral y representación efectiva en todas las áreas del derecho civil.",
        "Ya sea que esté enfrentando un divorcio, una disputa de custodia de menores, problemas de sucesión, asuntos inmobiliarios, un incumplimiento de contrato o cualquier otro tipo de problema legal civil, nuestros abogados están aquí para ayudarlo. Analizaremos cuidadosamente su situación específica, le informaremos sobre sus derechos y opciones legales, y desarrollaremos estrategias personalizadas para alcanzar sus objetivos.",
        "Nuestro enfoque en el derecho civil se centra en encontrar soluciones justas y favorables para nuestros clientes. Priorizamos la negociación y la resolución alternativa de disputas siempre que sea posible, evitando litigios largos y costosos cuando sea beneficioso para nuestros clientes. Sin embargo, cuando la vía judicial es necesaria, no dudamos en defender sus intereses con tenacidad y habilidad en los tribunales.",
        "En Estevez & Landriel, entendemos que los asuntos civiles pueden ser complejos y emocionalmente agotadores. Por eso, nos comprometemos a brindarle un servicio legal personalizado y compasivo, manteniéndolo informado en cada etapa del proceso y brindándole el apoyo que necesita para tomar decisiones informadas y proteger sus intereses. Somos su socio confiable en la resolución de sus asuntos legales civiles."
    ],
    "laboral": [
        "El derecho laboral regula la relación entre empleadores y empleados, estableciendo normas y principios que protegen los derechos fundamentales de los trabajadores. En Estevez & Landriel, nuestro equipo de abogados laborales experimentados se dedica a defender los derechos de los trabajadores en todos los aspectos de su relación laboral.",
        "Ya sea que haya sido despedido injustificadamente, discrimindado en el lugar de trabajo, no se le haya pagado el salario correcto o haya sufrido una lesión laboral, nuestros abogados laborales están aquí para proteger sus derechos. Analizaremos cuidadosamente su situación, le informaremos sobre sus opciones legales y tomaremos las medidas necesarias para hacer cumplir sus derechos como trabajador.",
        "En Estevez & Landriel, creemos que todos los trabajadores merecen ser tratados con respeto y dignidad en el lugar de trabajo. Si sus derechos han sido vulnerados, lucharemos incansablemente para obtener una compensación justa por las violaciones que ha sufrido. Esto puede incluir"
    ],
    "comercial": [
        "En el dinámico mundo del comercio, donde las decisiones estratégicas y la protección de los intereses comerciales son cruciales, en Estevez & Landriel nos posicionamos como su aliado para el éxito empresarial. Nuestro equipo de abogados comerciales experimentados brinda asesoría legal integral y representación efectiva en todas las áreas del derecho comercial, guiando a su empresa hacia un futuro próspero y seguro.",
        "Ya sea que esté iniciando un negocio, expandiendo sus operaciones, celebrando contratos, protegiendo su propiedad intelectual o enfrentando disputas comerciales, nuestros abogados comerciales están aquí para ayudarlo. Le brindaremos asesoría experta en cada etapa de su camino empresarial, desde la constitución legal de su empresa hasta la resolución de conflictos complejos.",
        "Nuestro enfoque se centra en comprender sus objetivos comerciales y desarrollar estrategias legales personalizadas que le permitan alcanzarlos. Le guiaremos en la toma de decisiones estratégicas, la redacción de contratos sólidos, la protección de su propiedad intelectual, el cumplimiento de las regulaciones y la resolución de disputas de manera eficiente y efectiva.",
        "En Estevez & Landriel, entendemos que el éxito comercial depende de una base legal sólida. Por eso, nos comprometemos a brindarle un servicio legal excepcional, proactivo y personalizado, manteniéndolo informado en cada paso del proceso y brindándole el apoyo que necesita para tomar decisiones informadas y proteger sus intereses comerciales. Somos su socio confiable en el camino hacia el éxito empresarial."
    ]
}

interface ServiceTypePageProps {
    params: {
        type: string
    }
}

function ServiceTypePage({ params }: ServiceTypePageProps) {
    return (
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10 xl:py-20">
                <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 lg:place-items-end">
                    <Image src="/service-1.png" alt="banner" width={646} height={804} className="aspect-video object-cover object-bottom lg:aspect-auto w-full h-full" />
                    <div className="flex flex-col gap-10 self-stretch">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl capitalize">
                            {params.type}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {servicesTexts[params.type].map((service, i) => {
                                return (
                                    <p className={cn(dmSans.className, "text-2xl")} key={i}>{service}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServiceTypePage