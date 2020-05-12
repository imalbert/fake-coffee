import React from "react"

const Hyperlink = ({ children, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

export default Hyperlink
