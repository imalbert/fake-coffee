import React from "react"

const Card = ({ children }) => (
  <div className="bg-primary shadow-lg h-64">
    <div className="px-6 py-4">{children}</div>
  </div>
)

export default Card
