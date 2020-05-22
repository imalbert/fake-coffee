import React from "react"

import Title from "./title"
import Subtitle from "./subtitle"
import Heading1 from "./heading1"

const P = ({ cls, children }) => <p className={cls}>{children}</p>

export default {
  Title,
  Subtitle,
  Heading1,
  h1: ({ children, className = "" }) => (
    <P cls={`text-5xl sm:text-6xl font-extrabold leading-none ${className}`}>
      {children}
    </P>
  ),
  h2: ({ children, className = "" }) => (
    <P cls={`text-3xl sm:text-4xl font-bold leading-tight ${className}`}>
      {children}
    </P>
  ),
  h3: ({ children, className = "" }) => (
    <P cls={`text-1xl sm:text-2xl font-extrabold leading-none ${className}`}>
      {children}
    </P>
  ),
  dt: ({ children, className = "" }) => (
    <P cls={`${className} text-xs font-extrabold`}>{children}</P>
  ),
  dd: ({ children, className = "" }) => (
    <P cls={`${className} text-gray-600 text-xs font-extrabold`}>{children}</P>
  ),
  label: ({ children, className = "" }) => (
    <P cls={`${className} text-gray-600 text-xs font-extrabold`}>{children}</P>
  ),
  l1: ({ children, className = "" }) => (
    <P cls={`text-sm font-extrabold ${className}`}>{children}</P>
  ),
  l2: ({ children, className = "" }) => (
    <P cls={`text-xs font-extrabold ${className}`}>{children}</P>
  ),
  p1: ({ children, className = "" }) => (
    <P cls={`text-sm ${className}`}>{children}</P>
  ),
  p2: ({ children, className = "" }) => (
    <P cls={`text-xxs ${className}`}>{children}</P>
  ),
}
