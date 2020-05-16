import React from "react"

import Title from "./title"
import Subtitle from "./subtitle"
import Heading1 from "./heading1"

const Span = ({ cls, children }) => <span className={cls}>{children}</span>

export default {
  Title,
  Subtitle,
  Heading1,
  h1: ({ children, className = "" }) => (
    <Span cls={`${className} text-5xl`}>{children}</Span>
  ),
  h2: ({ children, className = "" }) => (
    <Span cls={`${className} text-3xl`}>{children}</Span>
  ),
  h3: ({ children, className = "" }) => (
    <Span cls={`${className} text-xl`}>{children}</Span>
  ),
  l1: ({ children, className = "" }) => (
    <Span cls={`${className} text-base`}>{children}</Span>
  ),
  l2: ({ children, className = "" }) => (
    <Span cls={`${className} text-sm`}>{children}</Span>
  ),
  p1: ({ children, className = "" }) => (
    <Span cls={`${className} text-sm`}>{children}</Span>
  ),
  p2: ({ children, className = "" }) => (
    <Span cls={`${className} text-xs`}>{children}</Span>
  ),
}
