import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Hyperlink from "./hyperlink"

const Footer = () => (
  <footer className="container mx-auto flex justify-between p-12 text-base">
    <div>
      <Hyperlink href="https://www.gatsbyjs.org">
        # 2020 Built with Gatsby
      </Hyperlink>
    </div>
    <div className="space-x-6">
      <Hyperlink href="https://github.com/imalbert">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Hyperlink>
      <Hyperlink href="https://www.linkedin.com/in/albertsmanuel/">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Hyperlink>
      <Hyperlink href="mailto:albert.s.manuel@gmail.com">
        <FontAwesomeIcon icon="envelope" size="lg" />
      </Hyperlink>
    </div>
  </footer>
)

export default Footer
