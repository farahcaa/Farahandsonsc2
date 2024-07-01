import React from "react";

const AboutPersonLeft = ({ picture, title, text }) => {
  return (
    <div className="w-full flex sm:flex-col-reverse md:flex-row">
      <div className="md:w-1/2 sm:w-full flex justify-center items-center bg-DarkBlue rounded-lg">
        <img src={picture} width={300} className="py-5 px-2" />
      </div>
      <div className="flex font-serif flex-col items-center md:w-1/2 sm:w-full ">
        <h1 className=" text-center pt-10 font-semibold threexl:text-8xl lg:text-5xl twoxl:text-7xl sm:text-4xl">
          {title}
        </h1>
        <p className="threexl:text-5xl px-14 my-10 lg:text-2xl twoxl:text-4xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutPersonLeft;
