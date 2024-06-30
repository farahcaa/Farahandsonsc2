import React from "react";
import { StreamPic } from "../assets";

const HomeLast = () => {
  return (
    <div className=" mb-2 w-full mt-10 flex flex-row">
      <div className="w-1/2 ">
        <h1 className="flex justify-center font-serif font-semibold text-4xl">
          At Farah & Sons, Inc.
        </h1>
        <p className="pt-7 pl-5 font-serif">
          We believe that the foundation of every great construction project
          lies in the strength of its engineering. Our unwavering dedication to
          quality engineering is more than just a commitment—it&apos;s our
          legacy. With each blueprint and every inspection, we ensure that our
          engineering services meet the highest standards of excellence. Because
          for us, it&apos;s not just about building sewers and roads, it&apos;s
          about crafting infrastructure that stands the test of time.
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={StreamPic} />
      </div>
    </div>
  );
};

export default HomeLast;
