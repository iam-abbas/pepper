import React from "react"


export default function Header({ children }) {
    return (
      <section
        style={{
          // Header Specific Styling //
          padding: "10px",
          backgroundColor: "blue",
        }}
      >
        {children}
      </section>
    )
  }