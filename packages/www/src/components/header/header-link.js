import React from "react"
import { Link } from "gatsby"

const HeaderLink = ({
  to = "/",
  children,
  appendedClassNames = "",
  color = "gray-800",
}) => (
  <Link
    to={to}
    className={`
      text-${color} font-medium text-lg
      hover:opacity-75 transition ease-in-out duration-150
      ${appendedClassNames}
    `}
  >
    {children}
  </Link>
)

export default HeaderLink
