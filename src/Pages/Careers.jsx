import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PositionCard from "../components/PositionCard";

const Careers = () => {
  return (
    <>
      <Header />
      <h1 className="flex justify-center py-10 font-serif">
        Available Positions:
      </h1>
      <PositionCard
        Title="No Available Positions: Check Back Later"
        location="none"
        link="/Careers"
      />
      <Footer />
    </>
  );
};

export default Careers;
