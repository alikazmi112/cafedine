import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/ShippingSection.css";
import AboutSection from "./AboutSection";
import ThankYouMessage from "../components/ThankMessage"; // Adjust path if needed

const ShippingSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  const goToStep = (step) => setCurrentStep(step);

  const handleBackHome = () => {
    alert("Back to Home clicked");
  };

  const handleContinueShopping = () => {
    alert("Continue Shopping clicked");
  };

  return (
    <>
      {/* ✅ Show AboutSection only on steps 1 and 2 */}
      {currentStep !== 3 && <AboutSection />}

      <section className="checkout-section py-5">
        <Container>
          {/* Step Navigation - Hide on step 3 */}
          {currentStep !== 3 && (
            <Row className="mb-4">
              <Col className="text-center">
                <div className="step-nav d-flex justify-content-center gap-4">
                  {["Shipping", "Payment", "Confirm Pay"].map(
                    (title, index) => {
                      const stepNum = index + 1;
                      return (
                        <div
                          key={index}
                          className={`step-box ${
                            currentStep === stepNum ? "active" : ""
                          }`}
                          onClick={() => goToStep(stepNum)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="step-number text-danger fw-bold">{`0${stepNum}`}</div>
                          <div className="step-title">{title}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </Col>
            </Row>
          )}

          {/* Steps 1 & 2 */}
          {currentStep !== 3 ? (
            <Row>
              <Col lg={8}>
                <div className="details-box mb-4 p-4 border">
                  {currentStep === 1 && (
                    <>
                      <h5 className="fw-bold mb-4">Shipping Details</h5>
                      <Form>
                        <Row className="mb-3">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>First Name</Form.Label>
                              <Form.Control placeholder="First Name" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control placeholder="Last Name" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Address</Form.Label>
                              <Form.Control placeholder="Street Address" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>City</Form.Label>
                              <Form.Control placeholder="City" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Country</Form.Label>
                              <Form.Select>
                                <option>Select Country</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>Pakistan</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Zip Code</Form.Label>
                              <Form.Control placeholder="Zip Code" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group>
                              <Form.Label>Phone</Form.Label>
                              <Form.Control type="tel" placeholder="Phone" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button
                          variant="danger"
                          className="fw-bold"
                          onClick={() => setCurrentStep(2)}
                        >
                          CONTINUE TO PAYMENT
                        </Button>
                      </Form>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <h5 className="fw-bold mb-4">Payment Details</h5>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Name on Card</Form.Label>
                          <Form.Control placeholder="Name on Card" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control placeholder="245-5456645-55456" />
                          <Form.Text className="text-muted">
                            Visa / MasterCard / Payoneer / American Express
                          </Form.Text>
                        </Form.Group>
                        <Row className="mb-3">
                          <Col>
                            <Form.Label>Expiration Month</Form.Label>
                            <Form.Select>
                              <option>Month</option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                            </Form.Select>
                          </Col>
                          <Col>
                            <Form.Label>Year</Form.Label>
                            <Form.Select>
                              <option>Year</option>
                              <option>2025</option>
                              <option>2026</option>
                              <option>2027</option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Security Code</Form.Label>
                          <Form.Control type="password" placeholder="*******" />
                          <Form.Text className="text-muted">
                            Must be 8–20 characters long.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="checkbox"
                            label="I have read and accept the terms and conditions."
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                          />
                        </Form.Group>
                        <Button
                          variant="danger"
                          className="fw-bold"
                          disabled={!agreed}
                          onClick={() => setCurrentStep(3)}
                        >
                          CONFIRM & PAY
                        </Button>
                      </Form>
                    </>
                  )}
                </div>
              </Col>

              <Col lg={4}>
                <div className="summary-box p-4 border">
                  <h5 className="fw-bold mb-3">Order Summary</h5>
                  <p className="text-muted small mb-3">
                    Excepteur sint occaecat cupidat non proident sunt officia.
                  </p>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>$237.00</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping & Handling</span>
                    <span>$0</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Estimated Tax</span>
                    <span>$0</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold mb-4">
                    <span>Grand Total</span>
                    <span>USD $237.00</span>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <ThankYouMessage
                  onBackHome={handleBackHome}
                  onContinueShopping={handleContinueShopping}
                />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default ShippingSection;
