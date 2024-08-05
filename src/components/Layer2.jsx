import React from "react";
import { excavation, launchshaft } from "../assets";
const Layer2 = () => {
  const sectionStyle1 = {
    backgroundImage: `url(${launchshaft})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="p-5 px-16 w-full ">
      <div
        className={` rounded-xl w-full flex justify-center h-[500px] threexl:h-[700px] hover:border-4 hover:border-Orange `}
        style={sectionStyle1}
      >
        <div className="group flex hover:backdrop-blur-sm  flex-col font-serif w-full h-full">
          <h1 className="invisible group-hover:visible text-white flex text-5xl justify-center py-10">
            Project Name
          </h1>
          <p className="invisible group-hover:visible text-white md:text-3xl justify-center py-10 xs:text-xl">
            Project description: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis praesentium doloremque ad explicabo
            autem odit esse quo! Ducimus quae quisquam dolorum ipsum deleniti
            voluptate delectus, aliquid suscipit consequuntur, ratione vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layer2;
