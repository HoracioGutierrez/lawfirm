import Page from "@/components/Page";
import Title from "@/components/Titles";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image"

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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
        years: 12,
        cases: 300,
        clients: 1500
    },
    "debora": {
        image: "lawer-2.png",
        name: "Debora Landriel",
        title: "Abogada Civil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
        years: 5,
        cases: 50,
        clients: 200
    },
    "daniel": {
        image: "lawer-3.png",
        name: "Daniel Iacarino",
        title: "Abogado Comercial",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
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
    return (
        <Page divClassName="lg:grid lg:grid-cols-2">
            <Image src={`/${lawyers[params.nombre].image}`} alt="banner" width={788} height={711} className="object-cover aspect-square" />
            <div className="flex flex-col justify-center gap-14">
                <div className="flex flex-col gap-5">
                    <Title type="medium">{lawyers[params.nombre].name}</Title>
                    <p>{lawyers[params.nombre].title}</p>
                </div>
                <p className={cn(dmSans.className)}>{lawyers[params.nombre].description}</p>
                <div className="flex gap-12">
                    <div>
                        <h3 className="text-2xl">Experiencia</h3>
                        <p className="text-6xl">{lawyers[params.nombre].years} +</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Casos Manejados</h3>
                        <p className="text-6xl">{lawyers[params.nombre].cases} +</p>
                    </div>
                    <div>
                        <h3 className="text-2xl">Clientes</h3>
                        <p className="text-6xl">{lawyers[params.nombre].clients} +</p>
                    </div>
                </div>
            </div>
        </Page>
    )
}
export default AboutLawyerPage