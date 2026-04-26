export function ServiceCard({ icon: Icon, title, description }) {
    return (
        <article className="group bg-white p-10 max-w-96 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 text-blue-800 bg-[#F2F4F6] rounded-lg w-15 h-15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {Icon && <Icon className="w-7 h-7 text-blue-800" />}
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
                {title}
            </h3>

            <p className="text-slate-500 mt-2">
                {description}
            </p>
        </article>
    );
}