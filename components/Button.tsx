import { cn } from "@/lib/utils"
import { Button as ShadCNButton } from "./ui/button"
import Link from "next/link"

type ButtonProps = {
    children?: React.ReactNode,
    className?: string,
    href?: string,
    disabled?: boolean
}
function Button({ children, className, href, disabled }: ButtonProps) {
    if (href) {
        return (
            <ShadCNButton asChild className={cn("text-2xl rounded-none py-3 px-16 hover:bg-secondary", className)}>
                <Link href={href}>{children}</Link>
            </ShadCNButton>
        )
    }

    return (
        <ShadCNButton className={cn("text-2xl rounded-none py-3 px-16 hover:bg-secondary", className)} disabled={disabled}>
            {children}
        </ShadCNButton>
    )
}
export default Button
