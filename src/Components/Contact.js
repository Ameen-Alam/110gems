import React, { Component } from 'react';
import "./Comp.css";


class Contact extends Component {
    render() {
        return (
            <div className="container-fluid padding-2">
                <div className="" style={{ borderBottom: '1px solid #222' }} >
                    <h2 className="pt-3 text-muted pl-3 pl-lg-0" > Most Popular (190)</h2>
                    <br />
                </div>
                <div className="mt-3 px-0 " >
                    <section className="py-3">

                        {/* <!--Grid row--> */}
                        <div className="row">

                            {/* <!--Grid column--> */}
                            <div className="col-md-12">

                                {/* <!--Form with header--> */}
                                <div className="card">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="card-body form">
                                                {/* <!--Header--> */}
                                                <div className="formHeader mb-1 pt-3">
                                                    <h3>
                                                        <i className="fa fa-envelope"></i> Write to us:</h3>
                                                </div>

                                                <br />

                                                <form>
                                                    {/* <!--Grid row--> */}
                                                    <div className="row">

                                                        {/* <!--Grid column--> */}
                                                        <div className="col-md-6">
                                                            <div className="md-form">
                                                                <input type="text" id="form-contact-name" className="form-control" />
                                                                <label htmlFor="form-contact-name" className="">Your name</label>
                                                            </div>
                                                        </div>
                                                        {/* <!--Grid column--> */}

                                                        {/* <!--Grid column--> */}
                                                        <div className="col-md-6">
                                                            <div className="md-form">
                                                                <input type="text" id="form-contact-email" className="form-control" />
                                                                <label htmlFor="form-contact-email" className="">Your email</label>
                                                            </div>
                                                        </div>
                                                        {/* <!--Grid column--> */}

                                                    </div>
                                                    {/* <!--Grid row--> */}

                                                    {/* <!--Grid row--> */}
                                                    <div className="row">

                                                        {/* <!--Grid column--> */}
                                                        <div className="col-md-6">
                                                            <div className="md-form">
                                                                <input type="text" id="form-contact-phone" className="form-control" />
                                                                <label htmlFor="form-contact-phone" className="">Your phone</label>
                                                            </div>
                                                        </div>
                                                        {/* <!--Grid column--> */}

                                                        {/* <!--Grid column--> */}
                                                        <div className="col-md-6">
                                                            <div className="md-form">
                                                                <input type="text" id="form-contact-company" className="form-control" />
                                                                <label htmlFor="form-contact-company" className="">Your company</label>
                                                            </div>
                                                        </div>
                                                        {/* <!--Grid column--> */}

                                                    </div>
                                                    {/* <!--Grid row--> */}

                                                    {/* <!--Grid row--> */}
                                                    <div className="row">
                                                        {/* <!--Grid column--> */}
                                                        <div className="col-md-12">
                                                            <div className="md-form mb-5">
                                                                <textarea type="text" id="form-contact-message" className="form-control md-textarea" rows="3"></textarea>
                                                                <label htmlFor="form-contact-message">Your message</label>
                                                                <span style={{ position: 'absolute', right: -25, bottom: -20, borderRadius: '100%', padding: "14px 15px" }} className="mx-3 text-white btn-cyan btn btn-floating darken-4" data-slide="next"><i style={{ fontSize: 22, }} className="fa fa-send-o"></i></span>
                                                            </div>
                                                        </div>
                                                        {/* <!--Grid column--> */}

                                                    </div>
                                                    {/* <!--Grid row--> */}
                                                </form>

                                            </div>
                                        </div>

                                        <div className="col-lg-4 bg-info text-white">
                                            <div className="card-body contact text-center ">
                                                <div className="mb-5">
                                                    <h3>Contact information</h3>
                                                </div>

                                                <ul className="contact-icons list-unstyled ml-4">
                                                    <li>
                                                        <i className="fa fa-map-marker"></i>
                                                        <p>H/N R-71 Sec 5-M, North Karachi 75850, PK</p>
                                                    </li>

                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <p>+92 304 386 6719</p>
                                                    </li>

                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <p>ameenalam202@gmail.com</p>
                                                    </li>
                                                </ul>

                                                <hr className="hr-light mb-4 mt-4" />

                                                <ul className="list-inline text-center list-unstyled">
                                                    <li className="list-inline-item">
                                                        <a onClick={() => window.open("https://twitter.com/Ameen__Alam", "_blank")} className="icons-sm tw-ic">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a onClick={() => window.open("https://www.linkedin.com/in/ameen-alam-375390134/", "_blank")} className="icons-sm li-ic">
                                                            <i className="fa fa-linkedin"> </i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a onClick={() => window.open("https://www.instagram.com/ameen_alam_bootcamp/?hl=en", "_blank")} className="icons-sm ins-ic">
                                                            <i className="fa fa-instagram"> </i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--/Form with header--> */}

                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}

                    </section>
                    <div id="map-container" className="mb-2 rounded z-depth-1-half map-container" style={{ height: 400 }}>
                        <iframe title="karchi pakistan" style={{ width: '100%', height: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.1418475652371!2d67.07921332916966!3d24.944376815004443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f59ac5527d3%3A0x9e5d303ee51fec57!2sImambargah+Bargah-e-Chahardah+Masoomeen+A.S!5e1!3m2!1sen!2s!4v1523544322416" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    {/* <!--Section: Contact v.3--> */}

                    {/* <!--Google map--> */}
                </div>
            </div>
        )
    }
}
export default Contact;