import { Container, Row, Col, Card } from "react-bootstrap";
import AboutSection from "../components/AboutSection";
import Dishes from "../components/Dishes";
import MainDishes from "../components/MainDishes";

const Recipes = () => {
  return (
    <>
      <AboutSection />
      <Dishes />
      <MainDishes />
    </>
  );
};

export default Recipes;
