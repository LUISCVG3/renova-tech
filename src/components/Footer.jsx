import './Footer.css'
export function Footer() {
    return (
        <footer className="bg-transparent flex justify-between h-20 p-8 shadow-primary ">
            <small className="font-(font-Inter) font-medium tracking-[0.28px] text-[11px] text-text-muted">© 2024 RENOVA TECH. ENGINEERED FOR PRECISION BY LUIS ANGEL C. & EMILIANO SANTA CRUZ.</small>

            <div className="footer-politics">
                <a href="#">PRIVACY POLICY</a>
                <a href="#">TERMS OF SERVICE</a>
                <a href="#">SUPPORT</a>
            </div>
        </footer>
    )
}