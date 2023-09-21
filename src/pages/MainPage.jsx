import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Content from "./Content";
import Projects from "./project/Projects";

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Content />
    </>
  );
};

export default MainPage;
