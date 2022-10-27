import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             
    <section id="topbar" class="fixed-top d-flex align-items-center">
        <div class="container d-flex flex-row-reverse justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope d-flex align-items-center">
                    <Link href="mailto:priyoshopretail@gmail.com">priyoshopretail@gmail.com </Link></i> &nbsp; &nbsp;
                <i class="fa fa-phone"><span>09636102030</span></i> &nbsp; &nbsp;

                <button id="switch-lang" type="button" class="btn btn-danger" onclick="switchLang()"><i
                        class="fa fa-globe"></i>
                    <span lang="bn">Eng</span> <span lang="dz">বাং</span> </button>

            </div>
        </div>
    </section>


 {/* ======= Header =======  */}
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <h1 class="logo"> <Link href="index.html"> <img src="img/logo/retailLogoHeader.png" alt="Retail Logo"
                        class="img-fluid"/></Link>
            </h1>

            <nav id="navbar" class="navbar">
                <ul>
                    <li lang="dz"><Link class="nav-link scrollto" href="#contact">Sale with Us</Link></li>
                    <li lang="bn"><Link class="nav-link scrollto" href="#contact">ম্যানুফ্যাকচারার হিসাবে নিবন্ধন করুন</Link>
                    </li>
                    <li lang="dz"><Link class="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero" >
                            Join as a Retailer</Link>
                    </li>
                    <li lang="bn"><Link class="nav-link"
                            href="https://play.google.com/store/apps/details?id=com.priyoshop.zero">
                            রিটেইলার হিসাবে জয়েন করুন
                        </Link>
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
         {/* -- .navbar  */}
        </div>
    </header>
   {/* End Header  */}


     {/* ======= Hero Section =======  */}
    <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <h1 lang="dz">All product in the store</h1>
            <h1 lang="bn">দোকানে থেকেই সকল পণ্য</h1>
            <h1 lang="dz">Wholesale price with one click</h1>
            <h1 lang="bn">এক ক্লিকেই পাইকারি দামে</h1>
            <h1 lang="dz">Buy with <span><b>PriyoShop Retail</b></span>...</h1>
            <h1 lang="bn">কিনুন <span lang="bn"> <strong>প্রিয়শপ রিটেইল</strong> </span> এর সাথে ...</h1>
            <br/>
            <h4 lang="dz">Download the app now</h4>
            <h4 lang="bn">জয়েন করুন আমাদের সাথে</h4> 
            <div class="d-flex">
                <Link href="https://play.google.com/store/apps/details?id=com.priyoshop.zero"> <img
                        src="img/logo/Play-Store-Logo.png" alt="Play-Store-Logo" class="img-fluid"
                        style="max-width: 150px;"/></Link>
            </div>
        </div>
    </section>
    
     {/* End Hero  */}

    <main id="main">

       {/* ======= About List Section =======  */}
        <section id="about" class="about">
            <div class="container">
                <div class="section-title" data-aos="zoom-out" data-aos-delay="100">
                    <h1 lang="dz">Why PriyoShop Retail?</h1>
                    <h1 lang="bn">কেন প্রিয়শপ রিটেইল ?</h1>
                </div>
                <div class="row p-4 px-md-0">
                    <div class="col-lg-7 order-2 order-lg-1">
                        <div class="icon-box mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                            <div class="row">
                                <div class="col-2 col-lg-2 d-flex align-items-center justify-content-center"
                                    id="box-img">
                                    <img src="/img/about/FastDelivery.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-10 col-lg-10">
                                    <h2 lang="dz">Fast delivery</h2>
                                    <h2 lang="bn">দ্রুত ডেলিভারি</h2>
                                    <p lang="dz">We confirm the product within 24 hours Delivered to retailer stores</p>
                                    <p lang="bn">আমরা নিশ্চিত করছি ২৪ঘন্টার মধ্যে পণ্য রিটেইলারের দোকানে পৌছে দেয়া</p>
                                </div>
                            </div>
                        </div>
                        <div class="icon-box mt-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="row">
                                <div class="col-2 d-flex  align-items-center justify-content-center" id="box-img">
                                    <img src="/img/about/BestPrice.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-10">
                                    <h2 lang="dz">Best price</h2>
                                    <h2 lang="bn">সেরা মূল্য</h2>
                                    <p lang="dz">We guarantee the highest wholesale price</p>
                                    <p lang="bn">আমরা দিচ্ছি সর্বোচ্চ পাইকারি দামের নিশ্চয়তা</p>
                                </div>
                            </div>

                        </div>
                        <div class="icon-box mt-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="row">
                                <div class="col-2 d-flex  align-items-center justify-content-center" id="box-img">
                                    <img src="img/about/sku.png" alt="" class="img-fluid"/>
                                </div>
                                <div class="col-10">
                                    <h2 lang="dz">Variety of SKU</h2>
                                    <h2 lang="bn">SKU এর বিভিন্নতা</h2>
                                    <p lang="dz">We are providing one app - all these products</p>
                                    <p lang="bn">আমরা দিচ্ছি এক এপ-এই সব পণ্যের যোগান</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class=" image col-lg-3 order-2 order-lg-2" data-aos="fade-up" data-aos-delay="100"
                        style='background-image: url("img/about/main.png");'></div>
                </div>
            </div>
        </section>
        {/* -- End About List Section  */}

        {/* ======= Brands Section ======= */}
        <section id="brands" class="brands section-bg">
            <div class="container" data-aos="zoom-in">
                <div class="section-title">
                    <h1 lang="dz">Our top selling brands</h1>
                    <h1 lang="bn">যারা কাজ করছে আমাদের সাথে</h1>
                </div>
                <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/aci.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/ispahani.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/acme.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/png.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Dabur.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Marico.png" class="img-fluid" alt=""/>
                    </div>

                </div>
                <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Nestle.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/fresh.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/rashid.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/teer.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/reckitt.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/pusti.png" class="img-fluid" alt=""/>
                    </div>

                </div>

            </div>
        </section>
      {/* -- End Brands Section  */}

        {/* ======= Testimonials Section =======  */}
        <section id="testimonials" class="testimonials">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h1 lang="dz">Our top retailer</h1>
                    <h1 lang="bn">আমাদের টপ রিটেইলার</h1>
                </div>

                <div class="testimonials-slider swiper">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-3.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item - */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-4.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-5.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-6.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-7.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-8.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-9.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-10.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                      {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-11.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                       {/* -- End testimonial item -- */}

                        <div class="swiper-slide">
                            <div class="testimonial-item">
                                <img src="img/retailer/testimonials-12.jpg" class="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
        {/* - End Testimonials Section -- */}


         {/* ======= Investors Section =======  */}
        <section id="investors" class="investors section-bg">
            <div class="container" data-aos="zoom-in">
                <div class="section-title">
                    <h1 lang="dz">Our Investors</h1>
                    <h1 lang="bn">আমাদের বিনিয়োগকারী</h1>
                </div>
                <div class="row align-items-center justify-content-center">

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/a-asia.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Asymmetry-Ventures.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/bansea.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Flagship-Ventures.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Sabr-Capital.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/sbk.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/sosv.png" class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>
        </section>
        {/* -- End Investors Section -- */}


        {/* -- ======= Counts Section ======= -- */}
        <section id="counts" class="counts">
            <div class="container position-relative">
                <div class="text-center title">
                    <h1 lang="dz">What we have achieved so far</h1>
                    <h1 lang="bn">আমরা এ পর্যন্ত যা অর্জন করেছি</h1>
                </div>

                <div class="row counters">
                    <div class="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">Our coverage area</p>
                        <p lang="bn">আমাদের কভারেজ এরিয়া</p>
                        <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="1"
                            class="purecounter">
                        </span>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">We have improved the quality of life of retailers</p>
                        <p lang="bn">রিটেইলারের জীবনমান উন্নয়ন করেছি</p>
                        <h5 data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1"
                            class="purecounter">
                        </h5>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">Total order delivery</p>
                        <p lang="bn">সর্বমোট অর্ডার ডেলিভারি</p>
                        <h6 data-purecounter-start=" 0" data-purecounter-end="4" data-purecounter-duration="1"
                            class="purecounter">
                        </h6>
                    </div>
                </div>
            </div>
        </section>
        {/* -- End Counts Section --> */}


        {/* -- ======= Portfolio Section ======= --> */}
        <section id="portfolio" class="portfolio section-bg">
            <div class="container">
                <div class="section-title">
                    <h1 lang="dz">Our Recognition</h1>
                    <h1 lang="bn">আমাদের যত অর্জন</h1>
                </div>

                <div class="row portfolio-container">
                    <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/5.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/4.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/6.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/2.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/1.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/3.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/7.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/12.jpg" class="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/9.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/10.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/11.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div class="portfolio-wrap">
                            <img src="img/recognition/8.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* -- End Portfolio Section --> */}

        {/* -- ======= Frequently Asked Questions Section ======= --> */}
        <section id=" faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <ul class="faq-list">

                            <li>
                                <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">
                                    Non consectetur a
                                    erat nam at lectus urna duis? <i class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                        volutpat lacus
                                        laoreet non curabitur gravida. Venenatis lectus magna fringilla
                                        urna porttitor
                                        rhoncus dolor purus non.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">
                                    Feugiat
                                    scelerisque varius morbi enim nunc faucibus a pellentesque? <i
                                        class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant
                                        morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus
                                        faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit
                                        ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">
                                    Dolor sit amet
                                    consectetur adipiscing elit pellentesque habitant morbi? <i
                                        class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                        sagittis orci.
                                        Faucibus pulvinar elementum integer enim. Sem nulla pharetra
                                        diam sit amet nisl
                                        suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna
                                        duis convallis
                                        convallis tellus. Urna molestie at elementum eu facilisis sed
                                        odio morbi quis
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">
                                    Ac odio tempor
                                    orci dapibus. Aliquam eleifend mi in nulla? <i
                                        class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant
                                        morbi. Id
                                        interdum velit laoreet id donec ultrices. Fringilla phasellus
                                        faucibus
                                        scelerisque eleifend donec pretium. Est pellentesque elit
                                        ullamcorper dignissim.
                                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">
                                    Tempus quam
                                    pellentesque nec nam aliquam sem et tortor consequat? <i
                                        class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo.
                                        Dignissim
                                        suspendisse in est ante in. Nunc vel risus commodo viverra
                                        maecenas accumsan.
                                        Sit amet nisl suscipit adipiscing bibendum est. Purus gravida
                                        quis blandit
                                        turpis cursus in
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div data-bs-toggle="collapse" href="#faq6" class="collapsed question">
                                    Tortor vitae
                                    purus faucibus ornare. Varius vel pharetra vel turpis nunc eget
                                    lorem dolor? <i class="bi bi-chevron-down icon-show"></i><i
                                        class="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                                    <p>
                                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                                        vitae ultricies
                                        leo integer malesuada nunc vel. Tincidunt eget nullam non nisi
                                        est sit amet.
                                        Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus
                                        vulputate eu
                                        scelerisque. Pellentesque diam volutpat commodo sed egestas
                                        egestas fringilla
                                        phasellus faucibus. Nibh tellus molestie nunc non blandit massa
                                        enim nec.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </section> 

        {/* -- End Frequently Asked Questions Section --> */}

        {/* -- ======= Investors Section ======= --> */}
        <section id="achievements" class="achievements">
            <div class="container" data-aos="zoom-in">
                <div class="section-title">
                    <h1 lang="dz">Some of our features</h1>
                    <h1 lang="bn">আমাদেরকে যারা ফিচার করেছে</h1>
                </div>
                <div class="row">

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://www.techinasia.com/priyoshop-helps-retailers-rural-bangladesh-online"
                           > <img src="img/features/techInAsia.png" class="img-fluid" alt=""/></Link>
                    
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://www.prothomalo.com/business/%E0%A6%86%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%B6%E0%A6%AA-%E0%A6%B8%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F"
                           > <img src="img/features/prothomalo.png" class="img-fluid" alt=""/></Link>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://www.samakal.com/todays-print-edition/tp-techlife/article/200225262/%E0%A6%87%E0%A6%95%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A7%87-%E0%A7%AB%E0%A7%A6-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE-%E0%A6%A4%E0%A7%88%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A6%9B%E0%A6%BF"
                           >
                            <img src="img/features/somokal.png" class="img-fluid" alt=""/></Link>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://www.kalerkantho.com/online/corporatecorner/2020/04/03/894351">
                            <img src="img/features/kalerkontho.png" class="img-fluid" alt=""/></Link>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://www.thedailystar.net/lifestyle/news/priyoshop-organising-commerce-empowering-msme-technology-brands-2000769"
                           > <img src="img/features/dailyStar.png" class="img-fluid" alt=""/></Link>
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <Link href="https://sarabangla.net/post/sb-562543/">
                            <img src="img/features/sarabangla.png" class="img-fluid" alt=""/>
                        </Link>
                    </div>


                </div>
            </div>
        </section>
        {/* -- End Investors Section --> */}

        {/* -- ======= Jobs Section ======= --> */}
        <section id="job" class="job_section">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h1 lang="dz" class="text-white">Jobs</h1>
                    <h1 lang="bn" class="text-white">চাকরী</h1>
                </div>

                <div class="job_wrap">
                    <div class="row px-5 mx-5" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="job_info">
                                <p>
                                    We Work Hard, But We Learn With Fun! <br/>
                                    Bangladesh-Singapore based Super Startup Asia and National ICT Award-winning Company
                                    'PriyoShop.com Ltd.' is looking for some brilliant minds in different departments.
                                    We are always searching for passionate, talented and creative people to join our
                                    teams and creating scope to learn under great leaders.
                                </p>

                                <Link  to={<career/>} > See Jobs → </Link>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="job_img">
                                <img src="./img/seeJobs.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* -- ======= Jobs Section End======= --> */}

        {/* -- ======= Contact Section ======= --> */}
        <section id="contact" class="contact section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h1 lang="dz">Contact with us</h1>
                    <h1 lang="bn">আমাদের সাথে যোগাযোগ করুন</h1>
                </div>
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                    <div class="col">
                        <form method="post" name="myForm" id="myForm" role="form" class="php-email-form">
                            <div class="row">
                                <div class="col form-group">
                                    <input type="text" name="name" class="form-control" id="name"
                                        placeholder="Your Name" required/>
                                </div>
                                <div class="col form-group">
                                    <input type="number" class="form-control" name="phoneNo" id="phoneNo"
                                        placeholder="Your Phone Number" required/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col form-group">
                                    <input type="text" name="company" class="form-control" id="company"
                                        placeholder="Your Company Name" required/>
                                </div>
                                <div class="col form-group">
                                    <input type="text" class="form-control" name="position" id="position"
                                        placeholder="Your Position or Team" required/>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="email" class="form-control" name="mail" id="mail" placeholder="Your Email"
                                    required/>
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject"
                                    placeholder="Mail Subject" required/>
                            </div>

                            <div class="form-group">
                                <textarea type="text" class="form-control" name="details" id="details" rows="5"
                                    placeholder="Message" required></textarea>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-danger" onclick="sendEmail()"><span lang="dz">Send
                                        Message</span>
                                    <span lang="bn">বার্তা প্রেরন করুন</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* -- End Contact Section --> */}

    </main>
    {/* -- End #main --> */}


    {/* -- ======= Footer ======= --> */}
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
                                    <Link href="https://play.google.com/store/apps/details?id=com.priyoshop.zero"
                                       >
                                        <img src="img/footer/Play-Store-Logo.png" alt="" class="img-fluid"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-6 footer-links">
                        <h3 lang="dz">Useful Links</h3>
                        <h3 lang="bn">প্রয়োজনীয় লিংকগুলো</h3>
                        <ul>
                            <li lang="dz"><i class="bx bx-chevron-right"></i> <Link href="terms-of-service.html">Terms Of
                                    Service</Link></li>
                            <li lang="bn"><i class="bx bx-chevron-right"></i> <Link href="terms-of-service.html">ব্যবহারের
                                    শর্তাবলী</Link></li>

                            <li lang="dz"><i class="bx bx-chevron-right"></i> <Link href="privacy-policy.html">Privacy
                                    Policy</Link></li>
                            <li lang="bn"><i class="bx bx-chevron-right"></i> <Link href="privacy-policy.html">প্রাইভেসী
                                    পলিসি</Link></li>

                            <li lang="dz"><i class="bx bx-chevron-right"></i> <Link href="career.html">Career </Link></li>
                            <li lang="bn"><i class="bx bx-chevron-right"></i> <Link href="career.html">ক্যারিয়ার</Link></li>
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

                    <div class="col-lg-4 col-md-4 col-sm-6 footer-links">
                        <h3 lang="dz">Our Social Networks</h3>
                        <h3 lang="bn">সোশাল মিডিয়ায় আমরা</h3>
                        <h5 lang="dz">Stay connected with us</h5>
                        <h5 lang="bn">আমাদের সাথে যুক্ত থাকুন</h5>
                        <div class="social-links mt-3">
                            <Link href="https://twitter.com/priyoshopcom" class="twitter"><i
                                    class="bx bxl-twitter"></i></Link>
                            <Link href="https://www.facebook.com/PriyoShopb2b" class="facebook"><i
                                    class="bx bxl-facebook"></i></Link>
                            <Link href="https://www.instagram.com/priyoshop/" class="instagram"><i
                                    class="bx bxl-instagram"></i></Link>
                            <Link href="https://www.youtube.com/channel/UCa9OQR31OFrEmgOzPSPguuA"
                                class="youtube"><i class="bx bxl-youtube"></i></Link>
                            <Link href="https://www.linkedin.com/company/priyoshopcom" class="linkedin"><i
                                    class="bx bxl-linkedin"></i></Link>
                        </div>
                        <h3 lang="dz">Company Information</h3>
                        <h3 lang="bn">কোম্পানীর তথ্যঃ</h3>
                        <div class="company_details">
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

        <div class="footer-bottom pt-1 d-flex align-items-center justify-content-center">
            <span lang="dz">
                &copy; All Rights Reserved by 2022 PriyoShop.com Limited
            </span>
            <span lang="bn">
                &copy; ২০২২ প্রিয়শপ ডটকম লিমিটেড দ্বারা সমস্ত অধিকার সংরক্ষিত
            </span>
        </div>
    </footer>
     {/* End Footer  */}

    <div id="preloader"></div>
    <Link href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
            class="bi bi-arrow-up-short"></i></Link>

            
        </div>
    );
};

export default Header;