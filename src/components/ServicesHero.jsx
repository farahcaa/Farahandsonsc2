import React from "react";

const ServicesHero = () => {
  return (
    <div className=" py-10 threexl:my-20 w-full flex flex-col">
      <div className="w-full flex justify-center">
        <h1 className="flex justify-center font-serif font-semibold threexl:text-7xl twoxl:text-6xl text-4xl text-center threexl:w-[1300px] twoxl:w-[800px] w-[500px]">
          Services at Farah & Sons, Inc.
        </h1>
      </div>
      <div className=" md:w-1/2 sm:w-3/4 pt-5">
        <p className="py-4 pl-7 threexl:text-4xl twoxl:text-3xl font-serif text-xl">
          At Farah & Sons, Inc., we take pride in offering a suite of
          specialized services tailored to meet the diverse needs of our
          clients. Our commitment to quality and excellence is evident in every
          project we handle. Explore our services below and discover how we can
          bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
