import React, { useState } from "react";
import Slider from "react-slick";
import { headpic, headpic2, headpic3, headpic4 } from "../assets";

const HeaderCarosel = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="relative ">
      <div className="absolute -left-[100px] z-50 w-[50%] h-[70vh] bg-Blue skew-x-12" />
      <div className="">
        <Slider {...settings} className=" sm:w-full md:w-3/4 flex float-end">
          <div className="divimage">
            <img className="image" src={headpic2} />
          </div>
          <div className="divimage">
            <img className="image" src={headpic} />
          </div>
          <div className="divimage">
            <img className="image" src={headpic3} />
          </div>
          <div className="divimage">
            <img className="image" src={headpic4} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeaderCarosel;
