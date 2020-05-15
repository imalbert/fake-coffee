import React from "react"
import { graphql } from "gatsby"

import HeaderLink from "../components/header/header-link"
import Icon from "../components/icon/icon"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className="bg-primary">
      <div className="container mx-auto border">
        <div className="flex bg-white">
          <aside className="">
            <HeaderLink>
              <Icon icon="coffee" size="lg" className="text-secondary-light" />
            </HeaderLink>
          </aside>

          <main className="flex-grow">
            <header></header>
          </main>

          <aside className="flex h-screen bg-primary">
            <nav className="hidden sm:block w-64"></nav>
          </aside>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        taste
        roast
        origin
        grown
        price
        weight
      }
    }
  }
`
