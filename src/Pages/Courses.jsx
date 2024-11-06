import React, { useEffect } from "react";
import Header from "../components/Header";
const Courses = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <>
      <Header homepage={false} />
    </>
  );
};

export default Courses;
