import React from "react";
import Socials from "../components/Socials";
import Project from "../components/projectCards";

const components = {
  Socials: ({ link, name }) => <Socials link={link} name={name} />,
  Project: ({ title, link, img, bg, children }) => {
    return (
      <Project title={title} link={link} img={img} bg={bg}>
        {children}
      </Project>
    );
  },
};

export default components;
