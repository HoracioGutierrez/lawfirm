import { cn } from "@/lib/utils"
import { Button as ShadCNButton } from "./ui/button"
import Link from "next/link"

type ButtonProps = {
    children?: React.ReactNode,
    className?: string,
    href?: string
}
function Button({ children, className , href }: ButtonProps) {
    return (
        <ShadCNButton className={cn("text-2xl rounded-none py-3 px-16 hover:bg-secondary", className)}>
            {href ? <Link href={href}>{children}</Link> : children}
        </ShadCNButton>
    )
}
export default Button