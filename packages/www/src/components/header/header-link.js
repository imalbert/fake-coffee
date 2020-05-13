import React from "react"
import { Link } from "gatsby"

const HeaderLink = ({ to = "/", children, appendedClassNames = "" }) => (
  <Link
    to={to}
    className={`
      text-secondary font-medium text-lg
      hover:opacity-75 transition ease-in-out duration-150
      ${appendedClassNames}
    `}
  >
    {children}
  </Link>
)

export default HeaderLink
