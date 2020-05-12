import React from "react"

const HeaderLink = ({ children, appendedClassNames }) => (
  <a
    href="#"
    className={`
      text-secondary font-medium text-lg
      hover:opacity-75 transition ease-in-out duration-150
      ${appendedClassNames || ""}
      `}
  >
    {children}
  </a>
)

export default HeaderLink
