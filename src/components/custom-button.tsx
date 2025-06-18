import { ReactNode } from "react"
import { Button } from "./ui/Button"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"
    children: ReactNode
}

export default function CustomButton({ variant = "primary", children, className = "", ...props }: CustomButtonProps) {
    const baseClasses = "w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200"

    const variantClasses = {
        primary: "bg-yellow-400 text-black hover:bg-yellow-500 active:bg-yellow-600",
        secondary: "bg-transparent text-white border border-gray-600 hover:bg-gray-800",
    }

    return (
        <Button label="" variant={"default"}>
            {children}
        </Button>

        // <Button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
        //     {children}
        // </Button>
    )
}
