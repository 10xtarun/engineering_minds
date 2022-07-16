import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <div className="super_container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout