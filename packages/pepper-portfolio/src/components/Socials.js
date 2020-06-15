import React from "react";

export default function Socials({ link, name }) {
  return (
    <a className="social-link" rel="noreferrer" target="_blank" href={link}>
      <i className={"fab fa-" + name}></i>
    </a>
  );
}
