import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/layout/subpage-layout"
import CoffeeCard from "../components/card/coffee-card"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <PageLayout>
      <CoffeeCard {...post.frontmatter} />
    </PageLayout>
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
