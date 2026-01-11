import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const MainLayout = () => {
    return (
        <div className="app-container">
            <NavBar />

            <main style={{ minHeight: "80vh" }}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout