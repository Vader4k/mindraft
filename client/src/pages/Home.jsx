import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Slider from "../sections/Slider";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Testimonies from "../sections/Testimonies";
import Plans from "../sections/Plans";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Slider />
      <Features />
      <HowItWorks />
      <Testimonies />
      <Plans />
      <Footer />
    </main>
  );
};

export default Home;
