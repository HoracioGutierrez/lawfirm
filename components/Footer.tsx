import { FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailIcon, Phone, PinIcon, TwitterIcon } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Image from "next/image"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function Footer() {
    return (
        <footer className="bg-primary px-6 md:px-10 lg:px-14 xl:px-20 py-10 lg:py-12 xl:py-14">
            <div className="flex justify-center mx-auto max-w-[1600px]">
                <h2 className="flex xl:flex-row flex-col items-center xl:gap-4 text-white">
                    <Image src="/logo-only-small-invert.svg" alt="logo" width={45} height={37} />
                    Estevez Estudio Jurídico
                </h2>
            </div>
            <Separator className="block mx-auto my-12 w-full md:w-2/3 max-w-[1600px]" />
            <div className="flex md:flex-row flex-col justify-between items-start gap-12 mx-auto max-w-[1600px] text-white">
                <div className="flex flex-col gap-5 w-full md:w-1/5">
                    <h3 className="text-2xl">Sobre Nosotros</h3>
                    <p className={cn(dmSans.className)}>Conocemos más sobre nuestro estudio a traves de nuestras redes en</p>
                    <nav className="flex gap-4">
                        <FacebookIcon className="hover:text-secondary transition-colors duration-300 cursor-pointer" />
                        <LinkedinIcon className="hover:text-secondary transition-colors duration-300 cursor-pointer" />
                        <TwitterIcon className="hover:text-secondary transition-colors duration-300 cursor-pointer" />
                        <InstagramIcon className="hover:text-secondary transition-colors duration-300 cursor-pointer" />
                    </nav>
                </div>
                <div className="md:flex flex-col gap-5 hidden md:w-1/5">
                    <h3 className="text-2xl">Servicios</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <Link href="/services/penal" className="hover:text-secondary transition-colors duration-300">Penal</Link>
                        <Link href="/services/comercial" className="hover:text-secondary transition-colors duration-300">Comercial</Link>
                        <Link href="/services/civil" className="hover:text-secondary transition-colors duration-300">Civil</Link>
                    </nav>
                </div>
                <Separator className="block md:hidden mx-auto" />
                <div className="md:flex flex-col gap-5 hidden md:w-1/5">
                    <h3 className="text-2xl">Links</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <Link href="/policies" className="hover:text-secondary transition-colors duration-300">Politica de privacidad</Link>
                        <Link href="/terms" className="hover:text-secondary transition-colors duration-300">Terminos y Condiciones</Link>
                        <Link href="/faq" className="hover:text-secondary transition-colors duration-300">Preguntas Frecuentes</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-5 w-full md:w-1/5">
                    <h3 className="text-2xl">Contactenos</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <p className="flex flex-wrap items-center gap-2"><Phone />
                            <span className="break-all">+54 11 3633 2324</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2"><MailIcon />
                            <span className="break-all">angelaeestevez@yahoo.com.ar</span>
                        </p>
                        <p className="flex flex-wrap items-center gap-2"><PinIcon />
                            <span className="break-all">12 de Octubre 767 - Quilmes, Buenos Aires, Argentina.</span>
                        </p>
                    </nav>
                </div>
            </div>
            <Separator className="block mx-auto my-12 max-w-[1600px]" />
            <p className={cn(dmSans.className, "text-white text-center text-sm md:text-lg text-muted-foreground ")}>Copyright &copy; 2024 - Horacio Gutierrez Todos los derechos reservados</p>
        </footer>
    )
}
export default Footer