import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
// import "react-image-lightbox/style.css";
// import Lightbox from "react-image-lightbox";

const instagramImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-7.jpg",
];

const InstagramSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="position-relative py-5 bg-light">
      <Container fluid className="px-0">
        {/* Centered @Instagram Over All Images */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-danger fw-bold text-center"
          style={{
            fontSize: "3rem",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          @Instagram
        </div>

        {/* Image Grid */}
        <Row className="g-0">
          {instagramImages.map((img, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={2}
              className="position-relative"
              style={{ zIndex: 0 }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                onClick={() => handleImageClick(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      {isOpen && (
        <Lightbox
          mainSrc={instagramImages[photoIndex]}
          nextSrc={instagramImages[(photoIndex + 1) % instagramImages.length]}
          prevSrc={
            instagramImages[
              (photoIndex + instagramImages.length - 1) % instagramImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + instagramImages.length - 1) % instagramImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % instagramImages.length)
          }
        />
      )}
    </section>
  );
};

export default InstagramSection;
