export default function Footer() {
    return (
        <footer className="grid grid-cols-3 md:grid-cols-3 gap-4 w-full bg-slate-600 text-white text-center px-4 py-7">
            <div>
                <h3>location</h3>
                <p>123 Main St. Anytown, USA 12345</p>
            </div>
            <div>
                <h3>Around the web</h3>
                <ul className="flex justify-center divide-x-8 divide-transparent">
                    <li className="border-2 rounded-full w-8 h-8 p-6 leading-6"><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
            <div>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
            </div>
        </footer>
    )
}
