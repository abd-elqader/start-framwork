export default function Footer() {
    return (
        <>
            <footer className="grid grid-cols-3 md:grid-cols-3 gap-4 w-full bg-slate-600 text-white text-center px-4 py-32">
                <div>
                    <h3 className="pb-5 text-4xl">location</h3>
                    <p>123 Main St. Anytown, USA 12345</p>
                </div>
                <div>
                    <h3 className="pb-5 text-4xl">Around the web</h3>
                    <ul className="flex justify-center space-x-3">
                        <li className="border-2 rounded-full w-10 h-10 flex items-center justify-center"><i className="fa-brands fa-facebook"></i></li>
                        <li className="border-2 rounded-full w-10 h-10 flex items-center justify-center"><i className="fa-brands fa-twitter"></i></li>
                        <li className="border-2 rounded-full w-10 h-10 flex items-center justify-center"><i className="fa-brands fa-linkedin"></i></li>
                        <li className="border-2 rounded-full w-10 h-10 flex items-center justify-center"><i className="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>
                <div>
                    <h3 className="pb-5 text-4xl">ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                </div>
            </footer>
            <div className="w-full bg-slate-900 text-white text-center px-4 py-7">
                <p>Copyright © Your Website 2022</p>
            </div>
        </>
    )
}
