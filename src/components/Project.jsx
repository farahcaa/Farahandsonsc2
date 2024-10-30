import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, link, picture, text }) => {
  return (
    <div className="m-5 w-full h-[75vh] flex flex-col">
      <div className="w-full text-center items-center text-3xl">{title}</div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full flex border p-5 items-center text-center justify-center">
          <div className="border">
            <p>{text}</p>
            <Link
              className=" text-Orange xl:text-2xl threexl:text-4xl xs:pb-10 md:pb-0 underline text-xl pt-20 flex flex-row-reverse pr-30 hover:cursor-pointer"
              to={link}
            >
              Learn More-&gt;
            </Link>
          </div>
        </div>
        <div className="w-full border">
          <img src={picture} />
        </div>
      </div>
    </div>
  );
};

export default Project;
