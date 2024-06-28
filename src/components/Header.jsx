import React from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import { Polygon, HomeHeaderPic } from "../assets";
const Header = () => {
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
      <div className="absolute w-full h-[1vh] top-0 z-0">
        <div className="absolute top-0 left-0 z-10">
          <img src={Polygon} width={700} />
        </div>
        <div className="absolute top-0 right-0">
          <img src={HomeHeaderPic} width={700} />
        </div>
      </div>
    </>
  );
};

export default Header;
