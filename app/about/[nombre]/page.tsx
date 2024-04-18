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
    "andrea": {
        image: "lawer-2.png",
        name: "Andrea Landriel",
        title: "Abogada Civil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
        years: 5,
        cases: 50,
        clients: 200
    },
    "daniel": {
        image: "lawer-3.png",
        name: "Daniel Ramirez",
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
        <main className="px-6 md:px-10 lg:px-14 xl:px-20">
            <div className="max-w-[1600px] mx-auto py-10 flex flex-col gap-10 lg:gap-16 xl:gap-24 lg:grid lg:grid-cols-2">
                <Image src={`/${lawyers[params.nombre].image}`} alt="banner" width={788} height={711} className="aspect-square object-cover" />
                <div className="flex flex-col gap-14 justify-center">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl">{lawyers[params.nombre].name}</h2>
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
            </div>
        </main>
    )
}
export default AboutLawyerPage