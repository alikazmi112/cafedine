import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CartSection from "./components/CartSection";
import ShippingSection from "./components/ShippingSection";
import ThankMessage from "./components/ThankMessage";
import NewsSection1 from "./components/NewsSection1";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation runs once
      offset: 100, // offset (in px) from the original trigger point
      easing: "ease-in-out",
    });
    AOS.refresh(); // refresh on route changes if needed
  }, []);

  return (
    <>
      <main style={{ marginTop: "0px", paddingTop: "0px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation/reservation" element={<Reservation />} />
          <Route path="/reservation/CartSection" element={<CartSection />} />
          <Route
            path="/reservation/ShippingSection"
            element={<ShippingSection />}
          />
          <Route path="/reservation/ThankMessage" element={<ThankMessage />} />
          <Route path="/blog/NewsSection" element={<Blog />} />
          <Route path="/blog/NewsSection1" element={<NewsSection1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
