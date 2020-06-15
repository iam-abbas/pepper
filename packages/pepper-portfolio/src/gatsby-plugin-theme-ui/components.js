import React from "react";
import Socials from "../components/Socials";
import Project from "../components/projectCards";

const components = {
  Socials: ({ link, name }) => <Socials link={link} name={name} />,
  Project: ({ link, title, children }) => {
    return (
      <Project link={link} title={title}>
        {children}
      </Project>
    );
  },
};

export default components;
