import { useRef } from "react";
import gsap from "gsap";

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
    const btnRef = useRef<HTMLButtonElement>(null);

    const baseStyles =
        "w-[13.38rem] py-[0.75em] px-[1.88em] rounded-lg font-semibold tracking-wider cursor-pointer"

    const variants: Record<ButtonVariant, string> = {
        dark: "bg-[#1F2937] text-white",
        green: "bg-[#5FD788] text-[#1F2937]",
        lightGreen: "bg-[#5FD788] text-white",
        ghost: "bg-white text-[#1F2937]",
    }

    const handleMouseEnter = () => {
        gsap.to(btnRef.current, {
            scale: 1.05,
            y: -3,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(btnRef.current, {
            scale: 1,
            y: 0,
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
            duration: 0.35,
            ease: "elastic.out(1, 0.5)",
        });
    };

    const handleMouseDown = () => {
        gsap.to(btnRef.current, {
            scale: 0.96,
            y: 1,
            duration: 0.1,
            ease: "power2.in",
        });
    };

    const handleMouseUp = () => {
        gsap.to(btnRef.current, {
            scale: 1.05,
            y: -3,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {title}
        </button>
    )
}

export default Button