import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import "../css/CartSection.css";
import productImg from "/images/popular-sm-3.jpg";
import AboutSection from "./AboutSection";

const initialCart = [
  { id: 1, name: "Lemon Rosemary Chicken", price: 79, qty: 1 },
  { id: 2, name: "Seasonal Soup", price: 79, qty: 1 },
  { id: 3, name: "Pizza Pane", price: 79, qty: 1 },
];

const CartSection = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      <AboutSection />
      <section className="cart-section py-5">
        <Container>
          {/* CART TABLE */}
          <Row data-aos="fade-up">
            <Col md={12}>
              <Table bordered responsive className="align-middle">
                <thead className="text-center">
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr
                      key={item.id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <td className="text-center">
                        <img src={productImg} alt={item.name} width="70" />
                      </td>
                      <td>
                        <strong>{item.name}</strong>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td className="text-center">
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => updateQty(item.id, -1)}
                        >
                          -
                        </Button>{" "}
                        {item.qty}{" "}
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => updateQty(item.id, 1)}
                        >
                          +
                        </Button>
                      </td>
                      <td>${(item.price * item.qty).toFixed(2)}</td>
                      <td className="text-center">
                        <Button
                          variant="link"
                          onClick={() => removeItem(item.id)}
                          className="text-danger p-0"
                        >
                          &times;
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>

          {/* COUPON + UPDATE BUTTONS */}
          <Row className="mt-4 align-items-center" data-aos="fade-right">
            <Col md={6}>
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Enter your coupon"
                  className="rounded-0"
                />
                <Button
                  variant="dark"
                  className="ms-2 rounded-0 text-uppercase"
                >
                  Apply Coupon
                </Button>
              </Form>
            </Col>
            <Col md={6} className="text-end mt-3 mt-md-0">
              <Button variant="dark" className="rounded-0 text-uppercase">
                Update Cart
              </Button>
            </Col>
          </Row>

          {/* ORDER SUMMARY */}
          <Row className="mt-5 justify-content-end">
            <Col md={5} data-aos="fade-left">
              <div className="summary-box p-4 border">
                <h5 className="fw-bold mb-3">Order Summary</h5>
                <p className="text-muted small mb-3">
                  Excepteur sint occaecat cupidatat non proident sunt officia.
                </p>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
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
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Grand Total</span>
                  <span>USD ${subtotal.toFixed(2)}</span>
                </div>
                <Button variant="danger" className="w-100 fw-bold py-2">
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartSection;
