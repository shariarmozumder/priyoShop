import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 footer-links">
                        <div className="container footer-img">
                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <img src="img/footer/retailLogo.png" alt="Retail Logo" className="img-fluid"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="col-5">
                                    <img src="img/footer/scanner.png" alt="" className="img-fluid"/>
                                </div>
                                <div className="col-7">
                                    <a href="https://play.google.com/store/apps/details?id=com.priyoshop.zero"
                                       >
                                        <img src="img/footer/Play-Store-Logo.png" alt="" className="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2 col-sm-6 footer-links">
                        <h3 lang="dz">Useful Links</h3>
                        <h3 lang="bn">প্রয়োজনীয় লিংকগুলো</h3>
                        <ul>
                            <li lang="dz"><i className="bx bx-chevron-right"></i>
                            <Link to="/term"> <a to="/term">Terms Of
                                    Service</a></Link>
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="/term"><a to="">ব্যবহারের
                                    শর্তাবলী</a></Link>
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                            <Link to="/privacy"><a to="">Privacy
                                    Policy</a></Link>
                                    </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="/privacy" ><a to="">প্রাইভেসী
                                    পলিসি</a></Link>
                                    </li>

                            <li lang="dz"><i className="bx bx-chevron-right"></i> 
                            <Link to="/carrer">Career </Link>
                            </li>
                            <li lang="bn"><i className="bx bx-chevron-right"></i> 
                            <Link to="/carrer">ক্যারিয়ার</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 footer-contact">
                        <h3 lang="dz">Contact Us</h3>
                        <h3 lang="bn">যোগাযোগ</h3>
                        <p lang="dz">
                            House: 31/A, Dhanmondi-8, <br/>
                            Dhaka-1205 <br/><br/>
                            <strong>Phone:</strong> 09636102030<br/>
                            <strong>Email:</strong> priyoshopretail@gmail.com<br/>
                        </p>
                        <p lang="bn">
                            বাড়ি ৩১/এ, ধানমন্ডি ৮, <br/>
                            ঢাকা-১২০৫ <br/><br/>
                            <strong>হটলাইন:<i className="bx bxl-gmail"></i></strong> 09636102030<br/>
                            <strong>ইমেইল:</strong> priyoshopretail@gmail.com<br/>
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 footer-links">
                        <h3 lang="dz">Our Social Networks</h3>
                        <h3 lang="bn">সোশাল মিডিয়ায় আমরা</h3>
                        <h5 lang="dz">Stay connected with us</h5>
                        <h5 lang="bn">আমাদের সাথে যুক্ত থাকুন</h5>
                        <div className="social-links mt-3">
                            <a href="https://twitter.com/priyoshopcom" className="twitter"><i
                                    className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/PriyoShopb2b" className="facebook"><i
                                    className="bx bxl-facebook"></i></a>
                            <a href="https://www.instagram.com/priyoshop/" className="instagram"><i
                                    className="bx bxl-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCa9OQR31OFrEmgOzPSPguuA"
                                className="youtube"><i className="bx bxl-youtube"></i></a>
                            <a href="https://www.linkedin.com/company/priyoshopcom" className="linkedin"><i
                                    className="bx bxl-linkedin"></i></a>
                        </div>
                        <h3 lang="dz">Company Information</h3>
                        <h3 lang="bn">কোম্পানীর তথ্যঃ</h3>
                        <div className="company_details">
                            <p><strong>Registered Name:</strong> PriyoShop.Com Limited</p>
                            <p><strong>Incorporation No:</strong> C-144267/2018</p>
                            <p><strong>Trade License Number:</strong> TRAD/DSCC/242275/2019</p>
                            <p><strong>Vat Registration Number:</strong> BIN 001196687-0201</p>
                            <p><strong>E-TIN:</strong> 132236527140</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="footer-bottom pt-1 d-flex align-items-center justify-content-center">
            <span lang="dz">
                &copy; All Rights Reserved by 2022 PriyoShop.com Limited
            </span>
            <span lang="bn">
                &copy; ২০২২ প্রিয়শপ ডটকম লিমিটেড দ্বারা সমস্ত অধিকার সংরক্ষিত
            </span>
        </div>
    </footer>
     {/* End Footer  */}
    </div>
  )
}

export default Footer
