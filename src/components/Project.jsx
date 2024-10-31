import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, link, picture, text }) => {
  return (
    <div className="pt-2 w-full flex flex-col">
      <line className="border-t w-[90%] border-black h-0 mx-auto" />
      <div className="mt-3 w-full text-center items-center text-3xl">
        {title}
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full flex p-5 items-center text-center justify-center">
          <div className="">
            <p className="m-5">{text}</p>
            <Link
              className=" text-Orange xl:text-2xl threexl:text-4xl underline text-xl pt-8 mr-5 flex flex-row-reverse hover:cursor-pointer"
              to={link}
            >
              Learn More-&gt;
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[75%] h-[75%] m-5">
            <img
              src={picture}
              alt="construction image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
