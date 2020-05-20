import React from "react"
import classNames from "classnames"

import Text from "../text"
import Icon from "../icon/icon"

const Outline = ({ children, icon, round, inverse }) => {
  const btnClass = classNames(
    "inline-flex border items-center",
    { "rounded-full w-6 h-6 flex justify-center": round },
    { "text-white border-white": inverse },
    { "border-gray-900": !inverse }
  )
  const textClass = classNames(
    "flex-grow border-r uppercase",
    { "p-2 px-8 inline-block": !round },
    { "text-white border-white": inverse },
    { "border-gray-900": !inverse }
  )
  const iconClass = classNames({ "text-white": inverse }, { "mx-3": !round })

  return (
    <button type="button" className={btnClass}>
      {children && <Text.l1 className={textClass}>{children}</Text.l1>}
      {icon && <Icon icon={icon} size="xs" className={`${iconClass}`} />}
    </button>
  )
}

const Link = ({ children, icon }) => (
  <button type="button" className="inline-flex items-center">
    <Text.l1 className="inline-block w-auto text-left uppercase leading-none">
      {children}
    </Text.l1>
    {icon && <Icon icon={icon} size="xs" className="ml-2" />}
  </button>
)

export default {
  Outline,
  Link,
}
