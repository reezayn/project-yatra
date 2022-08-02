import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Explore from "./components/Explore";
// import Slider from "./components/Slider";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Destinations />
    <Explore />
    {/* <Slider /> */}
    <ScrollToTop />
    <Footer />
    </>
  );
}

export default App;
