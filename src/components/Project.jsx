import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, link, picture, text }) => {
  return (
    <div className="pt-2 w-full flex flex-col">
      <line className="border-t w-[90%] border-black h-0 mx-auto" />
      <div className="mt-3 px-2 w-full text-center items-center text-3xl">
        {title}
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full flex p-5 items-center text-center justify-center">
          <div className="">
            {text.map((item) => (
              <p className="mx-5 mt-2" key={item.index}>
                {item.message}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[75%] h-[75%] m-5">
            <img
              src={picture}
              alt="construction image"
              className="object-cover w-full h-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
