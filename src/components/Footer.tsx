import {Link} from "@tanstack/react-router";

const Footer = () => {
    const footerLinks = {
        "Customer Support": [
            {title: "Shipping", href: "/shipping"},
            {title: "Free Return", href: "/free-return"},
            {title: "Track your Order", href: "/track-your-order"},
            {title: "Gift Cards", href: "/gift-cards"},
        ],
        "About Us": [
            {title: "Our Values", href: "/our-values"},
            {title: "Sustainability", href: "/sustainability"},
            {title: "Brand Ambassadors", href: "/brand-ambassadors"},
            {title: "Fitness Professionals", href: "/fitness-professionals"},
        ],
        "Customer Service": [
            {title: "Help", href: "/help"},
            {title: "Leader Support", href: "/leader-support"},
            {title: "Pleasant Grove Product Center", href: "/product-center"},
            {title: "Recall—Important Safety Information", href: "/recall-safety-info"},
        ],
    };

    return (
        <footer className="bg-gray-100 px-6 md:px-12 py-10">
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
                <div className="flex flex-col md:flex-row text-center gap-8 md:gap-16 mx-auto">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-green-600 font-semibold mb-3">
                                {title}
                            </h3>
                            <ul className="space-y-1 text-gray-600 text-[0.75rem]">
                                {links.map((link) => (
                                    <li key={link.title}>
                                        <Link to={link.href} className="hover:underline">
                                            {link.title}
                                        </Link>
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
