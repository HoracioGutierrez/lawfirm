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
import Image from "next/image"

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
                        <Image src={
                            path != "/" ? "/logo-only-small-invert.svg" : "/logo-only-small.svg"
                        } alt="logo" width={45} height={37} className="" />
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
                    <DrawerOverlay onClick={handleClose} className="bg-[rgba(0,0,0,0.4)]" />
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