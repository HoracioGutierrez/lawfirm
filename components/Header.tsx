"use client"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { DM_Sans } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { useMemo, useState } from "react"
import Title from "./Titles"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function Header() {

    const [open, setOpen] = useState(false)

    const path = usePathname()

    const title = useMemo(() => {
        if (path === "/about") return "Sobre Nosotros"
        if (path === "/contact") return "Contacto"
        if (path === "/services") return "Servicios"
        if (path === "/services/penal") return "Penal"
        if (path === "/services/civil") return "Civil"
        if (path === "/services/laboral") return "Laboral"
        if (path === "/services/comercial") return "Comercial"
        if (path === "/about/angela") return "Angela Estevez"
        if (path === "/about/debora") return "Debora Landriel"
        if (path === "/about/daniel") return "Daniel Iacarino"
    }, [path])

    const description = useMemo(() => {
        if (path === "/about") return "Conozca a nuestro equipo de abogados dedicados y experimentados, y descubra cómo podemos ayudarlo a enfrentar sus desafíos legales."
        if (path === "/contact") return "Comuníquese con nosotros hoy mismo para programar una consulta gratuita y discutir cómo podemos ayudarlo a lograr sus objetivos legales."
        if (path === "/services") return "Explore la amplia gama de servicios legales que ofrecemos para satisfacer sus necesidades individuales y comerciales."
        if (path === "/services/penal") return "Explore la amplia gama de servicios legales que ofrecemos para satisfacer sus necesidades individuales y comerciales."
        if (path === "/services/civil") return "Explore la amplia gama de servicios legales que ofrecemos para satisfacer sus necesidades individuales y comerciales."
        if (path === "/services/laboral") return "Explore la amplia gama de servicios legales que ofrecemos para satisfacer sus necesidades individuales y comerciales."
        if (path === "/services/comercial") return "Explore la amplia gama de servicios legales que ofrecemos para satisfacer sus necesidades individuales y comerciales."
        if (path === "/about/angela") return "Conozca a nuestro equipo de abogados dedicados y experimentados, y descubra cómo podemos ayudarlo a enfrentar sus desafíos legales."
        if (path === "/about/debora") return "Conozca a nuestro equipo de abogados dedicados y experimentados, y descubra cómo podemos ayudarlo a enfrentar sus desafíos legales."
        if (path === "/about/daniel") return "Conozca a nuestro equipo de abogados dedicados y experimentados, y descubra cómo podemos ayudarlo a enfrentar sus desafíos legales."
    }, [path])

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <header className={cn("p-6 md:p-10 lg:p-14 xl:p-20 bg-[#E8E9E1]", path != "/" && "bg-primary text-white")}>
            <div className="flex justify-between items-center mx-auto max-w-[1600px]">
                <Link href="/">
                    <h1 className="flex items-center gap-4 text-sm md:text-base lg:text-lg xl:text-2xl">
                        <svg width="45" height="37" viewBox="0 0 45 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.48771 -3.8147e-06H37.5121V1.61155H7.48771V-3.8147e-06ZM6.11683 3.13012L38.8832 3.1303C44.3109 3.1303 47.0468 9.72366 43.2052 13.5653C39.3634 17.4067 32.7704 14.6704 32.7704 9.24303H34.3818C34.3818 13.2406 39.2378 15.2537 42.0657 12.4256C44.8933 9.59807 42.8811 4.74184 38.8832 4.74184H6.11683C2.11857 4.74184 0.106018 9.59807 2.93408 12.4256C5.76196 15.2537 10.618 13.2409 10.618 9.24303H12.2296C12.2296 14.6708 5.63636 17.4067 1.79457 13.5653C-2.04669 9.72366 0.689103 3.1303 6.11683 3.1303V3.13012ZM29.5201 9.24303H31.1315V31.4332H35.806V33.0447H29.5201V9.24303ZM15.4798 9.24303V33.0447H9.19328V31.4332H13.8683V9.24303H15.4798ZM18.6105 36.1752H7.49893V34.5638H16.9986V9.24303H18.61L18.6105 36.1752ZM24.8713 36.1752H20.1287V9.24303H21.7406V34.5638H23.2594L23.259 9.24303H24.8713V36.1752ZM28.0012 34.5638H37.5009V36.1752H26.3898C26.3898 27.1979 26.3895 18.2205 26.3895 9.24303H28.0012V34.5638ZM37.5121 9.24303C37.5121 10.4613 38.9916 11.073 39.852 10.2122C40.7133 9.35126 40.1011 7.87215 38.8832 7.87215H6.11683C4.89891 7.87215 4.28706 9.35143 5.14748 10.2122C6.00825 11.073 7.48771 10.4613 7.48771 9.24303H9.09925C9.09925 11.8906 5.88247 13.2262 4.00833 11.3517C2.13366 9.47703 3.46927 6.2606 6.11683 6.2606H38.8832C41.5304 6.2606 42.8663 9.47685 40.992 11.3517C39.1173 13.2262 35.9007 11.8908 35.9007 9.24303H37.5121Z" fill={path != "/" ? "#FFFFFF" : "#3A3A38"} />
                        </svg>
                        Estevez Estudio Jurídico
                    </h1>
                </Link>
                <nav className={cn(dmSans.className, "hidden sm:flex sm:gap-12")}>
                    <Link href="/" className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-secondary transition-colors duration-300">Inicio</Link>
                    <Link href="/about" className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-secondary transition-colors duration-300">Quienes somos</Link>
                    <Link href="/services" className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-secondary transition-colors duration-300">Servicios</Link>
                    <Link href="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg hover:text-secondary transition-colors duration-300">Contacto</Link>
                </nav>

                <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
                    <DrawerTrigger className="sm:hidden" asChild onClick={handleOpen}>
                        <Menu />
                    </DrawerTrigger>
                    <DrawerOverlay onClick={handleClose} className="bg-[rgba(0,0,0,0.4)]"/>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Menu</DrawerTitle>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Button asChild variant="link" onClick={handleClose}>
                                <Link href="/" className="text-xl">Inicio</Link>
                            </Button>

                            <Button asChild variant="link" onClick={handleClose}>
                                <Link href="/about" className="text-xl">Quienes somos</Link>
                            </Button>

                            <Button asChild variant="link" onClick={handleClose}>
                                <Link href="/services" className="text-xl">Servicios</Link>
                            </Button>

                            <Button asChild variant="link" onClick={handleClose}>
                                <Link href="/contact" className="text-xl">Contacto</Link>
                            </Button>

                            <DrawerClose>
                                <Button variant="link">cerrar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent >
                </Drawer >
            </div >
            {path != "/" && (
                <div className="flex md:flex-row flex-col gap-4 mx-auto py-10 md:py-14 xl:py-16 max-w-[1600px]">
                    <Title className="w-full">{title}</Title>
                    <div className="bg-white w-[2px]"></div>
                    <p className={cn(dmSans.className, "text-lg text-muted-foreground")}>{description}</p>
                </div>
            )}
        </header >
    )
}

export default Header