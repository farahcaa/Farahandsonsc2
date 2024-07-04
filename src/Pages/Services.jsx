import React from "react";
import Header from "../components/Header";
import { ServicesPic } from "../assets";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServiceExpertise from "../components/ServiceExpertise";

const Services = () => {
  return (
    <>
      <Header HeaderPic={ServicesPic} />
      <ServicesHero />
      <ServiceExpertise />
      <Footer />
    </>
  );
};

export default Services;
