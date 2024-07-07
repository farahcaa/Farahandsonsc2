import React from "react";
import { whyus } from "../constants";

const ServicesUs = () => {
  return (
    <div className="bg-DarkBlue w-full threexl:h-[75vh] flex flex-col-reverse md:flex-row">
      <div className="w-1/2 sm:w-full flex items-center flex-col justify-center">
        <div className="w-[95%] sm:h-72 md:h-52 lg:h-72 threexl:h-[400px] bg-blue-500 m-6 rounded-xl" />
        <div className="w-[95%] sm:h-72 md:h-52 lg:h-72 threexl:h-[400px] bg-blue-500 m-6 rounded-xl" />
      </div>
      <div className=" pl-4 w-1/2 sm:w-full font-serif text-white">
        <h1 className="flex justify-center font-serif font-semibold underline threexl:text-7xl lg:text-5xl sm:text-3xl pb-5">
          Why Us?
        </h1>
        {whyus.map((item) => (
          <div key={item.id} className="py-4">
            <h1 className="threexl:text-5xl sm:text-2xl lg:text-3xl font-semibold">
              {item.header}
            </h1>
            <p className=" threexl:py-5 threexl:text-2xl lg:text-lg">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesUs;
