import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image-es5'

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "papyrus-toptal.com.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={`background-section ${className}`}
          fluid={imageData}
        >
          <div className="h-full p-12 bg-primary-light bg-opacity-25">
            {children}
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection