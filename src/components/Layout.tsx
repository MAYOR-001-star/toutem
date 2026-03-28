import { Outlet } from "@tanstack/react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout