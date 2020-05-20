import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Header from "../header"
import Text from "../text"
import Hyperlink from "../hyperlink"
import Button from "../button"

const Masthead = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coffee/coffee-cup-3.png" }) {
        childImageSharp {
          fixed(width: 380) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="p-4 flex flex-col container mx-auto">
      <Header />

      <div className="py-16 sm:px-4 flex flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="flex flex-col justify-center text-center sm:text-right">
            <div className="py-2 space-x-4 flex justify-center sm:justify-end text-white">
              <Hyperlink href="https://github.com/imalbert" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Hyperlink>
              <Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Hyperlink>
              <Hyperlink href="mailto:albert.s.manuel@gmail.com">
                <FontAwesomeIcon icon="envelope" />
              </Hyperlink>
            </div>

            <div className="space-y-2">
              <Text.h2 className="text-white">
                I don't need an
                <br />
                inspirational quote.
              </Text.h2>
              <Text.h1>
                I need <u>coffee</u>.
              </Text.h1>
            </div>

            <div className="pb-4 pt-6 flex justify-center sm:justify-end items-center">
              <Button.Outline icon="chevron-right" inverse>
                Get Coffee
              </Button.Outline>
            </div>
          </div>

          <div className="w-full mx-auto sm:mx-0 sm:h-auto sm:w-auto flex items-center justify-center sm:justify-start">
            <Img
              imgStyle={{ objectFit: "contain" }}
              fixed={data.file.childImageSharp.fixed}
              alt="I need Coffee"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masthead
