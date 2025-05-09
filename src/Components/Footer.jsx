import React from 'react'

const Footer = () => {
  return (
   <>
     <footer id="footer" className="footer layout-03">
        <div className="footer-content background-footer-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
                        <section className="footer-item">
                            <h3 className="section-title">Transport Offices</h3>
                            <div className="contact-info-block footer-layout xs-padding-top-10px">
                                <ul className="contact-lines">
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-location"></i>
                                            <b className="desc">Samriddho Enterprise, 6 no Road , HB town , Sodepur, Kolkata, West Bengal, 700110 </b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-phone"></i>
                                            <b className="desc">Phone: +91 9062828218</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-letter"></i>
                                            <b className="desc">Email: info@samriddhoenterprise.in</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="biolife-icon icon-clock"></i>
                                            <b className="desc">Hours: 7 Days a week from 10:00 am</b>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3  col-xs-6  md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Company</h3>
                            <div className="wrap-custom-menu vertical-menu-2">
                                <ul className="menu">
                                    <li><a href="#" className='text-decoration-none'>Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Project Protection</a></li>
                                    <li><a href="#">Delivery infomation</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    {/* <div className="col-lg-2 col-md-2 col-sm-3  col-xs-6  md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Product</h3>
                            <div className="wrap-custom-menu vertical-menu-2">
                                <ul className="menu">
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="#">One Click Apps</a></li>
                                    <li><a href="#">Feed Back</a></li>
                                </ul>
                            </div>
                        </section>
                    </div> */}
                    <div className="col-lg-4 col-md-4 col-sm-6  col-xs-12 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Newsletter Signup</h3>
                            <div className="newsletter-block layout-02">
                                <div className="form-content">
                                    <form action="#" name="new-letter-foter">
                                        <input type="email" className="input-text email" value="" placeholder="Your email here..."/>
                                        <button type="submit" className="bnt-submit" name="ok">Sign up</button>
                                    </form>
                                </div>
                            </div>
                            <div className="biolife-social inline bigger-on-mobile sm-margin-top-25px xs-margin-top-45px">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                           
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="separator sm-margin-top-62px xs-margin-top-40px"></div>
                    </div>
                    <div className="col-lg-12 col-sm-12 col-xs-12 text-center p-2">
                       <div className="copy-right-text"><p><a href="#" className='text-dark'>Copyright © Synthosphere Technologies Private Limited 2025</a></p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Footer