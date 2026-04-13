import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Button from "../components/Button";
import BestSellers from "../components/BestSellers.tsx";
import Trends from "../components/Trends.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ShopSection = () => {
    const shopRef = useRef<HTMLElement>(null);
    const rightImgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const split = SplitText.create(".shop-heading", { type: "lines" });

        // Wrap lines for clean clip animation
        split.lines.forEach((line: Element) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: shopRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out" },
        });

        // Heading lines slide up
        tl.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
        })
        // Button slides up after heading
        .from(".shop-btn", {
            y: 30,
            opacity: 0,
            duration: 0.6,
        }, "-=0.3");

        // Right image slides in from the right independently
        if (rightImgRef.current) {
            gsap.from(rightImgRef.current, {
                scrollTrigger: {
                    trigger: shopRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }

        return () => split.revert();
    }, { scope: shopRef, dependencies: [] });

    return (
        <>
            <BestSellers />
            <section
                ref={shopRef}
                id="shop"
                className="flex flex-col lg:flex-row items-stretch"
            >
                {/* Left Side */}
                <div className="flex-1 bg-[#5FD788] px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h2 className="mb-8 text-3xl sm:text-4xl lg:text-5xl leading-tight text-white font-semibold max-w-2xl mx-auto lg:mx-0 shop-heading">
                        Our luxury soaps are 100% natural, providing nourishing benefits for your skin.
                    </h2>
                    <Button title="SHOP ALL" variant="ghost" className="shop-btn" />
                </div>

                {/* Right Side */}
                <div ref={rightImgRef} className="flex-1 w-full hidden lg:flex">
                    <img
                        src="/right-side.svg"
                        alt="Natural soap products"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            <Trends />
        </>
    );
};

export default ShopSection;
