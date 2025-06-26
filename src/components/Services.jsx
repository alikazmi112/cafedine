import { Container, Row, Col } from "react-bootstrap";
import {
  FaLeaf,
  FaHamburger,
  FaBreadSlice,
  FaCarrot,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import "../css/Services.css"; // Add this CSS file to style icons

const Services = () => {
  const services = [
    {
      icon: <FaHamburger size={48} className="service-icon" />,
      title: "Fresh Food",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaLeaf size={48} className="service-icon" />,
      title: "Quality Cuisine",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaBreadSlice size={48} className="service-icon" />,
      title: "Bread & Pancake",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaCarrot size={48} className="service-icon" />,
      title: "Fresh Vegies Salad",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaCalendarAlt size={48} className="service-icon" />,
      title: "Event Management",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      icon: <FaPhoneAlt size={48} className="service-icon" />,
      title: "Reserve Now",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="fw-bold text-danger">Our Services</p>
          <h1 className="fw-bold">
            We Provide Good Services With Lots<br></br> Of Facilities
          </h1>
        </div>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="text-center p-3">
                <div className="mb-3">{service.icon}</div>
                <h4 className="h5 mb-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
