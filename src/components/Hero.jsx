import { useRouter } from "../hooks/useRouter"

export function Hero() {
    const { navigateTo } = useRouter()

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const textSearch = formData.get('search')
        const codex = encodeURIComponent(textSearch)
        console.log(codex)
        const url = `/search?q=${codex}`
        navigateTo(url)
    }

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
            <div className="absolute inset-0 z-0 min-width: 768px">
                <img alt="Hero Background"
                    className="w-full min-h-[90vh] object-cover brightness-75"
                    data-alt="Modern high-tech glass office with team working on laptops, cinematic wide angle, professional atmosphere with blue and neutral lighting tones"
                    src="/hero.webp" />

                <div className="absolute inset-0 bg-linear-to-r from-slate-900/60 via-slate-900/30 to-slate-900/10" aria-hidden="true"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    <span className="bg-blue-900/10 text-blue-800 border border-blue-900/20 px-4 py-1.5 rounded-xl backdrop-blur-lg animate-slide-up-fade"
                        style={{ animationDelay: "500ms" }}>TRANSFORMACION DIGITAL</span>

                    <h1 id="hero-heading" className="text-6xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                        Soluciones Tecnologicas de Próxima Generacion
                    </h1>
                    <p className="text-white font-light mb-12">Impulsamos el futuro de su empresa con arquitectura de software robusta,
                        inteligencia artificial aplicada y diseño centrado en el usuario.</p>
                </div>

                <form className="w-xl flex group bg-white py-2 px-3 gap-2 rounded-lg focus-within:outline-3 outline-blue-950 shadow-2xl shadow-black/25 hover:outline-3" role="search" onSubmit={handleSubmitForm}>
                    <img src="/public/Iconsearch.svg" alt="" aria-hidden="true" />
                    <input className="text-slate-500 w-full outline-0 font-normal" type="search" placeholder="¿Qué servicio estás buscando?" aria-label="Buscar servicios" name="search" />
                    <button type="submit" className="bg-primary text-white px-6 py-2.5 rounded-sm cursor-pointer transition hover:scale-105">Buscar</button>
                </form>


            </div>



        </section>
    )
}