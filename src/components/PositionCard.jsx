import React from "react";
import { Link } from "react-router-dom";
const PositionCard = ({ title, location, link, id }) => {
  return (
    <div className="w-full font-serif flex justify-center items-center flex-col">
      <div className="w-[98%] border border-black rounded-xl mb-10 flex flex-col">
        <div className="flex flex-col pl-10">
          <h1 className="pb-10 mt-2 lg:text-2xl threexl:text-4xl text-xl">
            {title}
          </h1>
        </div>
        <div className=" flex flex-row">
          <h1 className="text-xl lg:text-2xl threexl:text-4xl pt-20 pl-10">
            {location}
          </h1>
          <Link
            className={`${
              id === 0 ? "invisible" : ""
            } text-Orange xl:text-2xl threexl:text-4xl underline w-full items-center justify-center flex text-xl pt-20 pr-30 hover:cursor-pointer`}
            to={link}
          >
            Learn More-&gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
