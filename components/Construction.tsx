import { cn } from "@/lib/utils"
import { DM_Sans } from "next/font/google"
import Link from "next/link"

const dmSans = DM_Sans({ weight: "400", subsets: ["latin"] })

function Construction() {
    return (
        <div className="flex flex-col gap-20 py-10 xl:py-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-center">En construcción</h2>
            <div className="flex flex-col gap-4">
                <p className={cn(dmSans.className, "text-center")}>Estamos trabajando en esta sección pero podes intentar volver a visitar esta página en otro momento ¡Gracias por su paciencia!</p>
                <p className={cn(dmSans.className, "text-center")}>Para volver a la página principal haga click <Link href="/" className="text-secondary">aquí</Link></p>
            </div>
        </div>
    )
}
export default Construction