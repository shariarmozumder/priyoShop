import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
                     <section id="topbar" className="fixed-top d-flex align-items-center">
        <div className="container d-flex flex-row-reverse justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center">
                    <a href="mailto:priyoshopretail@gmail.com">priyoshopretail@gmail.com </a></i> &nbsp; &nbsp;
                <i className="fa fa-phone"><span>09636102030</span></i> &nbsp; &nbsp;
                 {/* missing on click */}
                <button id="switch-lang" type="button" className="btn btn-danger" ><i
                        className="fa fa-globe"></i>
                    <span lang="bn">Eng</span> <span lang="dz">বাং</span> </button>

            </div>
        </div>
    </section>
    {/* ======= Header =======  */}
    <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo"> <Link to="/"> <img src="img/logo/retailLogoHeader.png" alt="Retail Logo"
                        className="img-fluid"/></Link>
            </h1>

            <nav id="navbar" className="navbar">
                <ul>
                    <li lang="dz"><a className="nav-link scrollto" href="#contact">Sale with Us</a></li>
                    <li lang="bn"><a className="nav-link scrollto" href="#contact">ম্যানুফ্যাকচারার হিসাবে নিবন্ধন করুন</a>
                    </li>
                    <li lang="dz"><a className="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero" >
                            Join as a Retailer</a>
                    </li>
                    <li lang="bn"><a className="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero">
                            রিটেইলার হিসাবে জয়েন করুন
                        </a>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </div>
    </header>
                                       {/* End Header  */}



    {/* <div id="preloader"></div>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
            className="bi bi-arrow-up-short"></i></a> */}

        </div>
    );
};

export default Header;