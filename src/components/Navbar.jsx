import { Link } from "./Link"

export function NavBar() {
    return (
        <header className="sticky top-0 w-full bg-neutral-100 h-20 flex items-center justify-between p-8 shadow-sm shadow-slate-200/50 z-20 backdrop-blur-md" >
            <Link href="/" aria-label="RENOVA TECH - Inicio">
                <h1 className="text-slate-900 text-xl tracking-tighter font-(font-inter) font-extrabold">RENOVA TECH</h1>
            </Link>

            <nav className="md:flex gap-8 text-slate-600 items-center" aria-label="Navegación principal">
                <Link href="/" className="text-blue-700 font-nimbus font-bold border-b-2" aria-current="page">Home</Link>
                <Link href="/services" className="transition hover:text-blue-600">Services</Link>
                <Link href="/support" className="transition hover:text-blue-600">Support</Link>
            </nav>

            <div className="flex gap-5 items-center" aria-label="Acciones de usuario">
                <Link href="/login" className="text-[#1D4ED8] text-sm font-bold py-2 px-6 transition hover:scale-105 hover:opacity-90 rounded-xl">Login</Link>
                <Link href="/register" className="bg-primary text-white max-w-25 text-sm font-bold py-2.5 px-6 border border-primary rounded-xl shadow-md shadow-primary/50 transition hover:opacity-90  hover:scale-105 active:duration-75">Register</Link>
            </div>
        </header>
    )
}