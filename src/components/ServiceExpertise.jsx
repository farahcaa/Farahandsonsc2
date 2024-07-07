import React from "react";
import { ServiceExpert } from "../constants";
const ServiceExpertise = () => {
  return (
    <div className="w-full flex sm:flex-col md:flex-row">
      <div className="md:w-1/2 sm:w-full flex flex-col px-5">
        <hr className="h-1 bg-black" />
        <h1 className="flex justify-center font-serif font-semibold underline threexl:text-7xl lg:text-5xl sm:text-3xl pb-5">
          Our Expertise
        </h1>
        {ServiceExpert.map((item) => (
          <div key={item.id} className="flex flex-col font-serif">
            <h1 className="threexl:text-5xl sm:text-2xl lg:text-3xl font-semibold">
              {item.header}
            </h1>
            <p className=" threexl:py-5 threexl:text-2xl lg:text-lg">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <div className="sm:w-full md:w-1/2 bg-DarkBlue flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full lg:h-72 threexl:h-[400px] bg-blue-500 m-10 rounded-xl" />
        <div className="w-full lg:h-72 threexl:h-[400px] bg-gray-500 m-6 rounded-xl" />
      </div>
    </div>
  );
};

export default ServiceExpertise;
