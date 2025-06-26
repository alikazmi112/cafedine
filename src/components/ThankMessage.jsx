import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import AboutSection from "./AboutSection";

const ThankYouMessage = ({ onBackHome, onContinueShopping }) => {
  return (
    <>
      <AboutSection />
      <div className="text-center py-5">
        <h2 className="fw-bold text-danger mb-3">Thank you!</h2>
        <h1 className="fw-bold  mb-1">For Your Reservation</h1>
        <p className="text-muted">
          Your order hasn’t shipped yet but we will send you an email when it
          does.
        </p>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Button
              variant="danger"
              className="fw-bold px-4"
              onClick={onBackHome}
            >
              Back to Home
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              variant="outline-danger"
              className="fw-bold px-4"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ThankYouMessage;
