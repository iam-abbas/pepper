import React from "react";
import Layout from "../components/layout";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Hero from "../components/hero";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const pepper = () => (
  <AwesomeSlider animation="cubeAnimation">
    <div class="main">
      <Hero />
    </div>
    <div class="main">
      <Hero />
    </div>
  </AwesomeSlider>
);

export default pepper;
