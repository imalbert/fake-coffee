import React from "react"
import { Link as GatsbyLink } from "gatsby"
import classNames from "classnames"

import Text from "../text"
import Icon from "../icon/icon"

const Outline = ({ children, to = "/", icon, round, inverse }) => {
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
    <GatsbyLink to={to} type="button" className={btnClass}>
      {children && <Text.l1 className={textClass}>{children}</Text.l1>}
      {icon && <Icon icon={icon} size="xs" className={`${iconClass}`} />}
    </GatsbyLink>
  )
}

const Link = ({ children, to = "/", icon, full, xs }) => {
  const btnClass = classNames("inline-flex items-center", {
    "justify-between p-2": full,
  })
  return (
    <GatsbyLink to={to} type="button" className={btnClass}>
      {xs ? (
        <Text.l2 className="inline-block w-auto text-left uppercase leading-none">
          {children}
        </Text.l2>
      ) : (
        <Text.l1 className="inline-block w-auto text-left uppercase leading-none">
          {children}
        </Text.l1>
      )}
      {icon && <Icon icon={icon} size="xs" className="ml-2" />}
    </GatsbyLink>
  )
}

export default {
  Outline,
  Link,
}
