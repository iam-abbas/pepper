import React from "react";

export default function Project({ title, link, img, bg, children }) {
  const cardStyle = {
    backgroundImage: "url(" + img + ")",
  };
  const contentStyle = {
    background: bg,
  };
  return (
    <a rel="noreferrer" target="_blank" href={link}>
      <div className="projectCard" style={cardStyle}>
        <div className="projectBackground" style={contentStyle}></div>
        <div className="projectContent">
          <h2> {title} </h2>
          <p> {children} </p>
        </div>
      </div>
    </a>
  );
}
