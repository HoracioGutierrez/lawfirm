import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className="px-6 md:px-10 lg:px-14 xl:px-20">

      <section id="banner" className="max-w-[1600px] mx-auto relative flex justify-center items-center py-10 md:py-0 md:justify-end">

        <div className="md:absolute left-0 flex flex-col gap-28 items-center xl:items-start px-2 w-3/4 md:px-0 md:items-start">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl max-w-5xl text-center md:text-left">Defendiendo verdad con justicia en <span className="text-secondary">Estevez & Landriel</span></h2>
          <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary">
            <Link href="/contact">Contactar</Link>
          </Button>
        </div>

        <div className="absolute w-full h-full object-cover md:hidden z-[-1] top-0 left-0 bg-[rgba(255,255,255,0.5)]"></div>
        <Image src="/banner.png" width={1143} height={736} alt="banner" className="absolute -z-10 h-full object-cover md:relative md:w-3/4 md:right-0" />

      </section>

      <section id="about" className="py-24 lg:py-32 xl:py-52 max-w-[1600px] mx-auto relative">

        <div className="flex flex-col justify-between lg:flex-row lg:gap-4">
          <div className="relative">
            <Image src="/about-1.png" alt="about" width={677} height={699} className="hidden lg:block grow w-full h-full" />
          </div>
          <div className="w-[2px] bg-primary hidden md:block"></div>
          <div className="lg:max-w-lg space-y-6 grow">
            <h2 className="text-2xl">Sobre nosotros</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl">Ayudando a superar y alivianar la incertidumbre legal</p>
          </div>
        </div>

        <div className="w-full h-[2px] lg:w-[2px] bg-primary block lg:hidden mt-4"></div>

        <div className={cn("mt-12 lg:mt-24 max-w-8xl mx-auto text-center text-lg flex flex-col items-center gap-8")}>
          <p className={cn(dmSans.className, "text-balance")}>En <span className="font-bold">Estevez & Landriel</span>, entendemos el estrés y la preocupación que pueden generar los problemas legales. Nuestro equipo de abogados experimentados está dedicado a brindarle la orientación y el apoyo que necesita para navegar situaciones complejas.</p>
          <p className={cn(dmSans.className, "text-balance hidden md:block")}>Nos esforzamos por comprender su situación específica y buscar soluciones efectivas que se adapten a sus necesidades. Trabajaremos arduamente para proteger sus derechos e intereses, ayudándole a superar la incertidumbre y obtener el resultado deseado.</p>
          <Button className="text-2xl rounded-none py-3 px-16 hover:bg-secondary">
            <Link href="/about">Conocenos</Link>
          </Button>
        </div>

        <Image src="/about-1.png" width={677} height={699} alt="about" className="md:hidden absolute z-[-1] top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] hidden" />
      </section>
    </main>
  );
}
