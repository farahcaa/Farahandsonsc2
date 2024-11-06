import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PositionCard from "../components/PositionCard";

const Careers = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={false} />
      <h1 className="flex justify-center xs:text-3xl lg:text-5xl threexl:text-7xl py-10 font-serif">
        Available Positions:
      </h1>
      <div className="h-screen">
        <PositionCard
          title="No Available Positions: Check Back Later"
          location=""
          link="/Careers"
          id={0}
        />
      </div>
      <Footer />
    </>
  );
};

export default Careers;
