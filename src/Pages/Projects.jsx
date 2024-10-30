import React from "react";
import Header from "../components/Header";
import { ProjectsPic } from "../assets";
import Project from "../components/Project";
import { projects } from "../constants";
import Footer from "../components/Footer";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <Header homepage={false} />
      {projects.map((item) => (
        <Project
          key={item.id}
          title={item.title}
          link={item.link}
          text={item.text}
          picture={item.picture}
        />
      ))}
      <Footer />
    </>
  );
};

export default Projects;
