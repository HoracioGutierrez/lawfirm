import { cn } from "@/lib/utils"

type PageProps = {
    children?: React.ReactNode
    divClassName?: string,
    mainClassName?: string
}

function Page({ divClassName, mainClassName, children }: PageProps) {
    return (
        <main className={cn("px-6 md:px-10 lg:px-14 xl:px-20", mainClassName)}>
            <div className={cn("max-w-[1600px] mx-auto py-10 flex flex-col gap-10 lg:gap-16 xl:gap-24", divClassName)}>
                {children}
            </div>
        </main>
    )
}

export default Page