import React from "react";
import "../styles/app.css";
import AboutMDX from "../pages/About.mdx";

export default function About() {
  return (
    <div className="wrapper">
      <div className="about">
        <AboutMDX />
      </div>
    </div>
  );
}
