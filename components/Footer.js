function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row my-0">

                    {/* About  */}
                    <div className="col-lg-3 footer_col">
                        <div className="footer_about">
                            <div className="logo_container">
                                <a href="#">
                                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                                        <div className="logo_img">
                                        <img src="assets/images/em_logo_cropped.jpeg" 
                                        style={{
                                            height: "150px",
                                            zIndex: -1
                                        }}
                                        alt="" /></div>
                                    </div>
                                </a>
                            </div>
                            <div className="footer_about_text">
                                <div className="logo_text" style={{marginTop: "8rem"}}>Engineering Minds</div>
                            </div>
                            <div className="footer_social">
                                <p>Follow Us On:</p>
                                <ul>
                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="copyright">
                                Copyright &copy; All rights reserved | Engineering Minds <i className="fa fa-heart" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 footer_col">
                        <div className="footer_links">
                            <div className="footer_title">Quick menu</div>
                            <ul className="footer_list">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Upcoming Batches</a></li>
                                <li><a href="#">Results</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="contact.html">Faculty</a></li>
                                <li><a href="#">Locate Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 footer_col">
                        <div className="footer_links">
                            <div className="footer_title">Useful Links</div>
                            <ul className="footer_list">
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 footer_col">
                        <div className="footer_contact">
                            <div className="footer_title">Contact Us</div>
                            <div className="footer_contact_info">
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Address:</div>
                                    <div className="footer_contact_line">Borivali Shopping Centre, A Wing, Road, Shanti Nagar, Borivali West, Mumbai, Maharashtra 400092</div>
                                </div>
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Phone:</div>
                                    <div className="footer_contact_line">+91 9821882868</div>
                                </div>
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Email:</div>
                                    <div className="footer_contact_line">help@engineeringminds.in</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer