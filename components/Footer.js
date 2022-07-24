function Footer() {
    return (

        <footer className="footer pt-4 p-1 py-3">

            <div className="container-fluid text-justify">
                <div className="row px-3">
                    {/* part one */}
                    <div className="col-lg-4 col-md-12 p-1 mt-1">
                        <h4 className="font-weight-bold">engineering minds</h4>

                        <div className="footer_social">
                            <p>Follow Us On:</p>
                            <ul>
                                <li><a href="#"><i className="fa fa-instagram mx-1" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                        <div className="copyright">
                            Copyright &copy; 2022 All rights reserved | Engineering Minds <i className="fa fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />

                    {/* part two */}
                    <div className="col-lg-4 col-md-12 p-1 mt-1">
                        {/* <h5 className="font-weight-bold">Quick Menu</h5> */}
                        <div className="footer_links">
                            <div className="footer_title">Quick Menu</div>
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
                    <hr className="clearfix w-100 d-md-none pb-3 mt-1" />

                    {/* part three */}
                    <div className="col-lg-4 col-md-12 p-1">
                    <div className="footer_contact">
                            <div className="footer_title">Contact Us</div>
                            <div className="footer_contact_info">
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Borivali Address:</div>
                                    <div className="footer_contact_line">Borivali Shopping Centre, A Wing, Road, Shanti Nagar, Borivali West, Mumbai, Maharashtra 400092</div>
                                </div>
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Mulund Address:</div>
                                    <div className="footer_contact_line">Borivali Shopping Centre, A Wing, Road, Shanti Nagar, Borivali West, Mumbai, Maharashtra 400092</div>
                                </div>
                                {/* <div className="footer_contact_item">
                                    <div className="footer_contact_title">Phone:</div>
                                    <div className="footer_contact_line">+91 9821882868</div>
                                </div> */}
                                <div className="footer_contact_item">
                                    <div className="footer_contact_title">Email:</div>
                                    <div className="footer_contact_line">team@engineeringminds.in</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />

                </div>
            </div>
        </footer>
    )
}

export default Footer