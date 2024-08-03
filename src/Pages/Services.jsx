import React from "react";
import Header from "../components/Header";
import { ServicesPic } from "../assets";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServiceExpertise from "../components/ServiceExpertise";
import ServicesUs from "../components/ServicesUs";
import Contact from "../components/Contact";

const Services = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServiceExpertise />
      <ServicesUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
