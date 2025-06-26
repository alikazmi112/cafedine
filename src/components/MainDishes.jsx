import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import dish1 from "/images/m-5.jpg";
import dish2 from "/images/m-3.jpg";
import dish3 from "/images/m-5.jpg";
import dish4 from "/images/m-4.jpg";
import dish5 from "/images/m-3.jpg";
import dish6 from "/images/m-4.jpg";

const dishes = [
  {
    name: "Tuna Roast Source",
    price: "$23",
    description: "Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives",
    image: dish1,
  },
  {
    name: "Grilled Chicken",
    price: "$19",
    description: "Grilled chicken, Lettuce, Tomato, Garlic sauce",
    image: dish2,
  },
  {
    name: "Veggie Delight",
    price: "$17",
    description: "Zucchini, Bell Peppers, Feta Cheese, Herbs",
    image: dish3,
  },
  {
    name: "Classic Beef Steak",
    price: "$27",
    description: "Beef Steak, Garlic Butter, Fries, Carrots",
    image: dish4,
  },
  {
    name: "Seafood Platter",
    price: "$30",
    description: "Shrimp, Calamari, Fish, Lemon Butter Sauce",
    image: dish5,
  },
  {
    name: "Pasta Alfredo",
    price: "$21",
    description: "Creamy Alfredo Sauce, Parmesan, Basil",
    image: dish6,
  },
];

const MainDishes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleAddToCart = (dish) => {
    console.log("Added to cart:", dish.name);
  };

  return (
    <section className="main-dishes-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <p className="fw-bold text-danger">Main Dishes</p>
          <h1 className="text-muted fs-1">
            We provide quality food. We care
            <br />
            about your health
          </h1>
        </div>

        <div className="row g-4">
          {dishes.map((dish, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="fw-bold mb-0">{dish.name}</h5>
                    <span className="text-danger fw-semibold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="card-text text-muted small mb-3">
                    {dish.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAddToCart(dish)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainDishes;
