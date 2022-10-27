import React from 'react';

const TermsOfService = () => {
    return (
        <div>
             {/* - ======= Top Bar ======= --> */}
    <section id="topbar" class="fixed-top d-flex align-items-center">
        <div class="container d-flex flex-row-reverse justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope d-flex align-items-center">
                    <a href="mailto:priyoshopretail@gmail.com">priyoshopretail@gmail.com </a></i> &nbsp; &nbsp;
                <i class="fa fa-phone"><span>09636102030</span></i> &nbsp; &nbsp;

                <button id="switch-lang" type="button" class="btn btn-danger" onclick="switchLang()"><i
                        class="fa fa-globe"></i>
                    <span lang="bn">Eng</span> <span lang="dz">বাং</span> </button>

            </div>
        </div>
    </section>


    {/* - ======= Header ======= --> */}
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <h1 class="logo"> <a href="index.html"> <img src="img/logo/retailLogoHeader.png" alt="Retail Logo"
                        class="img-fluid"/></a>
            </h1>
            <nav id="navbar" class="navbar">
                <ul>
                    <li lang="dz"><a class="nav-link scrollto" href="#contact">Sale with Us</a></li>
                    <li lang="bn"><a class="nav-link scrollto" href="#contact">ম্যানুফ্যাকচারার হিসাবে নিবন্ধন করুন</a>
                    </li>
                    <li lang="dz"><a class="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero" target="_blank">
                            Join as a Retailer</a>
                    </li>
                    <li lang="bn"><a class="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero" target="_blank">
                            রিটেইলার হিসাবে জয়েন করুন
                        </a>
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
             {/* .navbar --> */}
        </div>
    </header>
    {/* End Header --> */}

    <main id="main">
        <section>
            <div class="container" id="detailPage">
                <p>The domain name <a href="www.priyoshopretail.com">www.priyoshopretail.com</a> is owned by PriyoShop
                    Pte Ltd.,
                    whose registered office is at House: 31/A, Dhanmondi-8, Dhaka.
                </p>

                <p>Your use of this e-commerce portal and its services and tools are governed by the following
                    terms and conditions (Terms of Use) as applicable to the website.
                    When you visit the website, you are subject to the policies that are applicable here.
                </p>

                <p>For the purpose of these Terms of Use, wherever the context so requires ‘You’ or ‘User’ or ‘Visitor’
                    will mean any natural or legal person who has agreed to become a member of the site by signing up.
                    PriyoShop Retail allows users to surf the website or make purchases without registering on the
                    website.
                    The term “we”, “us”, “our” will mean <a href="https://PriyoShopRetail.com">PriyoShopRetail.com</a>.
                </p>

                <p>When you use <a href="https://PriyoShopRetail.com">PriyoShopRetail.com</a>, we collect and store your
                    personal information which is provided
                    by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, and
                    customized experience. This allows us to provide services and features that most likely meet your
                    needs.
                    If you choose to buy on the website, we collect information about your buying behavior.
                </p>


                <p>If you choose to mail us or leave feedback, we will collect that information you provide to us.
                    We retain this information as necessary to resolve disputes, provide customer support and
                    troubleshoot
                    problems as permitted by law. In our efforts to continually improve our product and service
                    offerings,
                    we collect and analyze demographic and profile data about our users’ activity on our website. Our
                    website may
                    link to other websites too. These links are provided for your convenience to provide further
                    information.
                    <a href="https://PriyoShopRetail.com">PriyoShopRetail.com</a> is not responsible for the practices,
                    terms of use or the content of those linked websites.
                </p>

                <p>This website contains materials which are owned by us. These materials include, but are not limited
                    to,
                    the design, look, appearance, data, and graphics. Reproduction is prohibited other than in
                    accordance with
                    the copyright law. Unauthorized use of this site may give rise to a claim for damages.
                    Products at this e-commerce portal are sold by big brands. All materials on this site are protected
                    by
                    copyrights, trademarks, and other intellectual property rights. Material on the website is solely
                    for personal
                    and non-commercial use of users. Without the prior written consent of the owner, modification or use
                    of the materials
                    on any other website is violation of the law, and is prohibited.
                </p>


                <p>We reserve the right to change, modify, add or remove portions of these Terms of Use at any time
                    without any prior written notice.
                    If we decide to change the terms of use, we will post those changes on this page so that you are
                    always
                    aware of what information we collect and how we use it.
                </p>
            </div>

        </section>
    </main>

    {/* - ======= Footer ======= --> */}
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 footer-links">
                        <div class="container footer-img">
                            <div class="d-flex align-items-center justify-content-center pb-4">
                                <img src="img/footer/retailLogo.png" alt="Retail Logo" class="img-fluid"/>
                            </div>
                            <div class="d-flex align-items-center justify-content-center">
                                <div class="col-5">
                                    <img src="img/footer/scanner.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-7">
                                    <a href="https://play.google.com/store/apps/details?id=com.priyoshop.zero"
                                        target="_blank">
                                        <img src="img/footer/Play-Store-Logo.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 footer-links">
                        <h3 lang="dz">Useful Links</h3>
                        <h3 lang="bn">প্রয়োজনীয় লিংকগুলো</h3>
                        <ul>
                            <li lang="dz"><i class="bx bx-chevron-right"></i> <a href="terms-of-service.html">Terms Of
                                    Service</a></li>
                            <li lang="bn"><i class="bx bx-chevron-right"></i> <a href="terms-of-service.html">ব্যবহারের
                                    শর্তাবলী</a></li>
                            <li lang="dz"><i class="bx bx-chevron-right"></i> <a href="privacy-policy.html">Privacy
                                    Policy</a></li>
                            <li lang="bn"><i class="bx bx-chevron-right"></i> <a href="privacy-policy.html">প্রাইভেসী
                                    পলিসি</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 footer-contact">
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
                            <strong>হটলাইন:<i class="bx bxl-gmail"></i></strong> 09636102030<br/>
                            <strong>ইমেইল:</strong> priyoshopretail@gmail.com<br/>
                        </p>
                    </div>

                    <div class="col-lg-3 col-md-3 col-sm-6 footer-links">
                        <h3 lang="dz">Our Social Networks</h3>
                        <h3 lang="bn">সোশাল মিডিয়ায় আমরা</h3>
                        <h5 lang="dz">Stay connected with us</h5>
                        <h5 lang="bn">আমাদের সাথে যুক্ত থাকুন</h5>
                        <div class="social-links mt-3">
                            <a target="_blank" href="https://twitter.com/priyoshopcom" class="twitter"><i
                                    class="bx bxl-twitter"></i></a>
                            <a target="_blank" href="https://www.facebook.com/PriyoShopcom" class="facebook"><i
                                    class="bx bxl-facebook"></i></a>
                            <a target="_blank" href="https://www.instagram.com/priyoshop/" class="instagram"><i
                                    class="bx bxl-instagram"></i></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCa9OQR31OFrEmgOzPSPguuA"
                                class="youtube"><i class="bx bxl-youtube"></i></a>
                            <a href="https://www.linkedin.com/company/priyoshopcom" target="_blank" class="linkedin"><i
                                    class="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="footer-bottom pt-1 d-flex align-items-center justify-content-center">
            <span lang="dz">
                &copy; All Rights Reserved by 2022 PriyoShop.com Limited
            </span>
            <span lang="bn">
                &copy; ২০২২ প্রিয়শপ ডটকম লিমিটেড দ্বারা সমস্ত অধিকার সংরক্ষিত
            </span>
        </div>
    </footer>
    
    {/* - End Footer --> */}
    <br/>
            
        </div>
    );
};

export default TermsOfService;