import { useTheme } from "./ThemeContext";

const Footer = () => {
    const { theme } = useTheme();
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

    return (
        <footer className={theme === "dark" ? "bg-[#9CA3AF] px-6 md:px-12 py-10" : "bg-[#F3F4F6] px-6 md:px-12 py-10"}>
            {/* Top Section */}
            <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Logo */}
                <div className="w-[6.38rem]">
                    <img
                        src="/company-logo.svg"
                        alt="company-logo"
                        className="h-auto"
                    />
                </div>

                {/* Links Sections */}
                <div className="flex flex-col md:flex-row text-center mx-auto gap-8 md:gap-16">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
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
            <div className="text-center text-gray-500 text-[0.75rem] mt-[3.75rem]">
                <p>
                    copyright &copy; {new Date().getFullYear()} Toutem.
                </p>
                <p>all rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
