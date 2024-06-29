import React from "react";

const HomeHero = () => {
  return (
    <div className=" w-full flex flex-col py-10">
      <div className="w-full flex justify-center">
        <h1 className="flex justify-center font-serif font-semibold text-4xl text-center  w-[500px]">
          Quality Work by a Family Owned Company
        </h1>
      </div>
      <div className=" md:w-1/2 sm:w-3/4 pt-5">
        <p className="py-4 pl-7 font-serif text-xl">
          Farah & Sons, Inc. is a small, locally-owned, family-run company which
          specializes in construction inspection.
        </p>
        <p className="pb-4 pl-7 font-serif text-xl">
          Our mission is to deliver unparalleled engineering services and
          construction management, powered by a team of dedicated professionals
          committed to reliability, focus, and excellence.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
