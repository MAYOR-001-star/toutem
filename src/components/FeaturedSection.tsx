import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "./Button.tsx";
import ProductCard, { type ProductCardProps } from "./ProductCard.tsx";
import { useTheme } from "./ThemeContext.tsx";

gsap.registerPlugin(ScrollTrigger);

interface FeaturedSectionProps {
    title: string;
    buttonTitle: string;
    bgImage: string;
    products: ProductCardProps[];
    sectionId?: string;
}

const FeaturedSection = ({
    title,
    buttonTitle,
    bgImage,
    products,
    sectionId
}: FeaturedSectionProps) => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out" },
        });

        // Title slides in from left
        tl.from(".featured-title", {
            x: -60,
            opacity: 0,
            duration: 0.8,
        })
        // Button fades up
        .from(".featured-btn", {
            y: 20,
            opacity: 0,
            duration: 0.6,
        }, "-=0.4")
        // Decoration image fades in
        .from(".featured-bg-img", {
            opacity: 0,
            scale: 0.9,
            duration: 1,
        }, "-=0.5")
        // Product cards stagger in from below
        .from(".featured-card", {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
        }, "-=0.6");

    }, { scope: sectionRef, dependencies: [] });

    return (
        <section
            ref={sectionRef}
            id={sectionId}
            className={`relative flex flex-col lg:flex-row items-center justify-between px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-40 ${theme === "dark" ? "bg-[#1F2937]" : "bg-[#F8F8F8]"} overflow-hidden`}
        >
            {/* Left Side - Content */}
            <div className="relative w-full lg:w-[30%] mb-12 lg:mb-0 text-center lg:text-left z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-green-500 mb-4 uppercase featured-title">
                    {title}
                </h2>
                <div className="flex justify-center lg:justify-start">
                    <Button title={buttonTitle} variant="green" className="featured-btn" />
                </div>
            </div>

            {/* Background Decoration */}
            <img
                src={bgImage}
                alt="decoration"
                className="featured-bg-img absolute hidden lg:block w-[26.94rem] h-[38.38rem] right-[50%] lg:right-[70%] translate-x-1/2 lg:translate-x-0 bottom-0 opacity-50 lg:opacity-100 pointer-events-none"
            />

            {/* Right Side - Product Cards */}
            <div className="flex flex-col md:flex-row gap-6 w-full lg:w-auto justify-center items-center z-10">
                {products.map((product, index) => (
                    <div key={index} className="featured-card">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
        </section>
    );
};

export default FeaturedSection;
