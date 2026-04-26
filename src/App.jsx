import { NavBar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"
import { useRouter } from "./hooks/useRouter"
import { PageNotFound } from "./pages/PageNotFound"
import { ServicesPage } from "./pages/Services"

function App() {
  const { currentPath } = useRouter()

  let page = <PageNotFound />

  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === '/login') {
    page = <LoginPage />
  } else if (currentPath === '/services') {
    page = <ServicesPage />
  }

  return (
    <>
      <NavBar />

      {page}

      <Footer />
    </>
  )
}

export default App
