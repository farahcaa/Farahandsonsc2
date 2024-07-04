import React from "react";
import { Layer3Pic1, Layer3Pic2 } from "../assets";
const Layer3 = () => {
  const sectionStyle1 = {
    backgroundImage: `url(${Layer3Pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const sectionStyle2 = {
    backgroundImage: `url(${Layer3Pic2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full flex md:flex-row sm:flex-col p-3">
      <div className="w-full flex justify-center pb-3">
        <div
          className="rounded-xl pb-3 sm:w-[80%] w-[50%] hover:border-4 hover:border-Orange "
          style={sectionStyle1}
        >
          <div className="group flex hover:backdrop-blur-sm  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-white flex text-5xl justify-center py-10">
              Project Name
            </h1>
            <p className="invisible group-hover:visible text-white text-3xl justify-center py-10">
              Project description: Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex pb-3 justify-center">
        <div
          className="rounded-xl pb-3 sm:w-[80%] w-[50%] hover:border-4 hover:border-Orange "
          style={sectionStyle2}
        >
          <div className="group flex hover:backdrop-blur-sm  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-white flex text-5xl justify-center py-10">
              Project Name
            </h1>
            <p className="invisible group-hover:visible text-white text-3xl justify-center py-10">
              Project description: Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layer3;
