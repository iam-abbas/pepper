import React from "react";
import Layout from "../components/layout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Hero from "../components/hero";
import About from "../components/About";
import ProjectsComp from "../components/Projects";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../styles/app.css";

const pepper = () => (
  <AwesomeSlider animation="cubeAnimation" bullets={false} fillParent={true}>
    <div class="main">
      <Hero />
    </div>
    <div class="main">
      <About />
    </div>
    <div class="main">
      <ProjectsComp />
    </div>
  </AwesomeSlider>
);

export default pepper;
