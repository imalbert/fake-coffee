import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PageLayout from "../components/layout/subpage-layout"
import CoffeeCard from "../components/card/coffee-card"

const Coffees = () => {
  const data = useStaticQuery(graphql`
    query Cofees {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              taste
              roast
              origin
              grown
              price
              weight
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const coffees = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
    slug: node.fields.slug,
  }))

  return (
    <PageLayout>
      <section className="container mx-auto">
        <div className="grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </section>

      {/* {"filters"} */}
    </PageLayout>
  )
}

export default Coffees
