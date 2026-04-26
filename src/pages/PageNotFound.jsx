import { Link } from "../components/Link";

export function PageNotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[88vh]">
            <h1 className="font-mono text-9xl">404</h1>
            <p className="mb-4">Page not Found</p>

            <Link className="bg-primary text-white font-bold mt-3.5 px-4 py-2 rounded-md shadow-md shadow-primary/50 transition hover:scale-101 hover:opacity-90" href="/">Go back to home</Link>
        </main>
    )
}