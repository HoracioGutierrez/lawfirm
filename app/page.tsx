import Button from "@/components/Button";
import Title from "@/components/Titles";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className="px-6 md:px-10 lg:px-14 xl:px-20 bg-[#E8E9E1]">

      <section id="banner" className="max-w-[1600px] mx-auto relative flex justify-center items-center py-10 md:py-0 md:justify-end">

        <div className="left-0 z-10 flex flex-col items-center w-3/4 px-2 md:absolute gap-28 xl:items-start md:px-0 md:items-start">
          <Title className="text-center md:text-left">
            Defendiendo verdad con justicia en <span className="text-secondary">Estevez & Landriel</span>
          </Title>
          <Button href="/contact"> Contactar </Button>
        </div>

        <div className="absolute w-full h-full object-cover md:hidden z-[1] top-0 left-0 bg-[rgba(255,255,255,0.5)]"></div>
        <Image src="/banner.png" width={1143} height={736} alt="banner" className="absolute object-cover h-full z-[0] md:relative md:w-3/4 md:right-0" />

      </section>

      <section id="about" className="py-24 lg:py-32 xl:py-52 max-w-[1600px] mx-auto relative">

        <div className="flex flex-col justify-between lg:flex-row lg:gap-4">
          <div className="relative">
            <Image src="/about-1.png" alt="about" width={677} height={699} className="hidden w-full h-full lg:block grow" />
          </div>
          <div className="w-[2px] bg-primary hidden md:block"></div>
          <div className="space-y-6 lg:max-w-lg grow">
            <h2 className="text-2xl">Sobre nosotros</h2>
            <Title as="p" type="medium">Ayudando a superar y alivianar la incertidumbre legal</Title>
          </div>
        </div>

        <div className="w-full h-[2px] lg:w-[2px] bg-primary block lg:hidden mt-4"></div>

        <div className={cn("mt-12 lg:mt-24 max-w-8xl mx-auto text-center text-lg flex flex-col items-center gap-8")}>
          <p className={cn(dmSans.className, "text-balance")}>En <span className="font-bold">Estevez & Landriel</span>, entendemos el estrés y la preocupación que pueden generar los problemas legales. Nuestro equipo de abogados experimentados está dedicado a brindarle la orientación y el apoyo que necesita para navegar situaciones complejas.</p>
          <p className={cn(dmSans.className, "text-balance hidden md:block")}>Nos esforzamos por comprender su situación específica y buscar soluciones efectivas que se adapten a sus necesidades. Trabajaremos arduamente para proteger sus derechos e intereses, ayudándole a superar la incertidumbre y obtener el resultado deseado.</p>
          <Button href="/about"> Conocenos </Button>
        </div>

        <Image src="/about-1.png" width={677} height={699} alt="about" className="md:hidden absolute z-[-1] top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] hidden" />
      </section>
    </main>
  );
}
