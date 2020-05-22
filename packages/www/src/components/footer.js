import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Hyperlink from "./hyperlink"
import Button from "./button"
import Text from "./text"
import { Logo } from "./header"

const Footer = () => (
  <footer className="container mx-auto border-t-2 border-gray-300">
    <div className="p-2 py-4 sm:py-8 grid grid-cols-1 sm:grid-cols-3 sm:inline-flex w-full">
      <div className="grid grid-cols-2 sm:w-1/4">
        <div className="flex flex-col justify-center items-center sm:items-start space-y-2">
          <Text.l2 className="uppercase">
            <Link to="#home-news">News</Link>
          </Text.l2>
          <Text.l2 className="uppercase">
            <Link to="#home-contacts">Contacts</Link>
          </Text.l2>
          <Text.l2 className="uppercase">
            <Link to="/coffee">Coffee</Link>
          </Text.l2>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start space-y-2">
          <Text.l2 className="uppercase">
            <Link to="/">About us</Link>
          </Text.l2>
          <Text.l2 className="uppercase">
            <Link to="/">Delivery</Link>
          </Text.l2>
          <Text.l2 className="uppercase">
            <Link to="/">FAQ</Link>
          </Text.l2>
        </div>
      </div>

      <div className="py-4 sm:py-0 sm:space-y-1 flex flex-col justify-center sm:w-1/2">
        <div className="text-center">
          <Logo>FAKECOFFEE</Logo>
        </div>
        <div className="space-x-8 text-center">
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
      </div>

      <div className="p-4 sm:p-0 space-y-2 flex flex-col sm:w-1/4">
        <input
          id="subscribe-email"
          className="appearance-none bg-gray-100 border-b-2 p-2 text-xs font-bold"
          placeholder="ENTER EMAIL"
        />

        <Button.Link icon="chevron-right" full xs>
          Subscribe
        </Button.Link>
      </div>
    </div>
  </footer>
)

export default Footer
