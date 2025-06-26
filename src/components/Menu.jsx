import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Container, Row, Col } from "react-bootstrap";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const menuItems = [
    {
      name: "Vitello Tonato",
      price: "$23",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Crema di Pomodoro",
      price: "$34",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Oatmeal Cookie",
      price: "$13",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Seasonal Soup",
      price: "$10",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Pizza Pane",
      price: "$28",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Carpacio",
      price: "$20",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Insalata Rucola",
      price: "$15",
      description: "Chinese mustard/Chipotle aioli",
    },
    {
      name: "Carpacio",
      price: "$13",
      description: "Chinese mustard/Chipotle aioli",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 mb-4">CafeDine Dishes</h2>
          <p className="lead">
            We provide quality food. We care about your health
          </p>
        </div>

        <Row className="g-4">
          {menuItems.map((item, index) => (
            <Col
              md={6}
              lg={3}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="menu-item p-4 border rounded h-100 bg-light shadow-sm">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="mb-0">{item.name}</h5>
                  <h5 className="text-primary mb-0">{item.price}</h5>
                </div>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
