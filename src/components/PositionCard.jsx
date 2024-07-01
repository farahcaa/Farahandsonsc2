import React from "react";
import { Link } from "react-router-dom";
const PositionCard = ({ title, location, link }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h1>{location}</h1>
      </div>
      <div>
        <Link
          className=" text-Orange xl:text-2xl threexl:text-4xl underline text-xl pt-20 flex justify-center pr-30 hover:cursor-pointer"
          to={link}
        >
          Learn More-&gt;
        </Link>
      </div>
    </div>
  );
};

export default PositionCard;
