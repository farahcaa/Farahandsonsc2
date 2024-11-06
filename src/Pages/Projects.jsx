import React, { useEffect } from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import { projects } from "../constants";
import Footer from "../components/Footer";

const Projects = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={false} />
      {projects.map((item) => (
        <Project {...item}
          key={item.index}
        />
      ))}
      <Footer />
    </>
  );
};

export default Projects;
