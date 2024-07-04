import React from "react";
import { ServiceExpert } from "../constants";
const ServiceExpertise = () => {
  return (
    <div className="w-full flex sm:flex-col md:flex-row">
      <div className="w-1/2 flex flex-col pl-5">
        <hr className="h-1 bg-black" />
        <h1 className="flex justify-center font-serif font-semibold underline text-5xl pb-5">
          Our Expertise
        </h1>
        {ServiceExpert.map((item) => (
          <div key={item.id} className="flex flex-col font-serif">
            <h1 className="text-3xl font-semibold">{item.header}</h1>
            <p className="text-lg">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 bg-DarkBlue"></div>
    </div>
  );
};

export default ServiceExpertise;
