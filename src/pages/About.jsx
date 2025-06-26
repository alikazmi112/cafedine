import React from "react";
import chef1 from "../assets/images/chef_1.jpg";
import chef2 from "../assets/images/chef_2.jpg";
import chef3 from "../assets/images/chef_3.jpg";

import AboutSection from "../components/AboutSection";
import AboutSection1 from "../components/AboutSection1";
import Services from "../components/Services";
import CustomerReviews from "../components/CustomerReview";
import InstagramSection from "../components/InstagramSection";

const About = () => {
  return (
    <>
      <div data-aos="fade-up">
        <AboutSection />
      </div>

      <div data-aos="fade-right">
        <AboutSection1 />
      </div>

      {/* Meet The Chefs with Cards */}
      <section className="meet-chefs py-5 bg-light" data-aos="fade-up">
        <div className="container text-center">
          <p className="fw-bold text-danger mb-5" data-aos="fade-down">
            Meet The Chefs
          </p>
          <h1 className="mb-3" data-aos="zoom-in">
            We have experienced and creative
            <br /> chefs to start
          </h1>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 shadow-sm border-0">
                <img src={chef1} alt="Chef Daniel" className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-bold">Daniel Graham</h5>
                  <p className="text-muted">Master Chef</p>
                  <p className="card-text">
                    Far from the countries Vokalia and Consonantia, there live
                    the blind texts. They live in Bookmarksgrove.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 shadow-sm border-0">
                <img src={chef2} alt="Chef Nick" className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-bold">Nick Browning</h5>
                  <p className="text-muted">Master Chef</p>
                  <p className="card-text">
                    Far from the countries Vokalia and Consonantia, there live
                    the blind texts. They live in Bookmarksgrove.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 shadow-sm border-0">
                <img src={chef3} alt="Chef Willium" className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-bold">Willium Jack</h5>
                  <p className="text-muted">Master Chef</p>
                  <p className="card-text">
                    Far from the countries Vokalia and Consonantia, there live
                    the blind texts. They live in Bookmarksgrove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prepare Best Dishes Section */}
      <section
        className="prepare-dishes text-white text-start py-5"
        style={{
          backgroundImage: `url('/images/sticky.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        data-aos="zoom-in"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="fs-4">Prepare The Best Dishes</h2>
              <h1 className="display-5 fw-bold my-3">
                Are you looking for a<br /> quiet place?
              </h1>
              <a href="/reservation" className="btn btn-primary btn-lg">
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-left">
        <CustomerReviews />
      </div>

      <div data-aos="fade-up">
        <InstagramSection />
      </div>
    </>
  );
};

export default About;
