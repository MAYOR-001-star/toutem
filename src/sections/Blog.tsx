import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useTheme } from "../components/ThemeContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BlogSection = () => {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLElement>(null);

    type BlogCard = {
        img: string;
        title: string;
        content: string;
    }

    const blogCards: BlogCard[] = [
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it's important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it's important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it's important to keep a few ..."
        },
        {
            img: '/blog-card.svg',
            title: "How to create your own essential oil diffuser blends",
            content: "As you begin creating your own diffuser blends, it's important to keep a few ..."
        }
    ];

    useGSAP(() => {
        const split = SplitText.create(".blog-heading", { type: "chars" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out" },
        });

        // Heading chars drop in with stagger
        tl.from(split.chars, {
            y: -40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
        })
        // Cards stagger up from below
        .from(".blog-card", {
            y: 70,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
        }, "-=0.2");

        return () => split.revert();
    }, { scope: sectionRef, dependencies: [] });

    return (
        <section
            ref={sectionRef}
            id="blog"
            className={`${theme === "dark" ? "bg-[#1F2937]" : "bg-white"} py-16 sm:py-20 text-center`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5FD788] mb-12 blog-heading">BLOG</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogCards.map((card: BlogCard, index: number) => (
                        <div
                            key={index}
                            className={`blog-card ${theme === "dark" ? "bg-[#374151]" : "bg-white"} rounded-lg shadow-lg overflow-hidden flex flex-col`}
                        >
                            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
                            <div className="p-6 text-left flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-[#5FD788] pb-3 border-b-2 border-gray-100">
                                    {card.title}
                                </h3>
                                <p className="mt-4 text-gray-600 flex-grow">
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
