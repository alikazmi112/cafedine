import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Contact;
