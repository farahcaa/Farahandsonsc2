import React from "react";
import { FarahandsonsPic } from "../assets";
import { navigation, socials } from "../constants";
import { Link } from "react-router-dom";
import Linesvg from "../assets/Linesvg";

const Footer = () => {
  return (
    <div className="bg-Blue w-full py-14">
      <div className="flex md:flex-row xs:flex-col md:justify-start xs:justify-center xs:items-center">
        <img src={FarahandsonsPic} width={200} />
        <div className="flex flex-col w-full">
          <div className="flex pb-2 w-full  items-center justify-center">
            {navigation.map((item) => (
              <Link
                className="xs:hidden md:flex font-serif text-lg pt-5 px-2 threexl:text-3xl twoxl:text-xl"
                key={item.key}
                to={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Linesvg />
          <div className="flex flex-row justify-center py-2">
            {socials.map((item) => (
              <a key={item.id} href={item.url} target="_blank">
                <img className="px-3" key={item.id} src={item.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-white text-sm px-10 pb-5 threexl:text-2xl">
        Farah & Sons, Inc. is a certified Minority Business Enterprise (MBE)
        with the City of Indianapolis and the State of Indiana; certified DBE
        with the State of Indiana. Quality Water & Engineering Project
        Management | ©2024 Farah & Sons Inc. | Developed by Farah & Sons Inc
      </p>
    </div>
  );
};

export default Footer;
