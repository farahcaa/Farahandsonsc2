import React from "react";
import { HomeBuilding } from "../assets";
import { Link } from "react-router-dom";

const HomeExpert = () => {
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col w-full ">
      <img src={HomeBuilding} className="lg:w-1/2 sm:w-full sm:mb-2 pr-2 " />
      <div className="bg-DarkBlue w-1/2 sm:w-full rounded-lg lg:aspect-auto md:aspect-square  pl-2 ">
        <h1 className="pt-4 text-white threexl:text-8xl twoxl:text-6xl text-4xl font-serif flex justify-center font-semibold">
          Expertise
        </h1>
        <p className=" pl-5 pt-7 lg:text-xl md:text-4xl threexl:text-4xl twoxl:text-3xl threexl:w-[1100px]  text-white font-serif">
          We specialize in construction inspection, ensuring the highest
          standards of quality and safety in every project we undertake.
        </p>
        <p className=" flex justify-center lg:text-xl md:text-4xl pl-5 pt-7 threexl:text-4xl twoxl:text-3xl threexl:w-[1100px] text-white font-serif">
          At Farah & Sons, Inc., we adopt a client-focused approach, ensuring
          that every client receives the attention and expertise their projects
          deserve.
        </p>
        <Link
          className=" text-Orange xl:text-2xl threexl:text-4xl sm:pb-10 md:pb-0 underline text-xl pt-20 flex justify-center pr-30 hover:cursor-pointer"
          to={`/Services`}
        >
          Learn More-&gt;
        </Link>
      </div>
    </div>
  );
};

export default HomeExpert;
