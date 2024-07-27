import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen bg-green-900 text-white text-center pt-16">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
