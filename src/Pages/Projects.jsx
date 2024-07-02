import React from "react";
import Header from "../components/Header";
import { ProjectsPic } from "../assets";
import Footer from "../components/Footer";
import Layer1 from "../components/Layer1";
import Layer2 from "../components/Layer2";

const Projects = () => {
  return (
    <>
      <Header HeaderPic={ProjectsPic} />
      <Layer1 />
      <Layer2 />
      <Footer />
    </>
  );
};

export default Projects;
