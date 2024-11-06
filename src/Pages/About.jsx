import React, { useEffect } from "react";
import Header from "../components/Header";
import { JeannePic, KenPic } from "../assets";
import AboutPersonRight from "../components/AboutPerson";
import AboutPersonLeft from "../components/AboutPersonLeft";
import Footer from "../components/Footer";
const About = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={false} />
      <div className="h-5" />
      <AboutPersonRight
        picture={KenPic}
        title="Founder"
        text="Our company is led by Ken Farah, a civil engineer with a rich history of experience. Ken has managed projects in everything from Boston's Big Dig to important infrastructure projects in Indianapolis and the surrounding areas."
      />
      <AboutPersonLeft
        picture={JeannePic}
        title="Executive Vice President"
        text="Jeanne, our Executive Vice President, is a distinguished leader with a strong educational foundation from the University of Dayton. Her strategic vision and dedication are vital to our success."
      />
      <div className="h-5" />
      <Footer />
    </>
  );
};

export default About;
