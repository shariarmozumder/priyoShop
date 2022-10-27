import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>

            <Header/>
                  {/* ======= Hero Section =======  */}
     
        <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1 lang="dz">All product in the store</h1>
            <h1 lang="bn">দোকানে থেকেই সকল পণ্য</h1>
            <h1 lang="dz">Wholesale price with one click</h1>
            <h1 lang="bn">এক ক্লিকেই পাইকারি দামে</h1>
            <h1 lang="dz">Buy with <span><b>PriyoShop Retail</b></span>...</h1>
            <h1 lang="bn">কিনুন <span lang="bn"> <strong>প্রিয়শপ রিটেইল</strong> </span> এর সাথে ...</h1>
            <br/>
            <h4 lang="dz">Download the app now</h4>
            <h4 lang="bn">জয়েন করুন আমাদের সাথে</h4> 
            <div className="d-flex">
                <a href="https://play.google.com/store/apps/details?id=com.priyoshop.zero"> <img
                        src="/img/logo/Play-Store-Logo.png" alt="Play-Store-Logo" className="img-fluid"
                        style={{maxWidth:"150px"}}/></a>
            </div>
        </div>
    </section>
    
     {/* End Hero  */}
     <main id="main">

{/* ======= About List Section =======  */}
 <section id="about" className="about">
     <div className="container">
         <div className="section-title" data-aos="zoom-out" data-aos-delay="100">
             <h1 lang="dz">Why PriyoShop Retail?</h1>
             <h1 lang="bn">কেন প্রিয়শপ রিটেইল ?</h1>
         </div>
         <div className="row p-4 px-md-0">
             <div className="col-lg-7 order-2 order-lg-1">
                 <div className="icon-box mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                     <div className="row">
                         <div className="col-2 col-lg-2 d-flex align-items-center justify-content-center"
                             id="box-img">
                             <img src="/img/about/FastDelivery.png" alt="" className="img-fluid"/>
                         </div>
                         <div className="col-10 col-lg-10">
                             <h2 lang="dz">Fast delivery</h2>
                             <h2 lang="bn">দ্রুত ডেলিভারি</h2>
                             <p lang="dz">We confirm the product within 24 hours Delivered to retailer stores</p>
                             <p lang="bn">আমরা নিশ্চিত করছি ২৪ঘন্টার মধ্যে পণ্য রিটেইলারের দোকানে পৌছে দেয়া</p>
                         </div>
                     </div>
                 </div>
                 <div className="icon-box mt-3" data-aos="fade-up" data-aos-delay="100">
                     <div className="row">
                         <div className="col-2 d-flex  align-items-center justify-content-center" id="box-img">
                             <img src="/img/about/BestPrice.png" alt="" className="img-fluid"/>
                         </div>
                         <div className="col-10">
                             <h2 lang="dz">Best price</h2>
                             <h2 lang="bn">সেরা মূল্য</h2>
                             <p lang="dz">We guarantee the highest wholesale price</p>
                             <p lang="bn">আমরা দিচ্ছি সর্বোচ্চ পাইকারি দামের নিশ্চয়তা</p>
                         </div>
                     </div>

                 </div>
                 <div className="icon-box mt-3" data-aos="fade-up" data-aos-delay="100">
                     <div className="row">
                         <div className="col-2 d-flex  align-items-center justify-content-center" id="box-img">
                             <img src="img/about/sku.png" alt="" className="img-fluid"/>
                         </div>
                         <div className="col-10">
                             <h2 lang="dz">Variety of SKU</h2>
                             <h2 lang="bn">SKU এর বিভিন্নতা</h2>
                             <p lang="dz">We are providing one app - all these products</p>
                             <p lang="bn">আমরা দিচ্ছি এক এপ-এই সব পণ্যের যোগান</p>
                         </div>
                     </div>

                 </div>
             </div>
             <div className=" image col-lg-3 order-2 order-lg-2" data-aos="fade-up" data-aos-delay="100"
                 style={{backgroundImage:`url("img/about/main.png")` }}></div>
         </div>
     </div>
 </section>
 {/* -- End About List Section  */}
 
        {/* ======= Brands Section ======= */}
        <section id="brands" className="brands section-bg">
            <div className="container" data-aos="zoom-in">
                <div className="section-title">
                    <h1 lang="dz">Our top selling brands</h1>
                    <h1 lang="bn">যারা কাজ করছে আমাদের সাথে</h1>
                </div>
                <div className="row">

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/aci.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/ispahani.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/acme.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/png.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Dabur.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Marico.png" className="img-fluid" alt=""/>
                    </div>

                </div>
                <div className="row">

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/Nestle.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/fresh.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/rashid.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/teer.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/reckitt.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/brands/pusti.png" className="img-fluid" alt=""/>
                    </div>

                </div>

            </div>
        </section>
      {/* -- End Brands Section  */}
      
        {/* ======= Testimonials Section =======  */}
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h1 lang="dz">Our top retailer</h1>
                    <h1 lang="bn">আমাদের টপ রিটেইলার</h1>
                </div>

                <div className="testimonials-slider swiper">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-3.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item - */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-4.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-5.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-6.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-7.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-8.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-9.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-10.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                      {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-11.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                       {/* -- End testimonial item -- */}

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <img src="img/retailer/testimonials-12.jpg" className="testimonial-img" alt=""/>
                            </div>
                        </div>
                        {/* -- End testimonial item -- */}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
        {/* - End Testimonials Section -- */}
        
         {/* ======= Investors Section =======  */}
         <section id="investors" className="investors section-bg">
            <div className="container" data-aos="zoom-in">
                <div className="section-title">
                    <h1 lang="dz">Our Investors</h1>
                    <h1 lang="bn">আমাদের বিনিয়োগকারী</h1>
                </div>
                <div className="row align-items-center justify-content-center">

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/a-asia.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Asymmetry-Ventures.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/bansea.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Flagship-Ventures.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/Sabr-Capital.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/sbk.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="offset-md-1 col-lg-2 col-md-2 col-6 d-flex align-items-center justify-content-center">
                        <img src="img/investors/sosv.png" className="img-fluid" alt=""/>
                    </div>

                </div>
            </div>
        </section>
        {/* -- End Investors Section -- */}
        {/* -- ======= Counts Section ======= -- */}
        <section id="counts" className="counts">
            <div className="container position-relative">
                <div className="text-center title">
                    <h1 lang="dz">What we have achieved so far</h1>
                    <h1 lang="bn">আমরা এ পর্যন্ত যা অর্জন করেছি</h1>
                </div>

                <div className="row counters">
                    <div className="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">Our coverage area</p>
                        <p lang="bn">আমাদের কভারেজ এরিয়া</p>
                        <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="1"
                            className="purecounter">
                        </span>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">We have improved the quality of life of retailers</p>
                        <p lang="bn">রিটেইলারের জীবনমান উন্নয়ন করেছি</p>
                        <h5 data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1"
                            className="purecounter">
                        </h5>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 align-items-center justify-content-center text-center">
                        <p lang="dz">Total order delivery</p>
                        <p lang="bn">সর্বমোট অর্ডার ডেলিভারি</p>
                        <h6 data-purecounter-start=" 0" data-purecounter-end="4" data-purecounter-duration="1"
                            className="purecounter">
                        </h6>
                    </div>
                </div>
            </div>
        </section>
        {/* -- End Counts Section --> */}
        {/* -- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">
                <div className="section-title">
                    <h1 lang="dz">Our Recognition</h1>
                    <h1 lang="bn">আমাদের যত অর্জন</h1>
                </div>

                <div className="row portfolio-container">
                    <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/5.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/4.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/6.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/2.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/1.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/3.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/7.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/12.jpg" className="img-fluid" alt=""/>

                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/9.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/10.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/11.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="img/recognition/8.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* -- End Portfolio Section --> */}
           {/* -- ======= Frequently Asked Questions Section ======= --> */}
           <section id=" faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <ul className="faq-list">

                            <li>
                                <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">
                                    Non consectetur a
                                    erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
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
                                <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">
                                    Feugiat
                                    scelerisque varius morbi enim nunc faucibus a pellentesque? <i
                                        className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
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
                                <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">
                                    Dolor sit amet
                                    consectetur adipiscing elit pellentesque habitant morbi? <i
                                        className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
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
                                <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">
                                    Ac odio tempor
                                    orci dapibus. Aliquam eleifend mi in nulla? <i
                                        className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
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
                                <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">
                                    Tempus quam
                                    pellentesque nec nam aliquam sem et tortor consequat? <i
                                        className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
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
                                <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">
                                    Tortor vitae
                                    purus faucibus ornare. Varius vel pharetra vel turpis nunc eget
                                    lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i
                                        className="bi bi-chevron-up icon-close"></i></div>
                                <div id="faq6" className="collapse" data-bs-parent=".faq-list">
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
        <section id="achievements" className="achievements">
            <div className="container" data-aos="zoom-in">
                <div className="section-title">
                    <h1 lang="dz">Some of our features</h1>
                    <h1 lang="bn">আমাদেরকে যারা ফিচার করেছে</h1>
                </div>
                <div className="row">

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://www.techinasia.com/priyoshop-helps-retailers-rural-bangladesh-online"
                           > <img src="img/features/techInAsia.png" className="img-fluid" alt=""/></a>
                    
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://www.prothomalo.com/business/%E0%A6%86%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%B6%E0%A6%AA-%E0%A6%B8%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F"
                           > <img src="img/features/prothomalo.png" className="img-fluid" alt=""/></a>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://www.samakal.com/todays-print-edition/tp-techlife/article/200225262/%E0%A6%87%E0%A6%95%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A7%87-%E0%A7%AB%E0%A7%A6-%E0%A6%B9%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE-%E0%A6%A4%E0%A7%88%E0%A6%B0%E0%A6%BF-%E0%A6%95%E0%A6%B0%E0%A6%9B%E0%A6%BF"
                           >
                            <img src="img/features/somokal.png" className="img-fluid" alt=""/></a>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://www.kalerkantho.com/online/corporatecorner/2020/04/03/894351">
                            <img src="img/features/kalerkontho.png" className="img-fluid" alt=""/></a>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://www.thedailystar.net/lifestyle/news/priyoshop-organising-commerce-empowering-msme-technology-brands-2000769"
                           > <img src="img/features/dailyStar.png" className="img-fluid" alt=""/></a>
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <a href="https://sarabangla.net/post/sb-562543/">
                            <img src="img/features/sarabangla.png" className="img-fluid" alt=""/>
                        </a>
                    </div>


                </div>
            </div>
        </section>
        {/* -- End Investors Section --> */}

        {/* -- ======= Jobs Section ======= --> */}
        <section id="job" className="job_section">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h1 lang="dz" className="text-white">Jobs</h1>
                    <h1 lang="bn" className="text-white">চাকরী</h1>
                </div>

                <div className="job_wrap">
                    <div className="row px-5 mx-5" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="job_info">
                                <p>
                                    We Work Hard, But We Learn With Fun! <br/>
                                    Bangladesh-Singapore based Super Startup Asia and National ICT Award-winning Company
                                    'PriyoShop.com Ltd.' is looking for some brilliant minds in different departments.
                                    We are always searching for passionate, talented and creative people to join our
                                    teams and creating scope to learn under great leaders.
                                </p>

                                <Link to="/carrer"><a href="/carrer" className="btn_seeJobs"> See Jobs → </a></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="job_img">
                                <img src="./img/seeJobs.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* -- ======= Jobs Section End======= --> */}

        {/* -- ======= Contact Section ======= --> */}
        <section id="contact" className="contact section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h1 lang="dz">Contact with us</h1>
                    <h1 lang="bn">আমাদের সাথে যোগাযোগ করুন</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <form method="post" name="myForm" id="myForm" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                        placeholder="Your Name" required/>
                                </div>
                                <div className="col form-group">
                                    <input type="number" className="form-control" name="phoneNo" id="phoneNo"
                                        placeholder="Your Phone Number" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col form-group">
                                    <input type="text" name="company" className="form-control" id="company"
                                        placeholder="Your Company Name" required/>
                                </div>
                                <div className="col form-group">
                                    <input type="text" className="form-control" name="position" id="position"
                                        placeholder="Your Position or Team" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" name="mail" id="mail" placeholder="Your Email"
                                    required/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject"
                                    placeholder="Mail Subject" required/>
                            </div>

                            <div className="form-group">
                                <textarea type="text" className="form-control" name="details" id="details" rows="5"
                                    placeholder="Message" required></textarea>
                            </div>
                            <div className="text-center">
                                {/* onclick="sendEmail()" */}
                                <button type="button" className="btn btn-danger" ><span lang="dz">Send
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

            
        </div>
    );
};

export default Main;