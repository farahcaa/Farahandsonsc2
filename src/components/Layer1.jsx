import React from "react";
import { Layer1Pic1, Layer1Pic2, Layer1Pic3 } from "../assets";

const Layer1 = () => {
  const sectionStyle1 = {
    backgroundImage: `url(${Layer1Pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const sectionStyle2 = {
    backgroundImage: `url(${Layer1Pic2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const sectionStyle3 = {
    backgroundImage: `url(${Layer1Pic3})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="flex py-5 h-auto sm:flex-col lg:flex-row twoxl:h-screen">
      <div className=" sm:w-full lg:w-1/2 flex justify-center lg:pr-10">
        <div
          className={` rounded-xl w-[85%] hover:border-4 hover:border-Orange `}
          style={sectionStyle1}
        >
          <div className="group flex hover:backdrop-blur-sm  flex-col font-serif w-full h-full">
            <h1 className="invisible group-hover:visible text-white flex text-5xl justify-center py-10">
              Project Name
            </h1>
            <p className="invisible group-hover:visible text-white text-3xl justify-center py-10">
              Project description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis praesentium doloremque ad explicabo
              autem odit esse quo! Ducimus quae quisquam dolorum ipsum deleniti
              voluptate delectus, aliquid suscipit consequuntur, ratione vitae.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-full lg:w-1/2 sm:pt-10 lg:pt-0 flex flex-col ">
        <div className="w-full flex justify-center h-1/2 pb-3">
          <div
            className="rounded-xl pb-3 sm:w-[80%] w-[60%] hover:border-4 hover:border-Orange "
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
        <div className="w-full flex justify-center h-1/2">
          <div
            className="rounded-xl pb-3 sm:w-[80%] w-[60%] hover:border-4 hover:border-Orange "
            style={sectionStyle3}
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
    </div>
  );
};

export default Layer1;
