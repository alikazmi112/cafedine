import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bg1 from "../assets/images/bg1.jpg";
import Header from "./Header";
import "../css/Hero.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          height: "50vh",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Sticky Header on top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
          data-aos="fade-down"
        >
          <Header />
        </div>

        {/* Centered Title */}
        <h1
          className="fw-bold text-uppercase"
          style={{ zIndex: 2, fontSize: "3rem" }}
          data-aos="zoom-in"
        >
          About
        </h1>
      </section>
    </>
  );
};

export default AboutSection;
