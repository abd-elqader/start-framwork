import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div className="w-full bg-slate-600 text-white flex justify-between items-center px-7 py-5 fixed ">
                <h2><Link to={"/"}>Start Framework</Link></h2>
                <ul className="flex divide-x-8 divide-transparent">
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </>
    )
}
