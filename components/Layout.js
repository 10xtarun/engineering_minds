import Footer from "./Footer"
import Navbar from "./Navbar"

function Layout({ children }) {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout