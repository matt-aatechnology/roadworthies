
<template>

<div class="site-preloader">
    <div class="car">
      <div class="strike"></div>
      <div class="strike strike2"></div>
      <div class="strike strike3"></div>
      <div class="strike strike4"></div>
      <div class="strike strike5"></div>
      <div class="car-detail spoiler"></div>
      <div class="car-detail back"></div>
      <div class="car-detail center"></div>
      <div class="car-detail center1"></div>
      <div class="car-detail front"></div>
      <div class="car-detail wheel"></div>
      <div class="car-detail wheel wheel2"></div>
    </div>
</div>

<header class="main-header">
    <div class="top-header">
      <div class="container">
        <div class="top-header-wrap">
          <div class="top-left">
            <p>RWC Now Mon - Sat 7AM to 6PM</p>
          </div>
          <div class="top-right">
            <ul class="top-header-nav">
              <li><a href="faqs.html">Help</a></li>
              <li><a href="contact.html">Support</a></li>
              <li><a href="faqs.html">FAQ</a></li>
            </ul>
            <ul class="header-social-share">
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mid-header">
      <div class="container">
        <div class="mid-header-wrap">
          <div class="site-logo">
            <NuxtLink to="/"><img src="~/assets/img/logo-dark.png" alt="car logo" /></NuxtLink>
          </div>
          <ul class="header-info">
            <li>
              <div class="header-info-icon">
                <i class="las la-phone-volume"></i>
              </div>
              <div class="header-info-text">
                <h3><span>Call Now:</span><a href="tel:0401813031">0401 813 031</a></h3>
              </div>
            </li>
            <li>
              <div class="header-info-icon">
                <i class="las la-map-marked-alt"></i>
              </div>
              <div class="header-info-text">
                <h3><span>Mobile RWC Service</span>We Come To You</h3>
              </div>
            </li>
            <li>
              <div class="header-info-icon">
                <i class="las la-map-marked-alt"></i>
              </div>
              <div class="header-info-text">
                <h3><span>RWC Safety Certificates</span>Get RWC Faster</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="nav-menu-wrapper">
      <div class="container">
        <div class="nav-menu-inner">
          <div class="site-logo">
            <a href="index.html"><img src="~/assets/img/logo-dark.png" alt="Logo" /></a>
          </div>
          <div class="header-menu-wrap">
            <ul class="nav-menu">
              <li class="active dropdown_menu">
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li class="dropdown_menu">
                <a href="about-us.html">RoadWorthy Safety Certificates</a>
                <ul>
                  <li><NuxtLink to="/roadworthy-safety-certificates/cars/">Cars</NuxtLink></li>
                  <li><NuxtLink to="/roadworthy-safety-certificates/bikes/"> Bikes & Motorcycles</NuxtLink></li>
                  <li><a href="our-services.html">Trailers</a></li>
                  <li><a href="service-details.html">Caravans</a></li>
                  <li><a href="book-taxi.html">Motorhomes</a></li>
                  <li><a href="book-taxi.html">Light Trucks</a></li>
                </ul>
              </li>
              <li class="dropdown_menu">
                <a href="our-taxi.html">Service Areas</a>
                <ul>
                  <li><a href="our-taxi.html">Brisbane</a></li>
                  <li><a href="taxi-details.html">Gold Coast</a></li>
                  <li><a href="taxi-details.html">Sunshine Coast</a></li>
                </ul>
              </li>

              <li><a href="contact.html">Fast Booking Enquiry</a></li>
              <li><a href="contact.html">Pricing</a></li>
              <li class="dropdown_menu">
                <a href="blog-grid.html">FAQ</a>
                <ul>
                  <li><a href="blog-grid.html">Grid Posts</a></li>
                  <li><a href="blog-classic.html">Classic Posts</a></li>
                  <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu-right-item">
            <a href="book-taxi.html" class="menu-btn">BOOK NOW!</a>
          </div>
          <div class="mobile-menu-icon">
            <div class="burger-menu">
              <div class="line-menu line-half first-line"></div>
              <div class="line-menu"></div>
              <div class="line-menu line-half last-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  </template>