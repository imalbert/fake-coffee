import React from "react"

const Heading1 = ({ children }) => {
  return (
    <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tighter leading-none italic">
      {children}
    </h1>
  )
}

export default Heading1
