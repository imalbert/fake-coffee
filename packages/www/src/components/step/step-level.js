import React from "react"

const StepLevel = ({ children }) => (
  <div className="relative mx-6 px-6 pl-8 pb-8 space-y-2 border-l border-secondary-light">
    <div className="absolute top-0 left-0 -ml-6 w-12 h-12 rounded-full bg-secondary border-8 border-white" />
    {children}
  </div>
)

export default StepLevel
