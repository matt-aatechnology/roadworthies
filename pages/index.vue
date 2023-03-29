<template>

  <div class="slider-section">
    <div class="main-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-img">
            <img
              src="~/assets/images/home/cars-1.jpg"
              alt="img"
              class="kenburns"
              style="animation-duration: 12000ms"
            />
          </div>

          <div class="car-holder">
            <div class="shape">
              <div
                data-animation="slide-in-bottom"
                data-duration="1.5s"
                data-delay="0.3s"
              ></div>
              <div data-animation="fade-in" data-duration="1.5s" data-delay="0.2s"></div>
              <div
                data-animation="slide-in-top"
                data-duration="1.5s"
                data-delay="0.5s"
              ></div>
            </div>
          </div>

          <div class="slider-content-wrap d-flex align-items-center text-left">
            <div class="container">
              <div class="slider-content">
                <div class="slider-caption medium">
                  <div class="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="0.3s">
                      GET YOUR RWC FASTER!
                    </div>
                  </div>
                </div>
                <div class="slider-caption big">
                  <div class="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="0.5s">
                      Mobile Roadworthy Certificates
                    </div>
                  </div>
                </div>
                <div class="slider-caption small">
                  <div class="inner-layer">
                    <div
                      data-animation="fade-in-bottom"
                      data-delay="0.7s"
                      data-duration="1s"
                      style="background-color: #333333; padding: 4px 4px 4px 16px"
                    >
                      Brisbane | Sunshine Coast | Gold Coast
                    </div>
                  </div>
                </div>
                <div class="slider-btn">
                  <a
                    href="book-taxi.html"
                    class="default-btn"
                    data-animation="fade-in-bottom"
                    data-delay="0.9s"
                    >Book Now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="about-section padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="about-img">
            <img
              class="about-img1 wow fade-in-left"
              data-wow-delay="200ms"
              src="~/assets/images/home/girl-new-car.jpg"
              alt="girl with new car"
            />
            <img
              class="about-img2 wow fade-in-bottom"
              data-wow-delay="400ms"
              src="~/assets/images/home/tyre-check.jpg"
              alt="inspecting a tyre for rwc"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="section-heading mb-40 wow fade-in-right" data-wow-delay="200ms">
            <h4><span></span>GET YOUR RWC FASTER</h4>
            <h2>Mobile RWC Safety Certificates</h2>
            <p>
              A roadworthy certificate, safety certificate or RWC is required when buying,
              selling or transferring a vehicle. &nbsp; Our certified inspectors come to
              you - providing a fast, efficient and convenient service right to your door.
              Our mobile safety certificates include cars, bikes, trailers, caravans,
              motorhomes and light trucks. &nbsp; Book your safety certificate today!
            </p>
          </div>

          <ul class="about-info wow fade-in-right" data-wow-delay="400ms">
            <li>
              <img
                class="owner-thumb"
                src="~/assets/images/home/tick.png"
                alt="tick of approval"
              />
              <div class="owner">
                <h3>John</h3>
                <br />
                <span style="color: gray">Roadworthies</span>
              </div>
            </li>
            <li>
              <h2><span>CALL US NOW</span><a href="tel:0401813031">0401 813 031</a></h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="download-section bd-bottom padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading wow fade-in-left" data-wow-delay="200ms">
            <h4><span></span>RWC FOR A RANGE OF VEHICLES</h4>
            <h2>What does a mobile RWC safety certificate cover?</h2>
            <p>
              Our mobile roadworthy inspection looks at the condition and functionality of
              the vehicle including the inspection of brakes, tyres, suspension,
              windscreen, lights, seatbelts and more. &nbsp; Our friendly RWC inspectors
              here to guide you through the process and get a RWC in your hand asap!
            </p>
            <ul class="app-feature">
              <h3>We provide mobile safety certificates for:</h3>
              <li>Cars</li>
              <li>Bikes</li>
              <li>Trailers</li>
              <li>Caravans</li>
              <li>Motorhomes</li>
              <li>Light Trucks</li>
            </ul>

            <ul class="app-feature">
              <h3>Our service areas include:</h3>
              <li>Brisbane</li>
              <li>Gold Coast</li>
              <li>Sunshine Coast</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <div class="taxi-holder">
            <div class="taxi wow fade-in-left" data-wow-delay="300ms"></div>
            <div class="mockup wow fade-in-bottom" data-wow-delay="400ms"></div>
            <div class="charecter wow fade-in-right" data-wow-delay="500ms"></div>
            <img
              class="location-marker"
              src="~/assets/img/location-marker.png"
              alt="location"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>


<script>
definePageMeta({
  layout: "home",
});
</script>

