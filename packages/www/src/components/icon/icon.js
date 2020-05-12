import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ children, ...props }) => (
  <FontAwesomeIcon {...props} fixedWidth />
)

export default Icon
