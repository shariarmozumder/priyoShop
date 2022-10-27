/**
 * Template Name: PriyoShop Retail
 * Author: Sharmin Rumpa
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

//Author: Sharmin Rumpa

var bang = true;

function switchLang() {
  $('[lang="dz"]').toggle();
  $('[lang="bn"]').toggle();

  if (bang) {
    changePlaceholderBn();
  } else {
    changePlaceholderEn();
  }
}

function changePlaceholderBn() {
  document.querySelectorAll("input").forEach((input) => {
    input.style.fontFamily = "Hind Siliguri";
  });

  placeholderName = $("#name")[0];
  placeholderName.placeholder = "নাম";

  placeholderPhoneNo = $("#phoneNo")[0];
  placeholderPhoneNo.placeholder = "ফোন নাম্বার";

  placeholderCompany = $("#company")[0];
  placeholderCompany.placeholder = "কোম্পানির নাম";

  placeholderPosition = $("#position")[0];
  placeholderPosition.placeholder = "আপনার পদবি";

  placeholderMail = $("#mail")[0];
  placeholderMail.placeholder = "আপনার ইমেইল";

  placeholderSubject = $("#subject")[0];
  placeholderSubject.placeholder = "ইমেইল এর বিষয়";

  placeholdeDetails = $("#details")[0];
  placeholdeDetails.placeholder = "বিস্তারিত";

  bang = false;
}

function changePlaceholderEn() {
  document.querySelectorAll("input").forEach((input) => {
    input.style.fontFamily = "Sofia Pro";
  });

  placeholderName = $("#name")[0];
  placeholderName.placeholder = "Your Name";

  placeholderPhoneNo = $("#phoneNo")[0];
  placeholderPhoneNo.placeholder = "Your Phone Number";

  placeholderCompany = $("#company")[0];
  placeholderCompany.placeholder = "Your Company Name";

  placeholderPosition = $("#position")[0];
  placeholderPosition.placeholder = "Your Position or Team";

  placeholderMail = $("#mail")[0];
  placeholderMail.placeholder = "Your Email";

  placeholderSubject = $("#subject")[0];
  placeholderSubject.placeholder = "Mail Subject";

  placeholdeDetails = $("#details")[0];
  placeholdeDetails.placeholder = "Message";

  bang = true;
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var phoneNo = document.getElementById("phoneNo").value;
  var company = document.getElementById("company").value;
  var position = document.getElementById("position").value;
  var mail = document.getElementById("mail").value;
  var subject = document.getElementById("subject").value;
  var details = document.getElementById("details").value;

  var body =
    "Name : " +
    name +
    "<br>" +
    "Phone Number : " +
    phoneNo +
    "<br>" +
    "Company Name : " +
    company +
    "<br>" +
    "Position : " +
    position +
    "<br>" +
    "Email : " +
    mail +
    "<br>" +
    "<br>" +
    details;

  if (validate()) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "psretailtomail@gmail.com",
      Password: "retailtomail.tsrpsbdsr@123",
      To: "priyoshopretail@gmail.com",
      From: "psretailtomail@gmail.com",
      Subject: subject,
      Body: body,
    }).then((message) => {
      if (message == "OK") {
        document.getElementById("myForm").reset();
        alert("Mail sent successfully");
      } else {
        alert(message);
      }
    });
  }
}

function validate() {
  if (document.myForm.name.value == "") {
    alert("Please provide your name!");
    document.myForm.name.focus();
    return false;
  }
  if (
    document.myForm.phoneNo.value == "" ||
    isNaN(document.myForm.phoneNo.value) ||
    document.myForm.phoneNo.value.length != 11
  ) {
    alert("Please provide your phone number!");
    document.myForm.phoneNo.focus();
    return false;
  }
  if (document.myForm.company.value == "") {
    alert("Please provide your company name!");
    document.myForm.company.focus();
    return false;
  }
  if (document.myForm.position.value == "") {
    alert("Please provide your position!");
    document.myForm.position.focus();
    return false;
  }

  if (document.myForm.mail.value == "") {
    alert("Please provide your mail address!");
    document.myForm.mail.focus();
    return false;
  }

  if (document.myForm.subject.value == "") {
    alert("Please provide your subject!");
    document.myForm.subject.focus();
    return false;
  }

  if (document.myForm.details.value == "") {
    alert("Please provide your message!");
    document.myForm.details.focus();
    return false;
  }

  return true;
}


// =============== Career Section ===============
var accordion = document.getElementsByClassName("job");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var job_description = this.nextElementSibling;
    if (job_description.style.display === "block") {
      job_description.style.display = "none";
    } else {
      job_description.style.display = "block";
    }
  });
}