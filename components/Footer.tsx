import { FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailIcon, Phone, PinIcon, TwitterIcon } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function Footer() {
    return (
        <footer className="px-6 md:px-10 lg:px-14 xl:px-20 bg-primary py-10 lg:py-12 xl:py-14">
            <div className="max-w-[1600px] mx-auto flex justify-center">
                <h2 className="text-white flex items-center flex-col xl:flex-row xl:gap-4">
                    <svg width="45" height="37" viewBox="0 0 45 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.48771 -3.8147e-06H37.5121V1.61155H7.48771V-3.8147e-06ZM6.11683 3.13012L38.8832 3.1303C44.3109 3.1303 47.0468 9.72366 43.2052 13.5653C39.3634 17.4067 32.7704 14.6704 32.7704 9.24303H34.3818C34.3818 13.2406 39.2378 15.2537 42.0657 12.4256C44.8933 9.59807 42.8811 4.74184 38.8832 4.74184H6.11683C2.11857 4.74184 0.106018 9.59807 2.93408 12.4256C5.76196 15.2537 10.618 13.2409 10.618 9.24303H12.2296C12.2296 14.6708 5.63636 17.4067 1.79457 13.5653C-2.04669 9.72366 0.689103 3.1303 6.11683 3.1303V3.13012ZM29.5201 9.24303H31.1315V31.4332H35.806V33.0447H29.5201V9.24303ZM15.4798 9.24303V33.0447H9.19328V31.4332H13.8683V9.24303H15.4798ZM18.6105 36.1752H7.49893V34.5638H16.9986V9.24303H18.61L18.6105 36.1752ZM24.8713 36.1752H20.1287V9.24303H21.7406V34.5638H23.2594L23.259 9.24303H24.8713V36.1752ZM28.0012 34.5638H37.5009V36.1752H26.3898C26.3898 27.1979 26.3895 18.2205 26.3895 9.24303H28.0012V34.5638ZM37.5121 9.24303C37.5121 10.4613 38.9916 11.073 39.852 10.2122C40.7133 9.35126 40.1011 7.87215 38.8832 7.87215H6.11683C4.89891 7.87215 4.28706 9.35143 5.14748 10.2122C6.00825 11.073 7.48771 10.4613 7.48771 9.24303H9.09925C9.09925 11.8906 5.88247 13.2262 4.00833 11.3517C2.13366 9.47703 3.46927 6.2606 6.11683 6.2606H38.8832C41.5304 6.2606 42.8663 9.47685 40.992 11.3517C39.1173 13.2262 35.9007 11.8908 35.9007 9.24303H37.5121Z" fill={"#FFFFFF"} />
                    </svg>
                    Estevez & Landriel
                </h2>
            </div>
            <Separator className="block w-full md:w-2/3 mx-auto my-12 max-w-[1600px]" />
            <div className="text-white flex flex-col md:flex-row items-start justify-between gap-12 max-w-[1600px] mx-auto">
                <div className="w-full md:w-1/5 flex flex-col gap-5">
                    <h3 className="text-2xl">Sobre Nosotros</h3>
                    <p className={cn(dmSans.className)}>Conocemos más sobre nuestro estudio a traves de nuestras redes en</p>
                    <nav className="flex gap-4">
                        <FacebookIcon className="hover:text-secondary transition-colors duration-300" />
                        <LinkedinIcon className="hover:text-secondary transition-colors duration-300" />
                        <TwitterIcon className="hover:text-secondary transition-colors duration-300" />
                        <InstagramIcon className="hover:text-secondary transition-colors duration-300" />
                    </nav>
                </div>
                <div className="hidden md:w-1/5 md:flex flex-col gap-5">
                    <h3 className="text-2xl">Servicios</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <Link href="#" className="hover:text-secondary transition-colors duration-300">Penal</Link>
                        <Link href="#" className="hover:text-secondary transition-colors duration-300">Comercial</Link>
                        <Link href="#" className="hover:text-secondary transition-colors duration-300">Civil</Link>
                    </nav>
                </div>
                <Separator className="block mx-auto md:hidden" />
                <div className="hidden md:w-1/5 md:flex flex-col gap-5">
                    <h3 className="text-2xl">Links</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <Link href="/policies" className="hover:text-secondary transition-colors duration-300">Politica de privacidad</Link>
                        <Link href="/terms" className="hover:text-secondary transition-colors duration-300">Terminos y Condiciones</Link>
                        <Link href="/faq" className="hover:text-secondary transition-colors duration-300">Preguntas Frecuentes</Link>
                    </nav>
                </div>
                <div className="w-full md:w-1/5 flex flex-col gap-5">
                    <h3 className="text-2xl">Contactenos</h3>
                    <nav className={cn(dmSans.className, "flex gap-4 flex-col")}>
                        <p className="flex gap-2 items-center flex-wrap"><Phone />
                            <span className="break-all">+54 11 3633 2324</span>
                        </p>
                        <p className="flex gap-2 items-center flex-wrap"><MailIcon />
                            <span className="break-all">angelaeestevez@yahoo.com.ar</span>
                        </p>
                        <p className="flex gap-2 items-center flex-wrap"><PinIcon />
                            <span className="break-all">12 de Octubre 767 - Quilmes, Buenos Aires, Argentina.</span>
                        </p>
                    </nav>
                </div>
            </div>
            <Separator className="block my-12 max-w-[1600px] mx-auto" />
            <p className={cn(dmSans.className, "text-white text-center text-sm md:text-lg text-muted-foreground ")}>Copyright &copy; 2024 - Horacio Gutierrez Todos los derechos reservados</p>
        </footer>
    )
}
export default Footer