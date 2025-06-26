import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        {/* Top Row: About | Contact Info | Opening Hours */}
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">About</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              nam!
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <p className="mb-1">📞 +1 987 654 3210</p>
            <p className="mb-1">📧 mail@support.com</p>
            <p className="mb-1">📍 1234 Altschul, New York, NY 10027-0000</p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Opening Hours</h5>
            <p className="mb-1">Monday - Thursday: 10:00 AM - 11:00 PM</p>
            <p>Friday - Sunday: 12:00 AM - 03:00 AM</p>
          </Col>
        </Row>

        {/* Newsletter Signup Centered */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h5 className="fw-bold mb-3">
              Get latest food recipe at your inbox
            </h5>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "350px" }}
            >
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="rounded-0 pe-5 bg-dark text-light border-light"
              />
              <FaEnvelope
                className="position-absolute"
                style={{
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#ccc",
                }}
              />
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Footer Bottom */}
        <Row className="text-center text-md-start">
          <Col md={6} className="mb-2 mb-md-0">
            <small>Copyright © 2019 | A theme by themefisher.com</small>
          </Col>
          <Col md={6} className="text-md-end">
            <small className="d-inline-block me-3">Home</small>
            <small className="d-inline-block me-3">About Us</small>
            <small className="d-inline-block me-3">Gallery</small>
            <small className="d-inline-block me-3">Privacy Policy</small>
            <small className="d-inline-block">Use of Terms</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
