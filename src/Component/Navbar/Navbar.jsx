import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="w-full bg-slate-600 text-white flex justify-between items-center px-28 py-8 fixed ">
                <h2 className="text-4xl"><Link to={"/"}>Start Framework</Link></h2>
                <ul className="flex space-x-7 text-lg">
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}
