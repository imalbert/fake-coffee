import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CoffeeCard from "../components/card/coffee-card"
import PageLayout from "../components/layout/subpage-layout"
import StepLevel from "../components/step/step-level"
import StepFooter from "../components/step/step-footer"
import Text from "../components/text"

const Selectable = ({ children, selected }) => (
  <div
    className={`inline-block p-2 w-48 border-2 border-primary ${
      selected ? "" : "border-opacity-0"
    }`}
  >
    {children}
  </div>
)

const CoffeePlan = () => {
  const data = useStaticQuery(graphql`
    query CoffeesForPlan {
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
    <PageLayout header={{ title: "Create a plan", subtitle: "good idea!" }}>
      <section className="container mx-auto">
        <StepLevel>
          <Text.Title>Coffee type</Text.Title>
          <div className="flex space-x-2">
            <Selectable selected>
              <Text.Title>By the bag</Text.Title>
              <Text.Subtitle>250g Bag</Text.Subtitle>
            </Selectable>
            <Selectable>
              <Text.Title>Box of pods</Text.Title>
              <Text.Subtitle>Box of 40</Text.Subtitle>
            </Selectable>
          </div>
        </StepLevel>
        <StepLevel>
          <Text.Title>Grind size</Text.Title>
          <div className="">
            <Selectable selected>
              <Text.Title>Wholebean</Text.Title>
            </Selectable>
            <Selectable>
              <Text.Title>Fine</Text.Title>
            </Selectable>
            <Selectable>
              <Text.Title>Medium-Fine</Text.Title>
            </Selectable>
            <Selectable>
              <Text.Title>Medium</Text.Title>
            </Selectable>
            <Selectable>
              <Text.Title>Coarse</Text.Title>
            </Selectable>
          </div>
        </StepLevel>
        <StepLevel>
          <Text.Title>Pick your coffee</Text.Title>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2">
            {coffees.map(coffee => (
              <CoffeeCard key={coffee.id} {...coffee} />
            ))}
          </div>
        </StepLevel>
        {/* <StepLevel>
          <Text.Title>Delivery</Text.Title>
        </StepLevel> */}
        <StepLevel>
          <Text.Title>Checkout</Text.Title>

          <div>
            <Text.Subtitle>Card details</Text.Subtitle>
            <div className="shadow-sm">
              <input
                id="ccnum"
                className="form-input block w-full p-2 sm:text-sm sm:leading-5"
                placeholder="Card number"
              />
              <div className="flex">
                <input
                  id="ccexp"
                  className="form-input p-2 w-full sm:text-sm sm:leading-5"
                  placeholder="MM / YY"
                />
                <input
                  id="cccvc"
                  className="form-input p-2 w-full sm:text-sm sm:leading-5"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
          <div>
            <Text.Subtitle>Billing address</Text.Subtitle>
            <div className="shadow-sm border-1">
              <div className="w-full">
                <select className="form-select p-2 w-full bg-transparent sm:text-sm sm:leading-5">
                  <option>Pilippines</option>
                  <option>Australia</option>
                  <option>Singapore</option>
                </select>
              </div>
              <input
                id="billing-postcode"
                className="form-input block w-full p-2 sm:text-sm sm:leading-5"
                placeholder="Postal code"
              />
            </div>
          </div>
        </StepLevel>
        <StepFooter>
          <div className="flex justify-between">
            <button className="btn btn-primary">Return</button>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </StepFooter>
      </section>
    </PageLayout>
  )
}

export default CoffeePlan
