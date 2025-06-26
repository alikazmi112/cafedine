import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/ReservationSection.css";

const ReservationSection = () => {
  return (
    <section className="reservation-section py-5">
      <Container>
        <Row>
          <Col md={8}>
            <p className="text-danger fw-bold fs-4 mb-1">Reservation</p>
            <h2 className="fw-bold mb-4">
              Reserve{" "}
              <span className="text-dark">Your Seat For Betterment</span>
            </h2>

            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Control type="text" placeholder="Full Name" />
                </Col>
                <Col md={4}>
                  <Form.Control type="email" placeholder="Email Address" />
                </Col>
                <Col md={4}>
                  <Form.Control type="tel" placeholder="Phone Number" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Select>
                    <option>1 person</option>
                    <option>2 persons</option>
                    <option>3 persons</option>
                    <option>4+ persons</option>
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Control type="date" placeholder="Select your Date" />
                </Col>
                <Col md={4}>
                  <Form.Control type="time" placeholder="Select your Time" />
                </Col>
              </Row>

              <Button variant="danger" className="px-4 py-2 fw-bold">
                RESERVE NOW
              </Button>
            </Form>
          </Col>

          <Col md={4}>
            <div className="availability-box p-4 mt-5 mt-md-0 text-center">
              <p className="text-danger fs-5 mb-1">Check availability</p>
              <h3 className="fw-bold mb-4">Opening Times</h3>
              <div className="mb-3">
                <p className="fw-semibold mb-1">Monday – Thursday</p>
                <p className="text-muted">9.00–12.00</p>
              </div>
              <div className="mb-4">
                <p className="fw-semibold mb-1">Friday – Sunday</p>
                <p className="text-muted">2.00–8.00</p>
              </div>
              <p className="text-danger fs-5 mb-1">Call Us For</p>
              <h2 className="fw-bold">02 34597879</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReservationSection;
