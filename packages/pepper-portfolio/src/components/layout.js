import React from "react"


export default function Layout({ children }) {
    return (
      <div
        style={{
          // Layout styling
          margin: `10%`,
          backgroundColor: `#fafafa`,
        }}
      >
        {children}
      </div>
    )
  }