import React, { useEffect } from "react";

const HomeHero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = document.querySelectorAll(".fade-in-left");
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className=" threexl:my-20 w-full flex flex-col">
      <div className="w-full flex justify-center">
        <h1 className="flex justify-center font-serif font-semibold threexl:text-7xl twoxl:text-6xl text-4xl text-center threexl:w-[1300px] twoxl:w-[800px] w-[500px] fade-in-left">
          Quality Work by a Family Owned Company
        </h1>
      </div>
      <div className=" md:w-1/2 xs:w-3/4 pt-5">
        <p className="py-4 pl-7 threexl:text-4xl twoxl:text-3xl font-serif text-xl fade-in-left">
          Farah & Sons, Inc. is a small, locally-owned, family-run company which
          specializes in construction inspection.
        </p>
        <p className="pb-4 pl-7 threexl:text-4xl twoxl:text-3xl font-serif text-xl fade-in-left">
          Our mission is to deliver unparalleled engineering services and
          construction management, powered by a team of dedicated professionals
          committed to reliability, focus, and excellence.
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
