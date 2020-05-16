import React from "react"

const Card = ({ children, noborder }) => (
  <div className="border-gray-800">
    <div
      className={`rounded bg-white shadow-lg ${
        noborder ? "" : "border-4"
      } border-secondary`}
    >
      {children}
    </div>
  </div>
)

export default Card
