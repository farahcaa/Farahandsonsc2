import React from "react";

const AboutPersonRight = ({ picture, title, text }) => {
  return (
    <div className="w-full flex md:flex-row xs:flex-col">
      <div className="flex font-serif flex-col items-center md:w-1/2 xs:w-full ">
        <h1 className=" pt-10 font-semibold threexl:text-8xl lg:text-5xl twoxl:text-7xl xs:text-4xl">
          {title}
        </h1>
        <p className="threexl:text-5xl px-14 my-10 lg:text-2xl twoxl:text-4xl">
          {text}
        </p>
      </div>
      <div className="md:w-1/2 xs:w-full  flex justify-center items-center bg-DarkBlue rounded-lg">
        <img src={picture} width={300} className="py-5 px-2" />
      </div>
    </div>
  );
};

export default AboutPersonRight;
