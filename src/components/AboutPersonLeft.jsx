import React, { useEffect } from "react";

const AboutPersonLeft = ({ picture, title, text }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = document.querySelectorAll(".fade-in-right");
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
    <div className="w-full flex xs:flex-col-reverse md:flex-row">
      <div className="md:w-1/2 xs:w-full flex justify-center items-center bg-DarkBlue rounded-lg">
        <img src={picture} width={300} className="py-5 px-2" />
      </div>
      <div className="flex font-serif flex-col items-center md:w-1/2 xs:w-full fade-in-right">
        <h1 className=" text-center pt-10 font-semibold threexl:text-8xl lg:text-5xl twoxl:text-7xl xs:text-4xl">
          {title}
        </h1>
        <p className="threexl:text-5xl px-14 my-10 lg:text-2xl twoxl:text-4xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutPersonLeft;
