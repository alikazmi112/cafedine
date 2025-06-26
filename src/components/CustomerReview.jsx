import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const reviews = [
  {
    quote:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Maxim Smith",
    role: "CEO, Founder",
    image: "/images/p-1.jpg",
  },
  {
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Geert Green",
    role: "CEO, Founder",
    image: "/images/p-2.jpg",
  },
  {
    quote:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    name: "Dennis Roman",
    role: "CEO, Founder",
    image: "/images/p-3.jpg",
  },
];

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <p className="fw-bold text-danger mb-2" data-aos="fade-down">
          Customers Review
        </p>
        <h1 className="mb-5" data-aos="fade-up">
          Our customers say about us. Let’s <br /> check out some
        </h1>

        <Carousel indicators={false} controls={false} interval={3000} fade>
          {reviews.map((review, idx) => (
            <Carousel.Item key={idx}>
              <div
                className="px-3 px-md-5"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <p
                  className="lead fst-italic mb-4 mx-auto"
                  style={{
                    maxWidth: "700px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "72px",
                  }}
                >
                  “{review.quote}”
                </p>
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "2px solid #ccc",
                  }}
                />
                <h5 className="fw-semibold mb-0">{review.name}</h5>
                <p className="text-muted">{review.role}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerReviews;
