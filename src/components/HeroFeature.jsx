import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUtensils, FaShoppingCart, FaTruck } from "react-icons/fa";

const HeroFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="w-100"
      style={{
        marginTop: "-20vh",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div
            className="col-md-3 col-sm-6 text-center shadow-sm bg-light p-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaUtensils size={40} className="mb-3 text-dark" />
            <h5 className="fw-bold mb-3">Delicious Food</h5>
            <p className="mb-0 small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              animi ipsam obcaccati.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="col-md-3 col-sm-6 text-center shadow-sm bg-light p-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaShoppingCart size={40} className="mb-3 text-dark" />
            <h5 className="fw-bold mb-3">Online Order</h5>
            <p className="mb-0 small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              animi ipsam obcaccati.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="col-md-3 col-sm-6 text-center shadow-sm bg-light p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaTruck size={40} className="mb-3 text-dark" />
            <h5 className="fw-bold mb-3">Free Delivery</h5>
            <p className="mb-0 small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              animi ipsam obcaccati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
