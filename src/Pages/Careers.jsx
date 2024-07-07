import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PositionCard from "../components/PositionCard";
import { careers } from "../assets";

const Careers = () => {
  return (
    <>
      <Header HeaderPic={careers} />
      <h1 className="flex justify-center sm:text-3xl lg:text-5xl threexl:text-7xl py-10 font-serif">
        Available Positions:
      </h1>
      <PositionCard
        title="No Available Positions: Check Back Later"
        location=""
        link="/Careers"
        id={0}
      />
      <Footer />
    </>
  );
};

export default Careers;
