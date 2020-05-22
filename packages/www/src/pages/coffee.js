import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PageLayout from "../components/layout/page-layout"
import Section from "../components/sections/section"
import SEO from "../components/seo"
import CoffeeCard from "../components/card/coffee-card"
import Text from "../components/text"

const Slider = ({ min, max }) => {
  return (
    <div className="w-3/4">
      <div className="my-10 border-b-2 border-gray-900 flex">
        <div
          className="relative ml-3 border-b-2 border-red-600 w-1/2"
          style={{ marginBottom: "-.15rem" }}
        >
          <span
            className="absolute -mt-3 bg-red-500 border-2 border-gray-100 inline-block"
            style={{ width: ".45rem", height: "1.6rem" }}
          />
          <span className="absolute -mt-8 font-extrabold text-sm tracking-tighter">
            {min}
          </span>
        </div>

        <div className="relative -mb-2">
          <span
            className="absolute -mt-3 bg-red-500 border-2 border-gray-100"
            style={{ width: ".45rem", height: "1.6rem" }}
          />
          <span className="absolute -mt-8 font-extrabold text-sm tracking-tighter">
            {max}
          </span>
        </div>
      </div>
    </div>
  )
}

const Coffees = () => {
  const data = useStaticQuery(graphql`
    query Coffees {
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
      <SEO title="Coffee" description="Grab life by the beans" />
      <Section>
        <div className="container mx-auto">
          <div className="lg:flex">
            <aside className="w-1/4 space-y-6">
              <Text.h2 className="font-bold">
                Our
                <br />
                Products
              </Text.h2>
              <dl className="space-y-3">
                <Text.h3>Catalog</Text.h3>
                <dt>
                  <Text.dt className="uppercase text-gray-600">Barako</Text.dt>
                </dt>
                <dd></dd>
                <dt>
                  <Text.dt className="uppercase text-gray-600">Robusta</Text.dt>
                </dt>
                <dd></dd>
                <dt>
                  <Text.dt className="uppercase text-gray-900">Arabica</Text.dt>
                </dt>
                <dd className="pl-3 space-y-3">
                  <Text.dd className="text-gray-900">By the bag</Text.dd>
                  <Text.dd className="text-gray-600">Box of shots</Text.dd>
                </dd>
                <dt>
                  <Text.dt className="uppercase text-gray-600">
                    Kopi Luwak
                  </Text.dt>
                </dt>
                <dd></dd>
                <dt>
                  <Text.dt className="uppercase text-gray-600">
                    Black Ivory
                  </Text.dt>
                </dt>
                <dd></dd>
              </dl>

              <dl className="space-y-3">
                <Text.h3>Price</Text.h3>
                <Slider min={100} max={2900} />
              </dl>

              <ul className="space-y-3">
                <Text.h3>Colors</Text.h3>
                <li>
                  <Text.l2 className="uppercase text-gray-600">Beige</Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase flex items-center">
                    <span className="h-2 w-2 mr-2 bg-gray-900 rounded-full" />
                    Black
                  </Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase text-gray-600">Brown</Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase flex items-center">
                    <span className="h-2 w-2 mr-2 bg-red-500 rounded-full" />
                    Red
                  </Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase text-gray-600">Blue</Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase flex items-center">
                    <span className="h-2 w-2 mr-2 bg-green-500 rounded-full" />
                    Green
                  </Text.l2>
                </li>
                <li>
                  <Text.l2 className="uppercase">Orange</Text.l2>
                </li>
              </ul>
            </aside>

            <main className="w-3/4 bg-gray-200">main</main>
          </div>
        </div>
      </Section>
      {/* <section className="container mx-auto">
        <div className="grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {coffees.map(coffee => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </div>
      </section> */}

      {/* {"filters"} */}
    </PageLayout>
  )
}

export default Coffees
