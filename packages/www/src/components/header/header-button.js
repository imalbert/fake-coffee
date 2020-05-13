import React from "react"

const HeaderButton = ({ children, onClick, appendedClassNames = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      text-secondary font-medium text-lg
      hover:opacity-75 transition ease-in-out duration-150
      ${appendedClassNames}
    `}
  >
    {children}
  </button>
)

export default HeaderButton
