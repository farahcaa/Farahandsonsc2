import React from "react";
import Header from "../components/Header";
import { ProjectsPic } from "../assets";
import Footer from "../components/Footer";
import Layer1 from "../components/Layer1";
import Layer2 from "../components/Layer2";
import Layer3 from "../components/Layer3";

const Projects = () => {
  return (
    <>
      <Header homepage={false} />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Footer />
    </>
  );
};

export default Projects;
