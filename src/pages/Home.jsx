import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../pages/About";
import Menu from "../components/Menu";
import Dishes from "../components/Dishes";
import PurposeSection from "../components/PurposeSection";
import InstagramSection from "../components/InstagramSection";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section with Slides */}
      <Hero />

      {/* About Section */}
      <section className="py-6 bg-light" style={{ marginTop: 0 }}>
        <div className="container text-center" data-aos="fade-up">
          <h2 className="mb-5 text-danger fw-bold" data-aos="fade-down">
            About CafeDine
          </h2>
          <h3 className="mb-4 fs-1 fw-bold" data-aos="zoom-in">
            We are a modern restaurant in the center of the city
          </h3>

          <div className="row">
            {/* Service Item 1 */}
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/images/img-1.jpg"
                  alt="Quality Food"
                  className="card-img-top"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="card-title mb-3">Quality Food</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    impedit maiores fugit illo deserunt!
                  </p>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/images/img-2.jpg"
                  alt="Friendly Place"
                  className="card-img-top"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="card-title mb-3">Friendly Place</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    impedit maiores fugit illo deserunt!
                  </p>
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div
              className="col-md-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="/images/img-3.jpg"
                  alt="Affordable Price"
                  className="card-img-top"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h4 className="card-title mb-3">Affordable Price</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    impedit maiores fugit illo deserunt!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Dishes Section */}
      <section
        className="position-relative text-center text-white"
        style={{
          backgroundImage: `url('/images/sticky.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          className="container position-relative"
          style={{ zIndex: 2 }}
          data-aos="zoom-in"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fs-4 fw-semibold mb-3">Prepare The Best Dishes</h2>
              <h1 className="display-4 fw-bold mb-4">
                Come & Experience Our Best of World Class Cousine
              </h1>
              <a href="/reservation" className="btn btn-primary btn-lg">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections with fade animations */}
      <div data-aos="fade-up">
        <Dishes />
      </div>

      <div data-aos="fade-right">
        <PurposeSection />
      </div>

      <div data-aos="fade-left">
        <InstagramSection />
      </div>
    </div>
  );
};

export default Home;
