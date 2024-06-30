import React from "react";
import { FarahandsonsPic, Line } from "../assets";
import { navigation, socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-Blue w-full">
      <div className="flex flex-row">
        <img src={FarahandsonsPic} width={200} />
        <div className="flex flex-col w-full">
          <div className="flex pb-2 w-full  items-center justify-center">
            {navigation.map((item) => (
              <Link
                className=" font-serif text-lg pt-5 px-2"
                key={item.key}
                to={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <img src={Line} />
          <div className="flex flex-row justify-center py-2">
            {socials.map((item) => (
              <img className="px-3" key={item.id} src={item.src} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-white text-sm px-10 pb-5">
        Farah & Sons, Inc. is a certified Minority Business Enterprise (MBE)
        with the City of Indianapolis and the State of Indiana; certified DBE
        with the State of Indiana. Quality Water & Engineering Project
        Management | ©2024 Farah & Sons Inc. | Developed by Farah & Sons Inc
      </p>
    </div>
  );
};

export default Footer;
