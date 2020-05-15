import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import HeaderLink from "../components/header/header-link"
import Icon from "../components/icon/icon"
import Text from "../components/text"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
  ]

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

            <section className="relative my-16 py-16">
              <div className="">
                <Text.Heading1>Fake Coffee</Text.Heading1>
              </div>

              <figure className="sm:absolute sm:right-0 sm:top-0 sm:-mr-32 sm:mt-16">
                <Img fluid={sources} className="w-64" />
              </figure>
            </section>
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
    mobileImage: file(
      relativePath: { eq: "coffee/cup-coffee-plastic-transparent.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "coffee/cup-coffee-plastic-transparent.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
