import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="container mx-auto flex justify-between p-12 text-base">
    <div>
      <a href="https://www.gatsbyjs.org" target="_blank">
        # 2020 Built with Gatsby
      </a>
    </div>
    <div className="space-x-6">
      <a href="https://github.com/imalbert" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://www.linkedin.com/in/albertsmanuel/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="mailto:albert.s.manuel@gmail.com">
        <FontAwesomeIcon icon="envelope" size="lg" />
      </a>
    </div>
  </footer>
)

export default Footer
