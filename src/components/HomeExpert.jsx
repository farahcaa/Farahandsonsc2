import React from "react";
import { HomeBuilding } from "../assets";

const HomeExpert = () => {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <img src={HomeBuilding} className="md:w-1/2 sm:w-full pr-2" />
      <div className="bg-DarkBlue w-1/2 sm:w-full sm:mt-5 pl-2">
        <h1 className="pt-4 text-white text-4xl font-serif flex justify-center font-semibold">
          Expertise
        </h1>
        <p className="pl-5 pt-7 text-white font-serif">
          We specialize in construction inspection, ensuring the highest
          standards of quality and safety in every project we undertake.
        </p>
        <p className="pl-5 pt-7 text-white font-serif">
          At Farah & Sons, Inc., we adopt a client-focused approach, ensuring
          that every client receives the attention and expertise their projects
          deserve.
        </p>
        <p className="text-Orange text-xl pt-20 flex float-end pr-30">
          Learn More-&gt;
        </p>
      </div>
    </div>
  );
};

export default HomeExpert;
