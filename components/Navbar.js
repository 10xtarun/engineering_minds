import Link from "next/link"
function Navbar() {
    return (
        <>
            <header className="header">
                {/* topbar */}
                <div className="top_bar">
                    <div className="top_bar_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start" >
                                        <ul className="top_bar_contact_list">
                                            <li><div className="question">Have any questions?</div></li>
                                            {/* <li>
                                            <div>(009) 35475 6688933 32</div>
                                        </li>
                                        <li>
                                            <div>info@elaerntemplate.com</div>
                                        </li> */}
                                        </ul>
                                        <div className="top_bar_login ml-auto">
                                            <ul>
                                                <li>
                                                    <a href="#">Call directly</a>
                                                </li>
                                                <li>
                                                    <a href="#"> WhatsApp: 9821882868</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* header context */}
                <div className="header_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo_container">
                                        <a href="#">
                                            <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                                                {/* <div className="logo_img"><img src="https://via.placeholder.com/75x50.png?text=Engineering+Minds" alt="" /></div> */}
                                                <div className="logo_text">Engineering Minds</div>
                                            </div>
                                        </a>
                                    </div>
                                    <nav className="main_nav_contaner ml-auto">
                                        <ul className="main_nav">
                                            <li className="active">
                                                <Link href="/">
                                                    <a >Home</a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/">
                                                    <a >Upcoming Batches</a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/">
                                                    <a >Results</a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/">
                                                    <a >Testimonials</a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/">
                                                    <a >Faculty</a>
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/">
                                                    <a >Locate Us</a>
                                                </Link>
                                            </li>

                                        </ul>

                                        {/* Hamburger  */}

                                        <div className="hamburger menu_mm">
                                            <i className="fa fa-bars menu_mm" aria-hidden="true"></i>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* menu bar */}
            <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
                <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>

                <nav className="menu_nav">
                    <ul className="menu_mm">
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Home</a>
                            </Link></li>
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Upcoming Batches</a>
                            </Link></li>
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Results</a>
                            </Link></li>
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Testimonials</a>
                            </Link></li>
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Faculty</a>
                            </Link></li>
                        <li className="menu_mm">
                            <Link href="/">
                                <a >Locate Us</a>
                            </Link></li>
                    </ul>
                </nav>
                <div className="menu_extra">
                    <div className="menu_phone"><span className="menu_title">phone:</span>9821882868</div>
                    <div className="menu_social">
                        <span className="menu_title">follow us</span>
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar