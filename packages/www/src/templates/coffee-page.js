import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Hyperlink from "../components/hyperlink"
import HeaderLink from "../components/header/header-link"
import HeaderButton from "../components/header/header-button"
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
      <div className="container mx-auto">
        <div className="flex bg-white">
          <aside className="hidden sm:block p-4 sm:mt-4">
            <HeaderLink>
              <Icon icon="coffee" size="2x" className="text-secondary-light" />
            </HeaderLink>
          </aside>

          <main className="flex-grow flex flex-col">
            <header className="flex p-4 sm:mt-6 space-x-4">
              <div className="flex w-1/4 items-center space-x-1">
                <Icon icon="map-marker" className="text-secondary-light" />
                <span
                  className="tracking-tight leading-3"
                  style={{ fontSize: "0.5rem" }}
                >
                  Lorem ipsum dolor, sit amet, 74903-4
                </span>
              </div>
              <div className="flex w-1/4 items-center space-x-1">
                <Icon icon="paper-plane" className="text-secondary-light" />
                <span
                  className="text-xs tracking-tight leading-3"
                  style={{ fontSize: "0.5rem" }}
                >
                  +63 999-999-999
                  <br />
                  +63 999-999-999
                </span>
              </div>
              <div className="flex w-1/2 items-center space-x-1">
                <div class="relative w-full shadow-sm">
                  <input
                    id="search"
                    class="form-input block p-2 sm:text-sm sm:leading-5"
                  />
                  <div class="mr-2 absolute inset-y-0 right-0 flex items-center">
                    <Icon icon="search" className="text-secondary-light" />
                  </div>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-0 flex-grow flex flex-col items:center">
              <section className="relative m-0 sm:py-16">
                <div className="text-center sm:text-left space-y-4">
                  <Text.Heading1>Fake Coffee</Text.Heading1>
                  <figure className="sm:-mr-32 sm:right-0 sm:top-0 z-10 sm:absolute">
                    <Img fluid={sources} className="w-40 sm:w-64 mx-auto" />
                  </figure>
                  <p className="mx-auto sm:mx-0 w-64 text-xs leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className="inline-block">
                    <Link
                      to="/"
                      className="text-xs tracking-tight italic font-serif font-semibold border-black border-b inline-block"
                    >
                      Read more
                    </Link>
                  </div>

                  <div className="flex justify-center sm:justify-start items-baseline space-x-4">
                    <Text.Heading1>$0</Text.Heading1>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Icon icon="plus" className="text-white" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <aside className="fixed bottom-0 right-0 sm:relative z-0 w-0 sm:w-1/3 bg-primary h-screen">
            <nav className="p-4 m-4 space-x-2 hidden sm:flex justify-end items-center right-0">
              <Hyperlink href="https://github.com/imalbert">
                <Icon icon={faGithub} className="text-white" />
              </Hyperlink>
              <Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
                <Icon icon={faLinkedin} className="text-white" />
              </Hyperlink>
              <Hyperlink href="mailto:albert.s.manuel@gmail.com">
                <Icon icon="envelope" className="text-white" />
              </Hyperlink>

              <div className="pl-4 space-x-4 items-center flex">
                <Icon icon="portrait" className="text-white" />
                <HeaderButton
                // onClick={() => toggleBurger(!burgerOpen)}
                >
                  <Icon icon="hamburger" size="lg" className="text-white" />
                </HeaderButton>
              </div>
            </nav>

            <nav className="mr-4 mb-4 sm:mr-8 sm:mb-8 w-12 h-12 bg-primary sm:bg-white bottom-0 right-0 rounded-full flex items-center justify-center absolute">
              <div className="relative">
                <Icon
                  icon="shopping-cart"
                  size="lg"
                  className="text-white sm:text-primary m-1"
                />
                <span className="-mt-3 -mr-3 w-5 h-5 text-primary sm:text-white bg-white sm:bg-primary text-xs font-semibold border border-primary sm:border-white rounded-full flex items-center justify-center top-0 right-0 absolute">
                  3
                </span>
              </div>
            </nav>
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
