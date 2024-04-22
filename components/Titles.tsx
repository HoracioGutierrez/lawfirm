import React from "react"

interface TitleProps {
    as?: string,
    children: React.ReactNode,
    className?: string,
    type?: "big" | "medium" | "small"
}

function Title({ as = "h2", children, className = "", ...props }: TitleProps) {

    const classes = {
        "big": "text-4xl sm:text-5xl lg:text-6xl xl:text-8xl",
        "medium": "text-3xl sm:text-4xl lg:text-5xl xl:text-7xl",
        "small": "text-2xl sm:text-3xl lg:text-4xl xl:text-6xl"
    }

    const Component = React.createElement(as, {
        className: `${classes[props.type ?? "big"]} ${className}`,
        ...props
    }, children)

    return Component
}

export default Title