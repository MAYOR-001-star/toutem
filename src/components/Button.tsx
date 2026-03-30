type ButtonVariant = "dark" | "green" | "lightGreen" | "ghost"

type ButtonProps = {
    title: string
    variant?: ButtonVariant
    className?: string
    onClick?: () => void
}

const Button = ({
    title,
    variant = "dark",
    className = "",
    onClick,
}: ButtonProps) => {
    const baseStyles =
        "w-[13.38rem] py-[0.75em] px-[1.88em] rounded-lg font-semibold tracking-wider transition-all duration-200"

    const variants: Record<ButtonVariant, string> = {
        dark: "bg-[#1F2937] text-white hover:opacity-90",
        green: "bg-[#5FD788] text-[#1F2937] hover:opacity-90",
        lightGreen: "bg-[#5FD788] text-white hover:opacity-90",
        ghost: "bg-white text-[#1F2937]",
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {title}
        </button>
    )
}

export default Button