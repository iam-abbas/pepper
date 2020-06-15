import React from "react";

export default function Project({ title, link, children }) {
  return (
    <a className="social-link" rel="noreferrer" target="_blank" href={link}>
      {title}
      {children}
    </a>
  );
}
