import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/AboutSection1.css";

const AboutSection1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section container py-5">
      <div className="row align-items-center">
        {/* Left Images */}
        <div
          className="col-md-6 position-relative d-flex gap-3"
          data-aos="fade-right"
        >
          <div className="d-flex flex-column justify-content-start w-50">
            <img
              src="/images/about-img.jpg"
              alt="Small"
              className="img-fluid mb-3 rounded shadow"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
          </div>
          <div className="w-75 position-relative">
            <img
              src="/images/about-2.jpg"
              alt="Large"
              className="img-fluid rounded shadow w-100"
              data-aos="zoom-in"
              data-aos-delay="400"
            />

            {/* Book Now Button */}
            <div
              className="split-button-container"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="btn btn-danger text-white fw-bold split-book-btn">
                Book Now !<br />
                +34567890
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div
          className="col-md-6 mt-4 mt-md-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="fw-bold mb-4">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            necessitatibus id, animi nemo quos eos minus adipisci veritatis
            quibusdamm.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae eius doloribus accusamus fugit.
          </p>
          <ul className="list-unstyled fw-bold mt-3">
            <li className="mb-2">– Clean Environment</li>
            <li className="mb-2">– Experience Chefs</li>
            <li className="mb-2">– Fresh And Creative Dishes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
