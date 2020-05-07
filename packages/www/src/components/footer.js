import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="container mx-auto flex-none">
    Built with
    {` `}
    <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>{` `}
    <a href="https://github.com/imalbert" target="_blank">
      by @imalbert {` `}
      <FontAwesomeIcon icon={faGithub} />
    </a> {` `}
    <a href="mailto:albert.s.manuel@gmail.com">
      Send me an email!
    </a>
  </footer>
)

export default Footer