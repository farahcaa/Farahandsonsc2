import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import { FarahandsonsPic } from "../assets";
const Header = ({ HeaderPic }) => {
  return (
    <>
      <div className="z-30 absolute top-0 w-full shadow-2xl bg-white">
        <div className="flex float-end ">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="p-4 hover:cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
          {/* <p className="bg-Blue m-2 p-2 px-4  rounded-2xl hover:cursor-pointer hover:shadow-2xl hover:border-black text-white">
          Courses
        </p> */}
        </div>
      </div>
      <div className="absolute w-full h-auto top-0 z-0">
        <img src={FarahandsonsPic} className="absolute top-20 left-10 z-40 " />
        <img
          src={HeaderPic}
          className="w-full md:h-full sm:h-[20rem] border object-cover border-black overflow-hidden"
          height={1000}
        />
      </div>
    </>
  );
};

export default Header;
