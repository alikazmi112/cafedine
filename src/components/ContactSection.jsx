import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5">
      <Container>
        {/* Section Header */}
        <Row className="text-center mb-5" data-aos="fade-down">
          <Col>
            <h1 className="fw-bold text-danger" style={{ fontSize: "1.25rem" }}>
              Contact us
            </h1>
            <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
              Get In Touch
            </h2>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form data-aos="fade-up">
              {/* Name and Email Row */}
              <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0" data-aos="fade-right">
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="py-3 px-3 border rounded-0"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} data-aos="fade-left">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="py-3 px-3 border rounded-0"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Phone and Subject Row */}
              <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0" data-aos="fade-right">
                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      className="py-3 px-3 border rounded-0"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} data-aos="fade-left">
                  <Form.Group controlId="formSubject">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      className="py-3 px-3 border rounded-0"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Message Area */}
              <Row className="mb-4">
                <Col data-aos="fade-up">
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your Message"
                      className="py-3 px-3 border rounded-0"
                      style={{ backgroundColor: "#f8f9fa" }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Submit Button */}
              <Row>
                <Col className="text-center" data-aos="zoom-in">
                  <Button
                    variant="danger"
                    type="submit"
                    className="py-3 px-5 text-uppercase fw-bold rounded-0 border-0"
                    style={{ backgroundColor: "#dc3545" }}
                  >
                    SEND MESSAGE
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* Google Map */}
        <Row className="mt-5">
          <Col data-aos="fade-up">
            <div style={{ width: "100%", height: "450px" }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999206532883!2d2.292292715674936!3d48.85837307928762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fda6d7c6f1d%3A0x9d88d2f34beed58!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1627048857153!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
