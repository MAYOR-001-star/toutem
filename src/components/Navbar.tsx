import { Link } from "@tanstack/react-router"

const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b border-gray-200">
            <Link to="/" activeProps={{ className: 'font-bold text-blue-600' }} className="hover:text-blue-500">
                Home
            </Link>
            <Link to="/shop" activeProps={{ className: 'font-bold text-blue-600' }} className="hover:text-blue-500">
                Shop
            </Link>
            <Link to="/blog" activeProps={{ className: 'font-bold text-blue-600' }} className="hover:text-blue-500">
                Blog
            </Link>
            <Link to="/about" activeProps={{ className: 'font-bold text-blue-600' }} className="hover:text-blue-500">
                About
            </Link>
        </nav>
    )
}

export default Navbar