import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "./ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const { theme } = useTheme();
    const footerRef = useRef<HTMLElement>(null);

    const footerLinks = {
        "Customer Support": [
            { title: "Shipping", href: "#shop" },
            { title: "Free Return", href: "#shop" },
            { title: "Track your Order", href: "#shop" },
            { title: "Gift Cards", href: "#shop" },
        ],
        "About Us": [
            { title: "Our Values", href: "#about" },
            { title: "Sustainability", href: "#about" },
            { title: "Brand Ambassadors", href: "#about" },
            { title: "Fitness Professionals", href: "#about" },
        ],
        "Customer Service": [
            { title: "Help", href: "#about" },
            { title: "Leader Support", href: "#about" },
            { title: "Pleasant Grove Product Center", href: "#shop" },
            { title: "Recall—Important Safety Information", href: "#shop" },
        ],
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out" },
        });

        // Logo slides up and fades in
        tl.from(".footer-logo", {
            y: 40,
            opacity: 0,
            duration: 0.7,
        })
        // Link columns stagger in
        .from(".footer-col", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
        }, "-=0.4")
        // Copyright fades up last
        .from(".footer-copyright", {
            y: 20,
            opacity: 0,
            duration: 0.5,
        }, "-=0.2");
    }, { scope: footerRef, dependencies: [] });

    return (
        <footer
            ref={footerRef}
            className={theme === "dark" ? "bg-[#9CA3AF] px-6 md:px-12 py-10" : "bg-[#F3F4F6] px-6 md:px-12 py-10"}
        >
            {/* Top Section */}
            <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Logo */}
                <div className="w-[6.38rem] footer-logo">
                    <img
                        src="/company-logo.svg"
                        alt="company-logo"
                        className="h-auto"
                    />
                </div>

                {/* Links Sections */}
                <div className="flex flex-col md:flex-row text-center mx-auto gap-8 md:gap-16">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="footer-col">
                            <h3 className="text-green-600 font-semibold mb-3">
                                {title}
                            </h3>
                            <ul className="space-y-1 text-gray-600 text-[0.75rem]">
                                {links.map((link) => (
                                    <li key={link.title}>
                                        <a href={link.href} className="hover:underline cursor-pointer">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-gray-500 text-[0.75rem] mt-[3.75rem] footer-copyright">
                <p>
                    copyright &copy; {new Date().getFullYear()} Toutem.
                </p>
                <p>all rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
