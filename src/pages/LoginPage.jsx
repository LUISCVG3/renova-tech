export function LoginPage() {
    return (
        <main className="bg-linear-to-br from-bggrandient-login via-white to-bggrandient-login flex w-full min-h-[90vh] items-center justify-center">
            <section className="bg-white p-10 flex flex-col items-center justify-center max-w-md h-173 rounded-xl border border-border/20 ">
                <header className="flex flex-col text-center mb-10 items-center gap-2">
                    <div className="flex items-center justify-center">
                        <svg className=" bg-primary/5 w-15 h-15 p-3.5 rounded-2xl icon icon-tabler icons-tabler-outline icon-tabler-login" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00288E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M21 12h-13l3 -3" /><path d="M11 15l-3 -3" /></svg>
                    </div>

                    <div>
                        <h1 className="font-bold text-3xl">Welcome Back</h1>
                        <p className="text-on-surface">Precision engineering for your digital architecture.</p>
                    </div>
                </header>

                <form action="" className="flex flex-col gap-6 ">
                    <div className="">
                        <label htmlFor="email" className="text-text-muted text-xs tracking-[1.2px] font-Nimbus font-bold">EMAIL ADDRESS</label>
                        <div className="max-w-91.5 bg-container border-2 border-container rounded-lg p-2 transition-all duration-200 hover:border-2 hover:border-primary focus-within:border-2">
                            <input type="email" name="email" id="email" placeholder="name@company.com" className="form-inputs" required/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-text-muted text-xs tracking-[1.2px] font-Nimbus font-bold">PASSWORD</label>
                        <div className="max-w-91.5 bg-container border-2 border-container rounded-lg p-2 transition-all duration-200 hover:border-2 hover:border-primary focus-within:border-2">
                            <input type="password" name="password" id="password" placeholder="•••••••" required className="form-inputs"/>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="checkbox">Remember this device for 30 days</label>
                    </div>

                    <button className="bg-primary py-3 text-white text-sm font-bold rounded shadow-2xl shadow-primary/20 cursor-pointer transition hover:opacity-95 hover:scale-101">Login </button>
                </form>
            </section>
        </main >
    )
}