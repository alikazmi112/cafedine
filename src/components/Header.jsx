import { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../css/Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Collapse navbar on route change
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      sticky="top"
      className="main-navbar"
      style={{
        backgroundColor: "transparent",
        paddingTop: "20px",
        paddingBottom: "20px",
        zIndex: 1030,
        boxShadow: "none",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="CafeDine Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-white border-0"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom text-white">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-link-custom text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/recipes"
              className="nav-link-custom text-white"
            >
              Recipes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/gallery"
              className="nav-link-custom text-white"
            >
              Gallery
            </Nav.Link>

            {/* Reservation Dropdown */}
            <NavDropdown
              title={<span className="text-white">Reservation</span>}
              id="reservation-dropdown"
              className="nav-link-custom"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/reservation/reservation">
                RESERVATION
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reservation/CartSection">
                CART
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reservation/shippingSection">
                SHIPPING
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reservation/ShippingSection">
                PAYMENT
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reservation/ThankMessage">
                CONFIRMATION
              </NavDropdown.Item>
            </NavDropdown>

            {/* Blog Dropdown */}
            <NavDropdown
              title={<span className="text-white">Blog</span>}
              id="blog-dropdown"
              className="nav-link-custom"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/blog/NewsSection">
                BLOG
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/NewsSection1">
                BLOG SINGLE
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-custom text-white"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
