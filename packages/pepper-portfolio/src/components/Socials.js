import React from "react"

export default function Socials({ link, name }) {
    return (
      <a className="social-link" href={link}><i className={"fab fa-"+name}></i></a>
    )
  }