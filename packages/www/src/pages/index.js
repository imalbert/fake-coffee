import React from "react"
import Img from "gatsby-image"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import HomeLayout from "../components/layout/home-layout"
import Section from "../components/sections/section"
import SEO from "../components/seo"
import Masthead1 from "../components/sections/masthead-1"
import CoffeeShowcase from "../components/sections/coffee-showcase"
import Icon from "../components/icon/icon"

import Text from "../components/text"
import Button from "../components/button"
import Hyperlink from "../components/hyperlink"

const IndexPage = ({ data }) => {
  const coffees = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter,
    slug: node.fields.slug,
  }))
  const images = data.allImageSharp.edges.reduce((obj, e) => {
    obj[e.node.parent.name] = e.node
    return obj
  }, {})
  const planSectionImgFluid = images["coffee-desktop"].fluid
  const newsSectionImgFluid = images["coffee-with-sunrise"].fluid
  const contactSectionImgFluid = images["contact-us"].fluid

  return (
    <HomeLayout>
      <SEO title="Home" />
      <Section>
        <div className="py-12 flex flex-col sm:flex-row container mx-auto">
          <div className="sm:w-1/3 p-2 py-4 space-y-3 text-center sm:text-left flex flex-col justify-center items-center sm:items-start">
            <Text.d1 className="text-gray-600">Featured</Text.d1>
            <Text.h2 className="font-bold">
              Choose your
              <br /> coffee
            </Text.h2>
            <Button.Link icon="chevron-right">Full catalog</Button.Link>
          </div>
          <div className="sm:w-2/3">
            <CoffeeShowcase coffees={coffees} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative">
          <Img
            className="w-full sm:w-2/3"
            style={{ height: "32rem" }}
            alt={"Coffee beans on background"}
            fluid={newsSectionImgFluid}
          />
          <div className="absolute inset-0 sm:h-auto flex bg-gray-100 bg-opacity-50">
            <div className="p-3 sm:py-16 sm:h-auto h-full flex flex-col items-end justify-center container mx-auto">
              <div className="w-full sm:w-1/2 sm:h-auto space-y-4 bg-gray-100 text-left">
                <div className="px-8 sm:px-16 pt-6 sm:pt-12 flex justify-between">
                  <Text.d1 className="text-gray-600">
                    <a id="home-news">News</a>
                  </Text.d1>
                  <Text.d1 className="font-bold">18.05.2020</Text.d1>
                </div>

                <div className="relative flex items-center px-8 sm:px-16">
                  <div className="absolute left-0 ml-2 sm:ml-5 flex items-center justify-center">
                    <Icon icon="long-arrow-alt-left" />
                  </div>
                  <div className="flex-grow">
                    <Text.h2 className="w-full sm:w-3/4">
                      Happy International Coffee Day!
                    </Text.h2>
                  </div>
                  <div className="absolute right-0 mr-2 sm:mr-5 flex items-center justify-center">
                    <Icon icon="long-arrow-alt-right" />
                  </div>
                </div>

                <div className="px-8 sm:px-16 flex flex-col">
                  <Text.p1 className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean massa.
                  </Text.p1>
                </div>

                <div className="px-8 sm:px-16 pb-6 sm:pb-12">
                  <Button.Link icon="chevron-right">Show more</Button.Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="py-12 flex flex-col sm:flex-row container mx-auto">
          <div className="sm:w-1/3 p-2 py-4 space-y-4 text-center sm:text-left flex flex-col">
            <Text.d1 className="text-gray-600">Reviews</Text.d1>
            <Text.h2 className="font-bold">
              The best
              <br /> clients
            </Text.h2>
            <div className="pt-1 space-x-2 flex justify-center sm:justify-start">
              <Button.Outline icon="long-arrow-alt-left" round />
              <Button.Outline icon="long-arrow-alt-right" round />
            </div>
          </div>
          <div className="sm:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
              <Hyperlink
                href="https://github.com/imalbert"
                target="_blank"
                className="p-6 px-2 space-y-2 flex flex-col justify-center items-center bg-gray-200"
              >
                <img
                  className="rounded-full w-12"
                  src="https://avatars3.githubusercontent.com/u/12537973?s=460&u=a0d58e799f8b4dc9098f8144156ce34393d54a0f&v=4"
                />
                <Text.h3>Albert M.</Text.h3>
                <Text.p1 className="text-center">Where's my coffee?</Text.p1>
              </Hyperlink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative">
          <Img
            style={{ height: "28rem" }}
            alt={"Top view of a desk"}
            fluid={planSectionImgFluid}
          />
          <div className="absolute inset-0">
            <div className="space-y-4 text-center bg-gray-300 bg-opacity-50 h-full flex flex-col items-center justify-center">
              <Text.d1 className="text-white">Subscribe</Text.d1>

              <div>
                <Text.h2 className="text-white">
                  What goes best with a cup of coffee?
                </Text.h2>
                <Text.h2>
                  <span className="underline">Another cup</span>.
                </Text.h2>
              </div>

              <Button.Outline icon="chevron-right" inverse>
                Set a Coffee Plan
              </Button.Outline>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative my-12">
          <Img
            className="absolute inset-0 hidden sm:block w-full sm:w-3/4 hidden sm:block border-t-2 border-b-2 border-gray-100"
            style={{ height: "28rem", margin: "0 0 0 auto" }}
            alt={"Coffee beans on background"}
            fluid={contactSectionImgFluid}
          />
          <div className="sm:absolute inset-0 bg-gray-100 bg-opacity-50">
            <div className="h-full container mx-auto flex flex-col">
              <div className="h-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="h-full w-full sm:w-64 px-2 bg-gray-100 flex flex-col justify-center items-start pr-8 space-y-4">
                  <Text.l2 className="text-gray-600">
                    <a id="home-contacts">Contacts</a>
                  </Text.l2>
                  <Text.h2 className="pb-2 sm:w-2/3">
                    Let's get acquainted
                  </Text.h2>
                  <dl className="mt-2">
                    <dt className="my-2">
                      <Text.dt>Linkedin</Text.dt>
                    </dt>
                    <dd>
                      <Text.dd>
                        <Hyperlink href="https://linkedin.com/in/albertsmanuel">
                          https://linkedin.com/in/albertsmanuel
                        </Hyperlink>
                      </Text.dd>
                    </dd>
                  </dl>

                  <dl className="mt-2">
                    <dt className="my-2">
                      <Text.dt>E-mail</Text.dt>
                    </dt>
                    <dd>
                      <Text.dd>albert.s.manuel@gmail.com</Text.dd>
                    </dd>
                  </dl>

                  <dl className="mt-2">
                    <dt className="my-2">
                      <Text.dt>GitHub</Text.dt>
                    </dt>
                    <dd>
                      <Text.dd>
                        <Hyperlink href="https://github.com/imalbert">
                          https://github.com/imalbert
                        </Hyperlink>
                      </Text.dd>
                    </dd>
                  </dl>
                </div>

                <div className="pb-0 pt-12 sm:py-12 px-8 sm:px-6 space-y-3 bg-gray-100 w-full sm:w-auto flex flex-col justify-center">
                  <Text.h3 className="font-extrabold uppercase">
                    Contact us
                  </Text.h3>
                  <input
                    id="contactus-name"
                    className="appearance-none sm:w-auto bg-gray-100 border-b-2 p-2 text-xs font-semibold"
                    placeholder="Name"
                  />
                  <input
                    id="contactus-phone"
                    className="appearance-none sm:w-auto bg-gray-100 border-b-2 p-2 text-xs font-bold"
                    placeholder="Phone"
                  />
                  <textarea
                    id="contactus-message"
                    rows="3"
                    className="form-textarea appearance-none sm:w-auto bg-gray-100 border-b-2 p-2 text-xs font-bold"
                    placeholder="Message"
                  />
                  <Button.Outline icon="chevron-right">
                    Send Message
                  </Button.Outline>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* <Masthead1 /> */}
    </HomeLayout>
  )
}

export const query = graphql`
  query CoffeeShowcase {
    allMarkdownRemark(limit: 3) {
      edges {
        node {
          frontmatter {
            title
            price
            img {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    allImageSharp(
      filter: {
        fluid: {
          src: {
            regex: "/coffee-with-sunrise.jpg|coffee-desktop.jpg|contact-us.jpg/"
          }
        }
      }
    ) {
      edges {
        node {
          fluid(srcSetBreakpoints: [800, 1200, 1600]) {
            ...GatsbyImageSharpFluid
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage
