import Button from "@/components/Button";
import Title from "@/components/Titles";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className="bg-[#E8E9E1] px-6 md:px-10 lg:px-14 xl:px-20">

      <section id="banner" className="relative flex justify-center md:justify-end items-center mx-auto py-10 md:py-0 max-w-[1600px]">

        <div className="left-0 z-10 md:absolute flex flex-col items-center md:items-start xl:items-start gap-28 px-2 md:px-0 w-3/4">
          <Title className="text-center md:text-left">
            Defendiendo verdad con justicia en <span className="text-secondary"> Estevez Estudio Jurídico</span>
          </Title>
          <Button href="/contact"> Contactar </Button>
        </div>

        <div className="top-0 left-0 z-[1] absolute md:hidden bg-[rgba(255,255,255,0.5)] w-full h-full object-cover"></div>
        <Image src="/banner.png" width={1143} height={736} alt="banner" className="md:relative md:right-0 z-[0] absolute md:w-3/4 h-full object-cover" />

      </section>

      <section id="about" className="relative mx-auto py-24 lg:py-32 xl:py-52 max-w-[1600px]">

        <div className="flex lg:flex-row flex-col justify-between lg:gap-4">
          <div className="relative">
            <Image src="/about-1.png" alt="about" width={677} height={699} className="lg:block hidden w-full h-full grow" />
          </div>
          <div className="md:block hidden bg-primary w-[2px]"></div>
          <div className="space-y-6 lg:max-w-lg grow">
            <h2 className="text-2xl">Sobre nosotros</h2>
            <Title as="p" type="medium">Ayudando a superar y alivianar la incertidumbre legal</Title>
          </div>
        </div>

        <div className="block lg:hidden bg-primary mt-4 w-full lg:w-[2px] h-[2px]"></div>

        <div className={cn("mt-12 lg:mt-24 max-w-8xl mx-auto text-center text-lg flex flex-col items-center gap-8")}>
          <p className={cn(dmSans.className, "text-balance")}>En <span className="font-bold">Estevez Estudio Jurídico</span>, entendemos el estrés y la preocupación que pueden generar los problemas legales. Nuestro equipo de abogados experimentados está dedicado a brindarle la orientación y el apoyo que necesita para navegar situaciones complejas.</p>
          <p className={cn(dmSans.className, "text-balance hidden md:block")}>Nos esforzamos por comprender su situación específica y buscar soluciones efectivas que se adapten a sus necesidades. Trabajaremos arduamente para proteger sus derechos e intereses, ayudándole a superar la incertidumbre y obtener el resultado deseado.</p>
          <Button href="/about"> Conocenos </Button>
        </div>

        <Image src="/about-1.png" width={677} height={699} alt="about" className="top-[50%] right-[50%] z-[-1] absolute hidden md:hidden translate-x-[50%] translate-y-[-50%]" />
      </section>
    </main>
  );
}
