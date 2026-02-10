import Page from "@/components/Page";
import Title from "@/components/Titles";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image"
import { notFound } from "next/navigation"

type Lawyer = {
    image: string;
    name: string;
    title: string;
    description: string;
    years: number;
    cases: number;
    clients: number;
}

type Lawyers = {
    [key: string]: Lawyer;
}

const lawyers: Lawyers = {
    "angela": {
        image: "lawer-1.png",
        name: "Angela Estevez",
        title: "Abogada Penalista",
        description: "La Dra. Angela Estevez es fundadora y directora de Estevez Estudio Jurídico. Con más de 12 años de experiencia en derecho penal, se ha consolidado como una profesional comprometida con la defensa integral de sus clientes. Su formación académica sólida y su dedicación al ejercicio de la abogacía le han permitido desarrollar estrategias legales efectivas en casos de diversa complejidad. La Dra. Estevez se distingue por su atención personalizada, acompañando a cada cliente a lo largo de todo el proceso legal con profesionalismo y empatía.",
        years: 12,
        cases: 300,
        clients: 1500
    },
    "daniel": {
        image: "lawer-3.png",
        name: "Daniel Iacarino",
        title: "Abogado Comercial",
        description: "El Dr. Daniel Iacarino se especializa en derecho comercial y societario, brindando asesoramiento integral a empresas y emprendedores. Con 7 años de trayectoria profesional, ha acompañado a numerosos clientes en la constitución de sociedades, redacción de contratos comerciales, resolución de conflictos empresariales y protección de la propiedad intelectual. Su enfoque estratégico y su profundo conocimiento del marco legal comercial le permiten ofrecer soluciones eficaces y adaptadas a las necesidades de cada cliente.",
        years: 7,
        cases: 100,
        clients: 500
    }
}

interface AboutLawyerPageProps {
    params: {
        nombre: string
    }
}

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function AboutLawyerPage({ params }: AboutLawyerPageProps) {
    const lawyer = lawyers[params.nombre]

    if (!lawyer) {
        notFound()
    }

    return (
        <Page divClassName="lg:grid lg:grid-cols-2">
            <Image src={`/${lawyer.image}`} alt={lawyer.name} width={788} height={711} className="object-cover aspect-square object-top" />
            <div className="flex flex-col justify-center gap-14">
                <div className="flex flex-col gap-5">
                    <Title type="medium">{lawyer.name}</Title>
                    <p>{lawyer.title}</p>
                </div>
                <p className={cn(dmSans.className)}>{lawyer.description}</p>
                <div className="flex gap-12">
                    <div>
                        <h3 className="text-2xl">Experiencia</h3>
                        <p className="text-6xl">{lawyer.years} +</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Casos Manejados</h3>
                        <p className="text-6xl">{lawyer.cases} +</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Clientes</h3>
                        <p className="text-6xl">{lawyer.clients} +</p>
                    </div>
                </div>
            </div>
        </Page>
    )
}
export default AboutLawyerPage
