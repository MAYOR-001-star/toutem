import { HiMoon, HiSun } from "react-icons/hi";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    type LinkProps = {
        href: string,
        url: string
    };

    const links: LinkProps[] = [
        { href: "#home", url: 'HOME' },
        { href: "#about", url: 'ABOUT US' },
        { href: "#shop", url: 'SHOP' },
        { href: "#blog", url: 'BLOG' },
    ];


    return (
        <nav
            className={`${theme === "dark" ? "bg-[#1F2937] border-[#1F2937]" : "bg-white border-gray-200"} sticky top-0 z-30 flex justify-between items-center px-[1.69rem] py-[1.41em] border-b`}>
            <Link to="/" className="w-[6.38rem] h-[1.50rem] cursor-pointer">
                {theme === "dark" ? <img src="/logo.svg" alt="company-logo" /> : <img src="/company-logo.svg" alt="company-logo" />}
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex justify-center gap-[0.63rem] items-center">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href}
                        className={`${theme === "dark" ? "text-white" : "text-black"} text-[0.75rem] font-semibold cursor-pointer`}
                        activeProps={{
                            className: "lowercase",
                        }}
                    >
                        {link.url}
                    </Link>
                ))}
            </div>

            {/* Right side icons & Hamburger */}
            <div className="flex items-center justify-center gap-[0.75rem]">
                {openSearch ? <div className="w-[13.25rem]">
                    <div className="flex items-center bg-gray-200 rounded-full px-[0.38em] py-[0.25em]">
                        <input
                            type="text"
                            placeholder="search"
                            name="search"
                            className="bg-transparent outline-none flex-1 text-sm"
                        />
                        {theme === "dark" ? <img src="/search.svg" alt="search-icon" className='h-2 w-2 cursor-pointer' /> : <img src="/search-black.svg" alt="search-icon" className='h-2 w-2 cursor-pointer' />}
                    </div>
                </div> : theme === "dark" ? <img src="/search-black.svg" alt="search-icon" className='h-4 w-[0.88rem] cursor-pointer'
                    onClick={() => setOpenSearch((prev) => !prev)} /> : <img src="/search.svg" alt="search-icon" className='h-4 w-[0.88rem] cursor-pointer'
                        onClick={() => setOpenSearch((prev) => !prev)} />}
                {theme === "dark" ? (
                    <HiSun className="h-4 w-[0.88rem] text-white cursor-pointer" onClick={toggleTheme} />
                ) : (
                    <HiMoon className="h-4 w-[0.88rem] cursor-pointer" onClick={toggleTheme} />
                )}

                {/* Hamburger/Close Button */}
                <button className="md:hidden z-20 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                    {theme === "dark" ? <img src="/hamburger-dark.svg" alt="menu-icon" className="h-[0.98rem] w-[1.6rem]" /> : <img src="/hamburger.svg" alt="menu-icon" className="h-[0.98rem] w-[1.6rem]" />}
                </button>
            </div>

            {/* Mobile Menu - Full Screen */}
            {isOpen && (
                <div
                    className={`${theme === "dark" ? "bg-[#1F2937]" : "bg-white"} fixed inset-0 w-full h-full flex flex-col items-center justify-center md:hidden z-10`}>
                    <div className="flex flex-col items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.href}
                                className={`${theme === "dark" ? "text-white" : "text-black"} text-2xl font-semibold cursor-pointer`}
                                onClick={() => setIsOpen(false)} // Close menu on link click
                            >
                                {link.url}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
