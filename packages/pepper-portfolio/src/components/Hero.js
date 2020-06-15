import React from "react";
import "../styles/app.css";
import Intro from "../pages/intro.mdx";

export default function Hero() {
  return (
    <div className="intro">
      <div className="hello">Hello!</div>
      <Intro />
    </div>
  );
}
