import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

const CafeDineDishes = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "STARTER", "LAUNCH", "DINNER"];

  const dishes = [
    {
      name: "Vicello Tonato",
      price: 23,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-1.jpg",
      category: "STARTER",
    },
    {
      name: "Oatmeal Cookie",
      price: 13,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-2.jpg",
      category: "LAUNCH",
    },
    {
      name: "Pizza Pane",
      price: 28,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-3.jpg",
      category: "DINNER",
    },
    {
      name: "Insalata Rucola",
      price: 15,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-4.jpg",
      category: "DINNER",
    },
    {
      name: "Crema Di Pomodoro",
      price: 34,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-5.jpg",
      category: "STARTER",
    },
    {
      name: "Seasonal Soup",
      price: 10,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-6.jpg",
      category: "LAUNCH",
    },
    {
      name: "Carpacio",
      price: 20,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-7.jpg",
      category: "STARTER",
    },
    {
      name: "Carpacio",
      price: 13,
      description: "Chinese mustard/Chipotle aioli",
      image: "/images/menu-8.jpg",
      category: "DINNER",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredDishes =
    activeCategory === "ALL"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  const handleAddToCart = (dish) => {
    console.log("Added to cart:", dish.name);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5" data-aos="fade-down">
          <Col>
            <h2 className="h4 fw-bold text-danger mb-3">CafeDine Dishes</h2>
            <h1 className="display-3 fw-bold">
              We provide quality food.{" "}
              <span className="d-block d-md-inline">
                We care
                <br />
                about your health.
              </span>
            </h1>
          </Col>
        </Row>

        {/* Category Buttons */}
        <Row
          className="justify-content-center mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Col
            xs={12}
            className="d-flex flex-wrap justify-content-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="link"
                className={`text-uppercase px-2 py-1 border-0 text-decoration-none ${
                  activeCategory === category
                    ? "fw-bold text-dark"
                    : "text-muted"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Col>
        </Row>

        {/* Dish Cards */}
        <Row className="gy-4">
          {filteredDishes.map((dish, index) => (
            <Col
              md={6}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="d-flex flex-column flex-md-row bg-white shadow-sm rounded overflow-hidden h-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="img-fluid"
                  style={{
                    width: "200px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="fw-bold mb-1">{dish.name}</h5>
                      <span className="fw-bold text-danger">${dish.price}</span>
                    </div>
                    <p className="text-muted mb-3">{dish.description}</p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <Button
                      variant="link"
                      className="p-0 text-dark text-decoration-none d-flex align-items-center"
                      onClick={() => handleAddToCart(dish)}
                    >
                      <FiShoppingCart className="me-2 text-danger" size={18} />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* View Full Menu Button */}
        <Row
          className="mt-5 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Col>
            <Button
              variant="outline-dark"
              className="rounded-0 text-uppercase px-4 py-2"
              href="/recipes"
            >
              View Full Menu
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CafeDineDishes;
