import React, { useState } from "react";
import Slider from "react-slick";
import { careers } from "../assets";

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
    <div className="">
      <div className="absolute -left-[100px] z-50 w-[50%] h-[50vh] bg-Blue skew-x-12" />
      <div>
        <Slider {...settings} className="w-3/4 flex float-end">
          <div className="">
            <img className="image" src={careers} />
          </div>
          <div className="">
            <img className="" src={careers} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeaderCarosel;
