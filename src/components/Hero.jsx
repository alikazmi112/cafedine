import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import bg1 from "../assets/images/bg1.jpg";
import "../css/Hero.css";
import HeroFeatures from "./HeroFeature";
import Header from "./Header";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const slides = [
    {
      title: "Welcome to restaurant",
      description:
        "We deliver good quality food with great service to our customers",
    },
    {
      title: "Welcome to restaurant",
      description:
        "Fresh, Delicious meal to reach your optimum health and fitness",
    },
    {
      title: "Welcome to restaurant",
      description:
        "Good food starts with good ingredients. Have a great time with us",
    },
  ];

  return (
    <>
      <section className="position-relative" style={{ marginTop: 0 }}>
        {/* Hero Carousel */}
        <Carousel
          controls={false}
          indicators={false}
          interval={5000}
          pause={false}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div
                className="hero-slide d-flex align-items-center"
                style={{
                  minHeight: "100vh",
                  backgroundImage: `url(${bg1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                }}
              >
                {/* Header on top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex: 100,
                  }}
                >
                  <Header />
                </div>

                {/* Slide Content */}
                <div className="container">
                  <div className="row">
                    <div
                      className="col-lg-8 text-start text-white"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <h5 className="mb-3 fw-semibold text-danger text-uppercase">
                        {slide.title}
                      </h5>
                      <p
                        className="display-3 fw-bold mb-5"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {slide.description}
                      </p>
                      <button
                        className="btn btn-primary btn-lg me-2"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                      >
                        View Menu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Overlapping Features */}
        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            left: 0,
            width: "100%",
            zIndex: 10,
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <HeroFeatures />
        </div>
      </section>

      {/* Prevent content overlap */}
      <div style={{ marginTop: "300px" }}></div>
    </>
  );
};

export default Hero;
