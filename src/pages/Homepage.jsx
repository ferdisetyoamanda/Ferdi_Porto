import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Project from "../components/sections/Project";
import Social from "../components/Social";

const Homepage = () => {
  return (
    <div className="max-w-md mx-auto md:max-w-3xl lg:max-w-7xl">
      <Navbar />
      <Social />
      <Hero />
      <About />
      <Portfolio />
      <Project />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
