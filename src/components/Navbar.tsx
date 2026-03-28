import {Link} from "@tanstack/react-router";
import {HiMoon, HiSun} from "react-icons/hi";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    type LinkProps = {
        href: string,
        url: string
    };

    const links: LinkProps[] = [
        {href: "/", url: 'HOME'},
        {href: "/about", url: 'ABOUT US'},
        {href: "/shop", url: 'SHOP'},
        {href: "/blog", url: 'BLOG'},
    ];

    // temporary mode
    const dark: boolean = false;

    return (
        <nav className="relative flex justify-between items-center px-[1.69rem] py-[1.41em] border-b border-gray-200">
            <div className="w-[6.38rem] h-[1.50rem]">
                <img src="/company-logo.svg" alt="company-logo"/>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex justify-center gap-[0.63rem] items-center">
                {links.map((link) => (
                    <Link key={link.href} to={link.href} className="text-[0.75rem] font-semibold"
                          activeProps={{className: 'lowercase'}}>
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
                        <img src="/search.svg" alt="search-icon" className='h-[0.5rem] w-[0.5rem] cursor-pointer'/>
                    </div>
                </div> : <img src="/search.svg" alt="search-icon" className='h-[1rem] w-[0.88rem] cursor-pointer'
                              onClick={() => setOpenSearch((prev) => !prev)}/>}
                {dark ? <HiSun className='h-[1rem] w-[0.88rem]'/> : <HiMoon className='h-[1rem] w-[0.88rem]'/>}

                {/* Hamburger/Close Button */}
                <button className="md:hidden z-20 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                    <img src="/hamburger.svg" alt="menu-icon" className="h-[0.98rem] w-[1.6rem]"/>
                </button>
            </div>

            {/* Mobile Menu - Full Screen */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-white w-full h-full flex flex-col items-center justify-center md:hidden z-10">
                    <div className="flex flex-col items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.url}
                                to={link.href}
                                activeProps={{className: 'lowercase'}}
                                className="text-[0.75rem] font-semibold"
                                onClick={() => setIsOpen(false)} // Close menu on link click
                            >
                                {link.url}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
