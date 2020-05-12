// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import HeaderLink from "./header-link"
import Icon from "../icon/icon"

const Header = () => (
  <div className="container mx-auto">
    <header className="relative">
      <HeaderLg>
        <HeaderLink>
          <Icon icon="coffee" size="lg" />
        </HeaderLink>

        <HeaderLink appendedClassNames="lg:hidden">
          <Icon icon="hamburger" size="lg" />
        </HeaderLink>

        <nav className="hidden lg:flex lg:flex-grow justify-start items-center space-x-8">
          <HeaderLink>
            <div className="btn btn-secondary">Create a fake plan</div>
          </HeaderLink>
          <div>
            <HeaderLink>
              Shop
              <Icon icon="chevron-down" size="sm" className="ml-2" />
            </HeaderLink>
            <HeaderFlyout>
              <HeaderLink>
                <div className="p-2 flex items-center space-x-4 rounded-lg">
                  <Icon icon="coffee" size="2x" />
                  <div>
                    <p>Coffee</p>
                    <p className="font-normal opacity-75 text-sm">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </HeaderLink>
              <HeaderLink>
                <div className="p-2 flex items-center space-x-4 rounded-lg">
                  <Icon icon="hammer" size="2x" />
                  <div>
                    <p>Equipment</p>
                    <p className="font-normal opacity-75 text-sm">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
              </HeaderLink>
            </HeaderFlyout>
          </div>
          <HeaderLink>About us</HeaderLink>
        </nav>

        <div className="hidden lg:flex justify-end items-center space-x-8">
          <HeaderLink>Sign in</HeaderLink>
          <HeaderLink>
            <Icon icon="shopping-cart" size="lg" />
          </HeaderLink>
        </div>
      </HeaderLg>
      <HeaderSm>
        <div>
          <nav className="grid row-gap-8">
            <HeaderLink>
              <Icon icon="coffee" size="lg" className="mr-4" />
              Coffee
            </HeaderLink>
            <HeaderLink>
              <Icon icon="hammer" size="lg" className="mr-4" />
              Equipment
            </HeaderLink>
            <HeaderLink>
              <Icon icon="portrait" size="lg" className="mr-4" />
              About us
            </HeaderLink>
            <HeaderLink>
              <Icon icon="coffee" size="lg" className="mr-4" />
              Sign in
            </HeaderLink>
            <HeaderLink>
              <Icon icon="shopping-cart" size="lg" className="mr-4" />
              Shopping cart
            </HeaderLink>
          </nav>
        </div>
      </HeaderSm>
    </header>
  </div>
)

const HeaderFlyout = ({ children }) => (
  <div className="z-30 absolute -ml-4 mt-3 w-screen max-w-md">
    <div className="border-8 border-secondary bg-primary overflow-hidden shadow-xs">
      <div className="shadow-lg">
        <div className="relative grid p-2 lg:p-4 gap-1 lg:gap-2">
          {children}
        </div>
      </div>
    </div>
  </div>
)

const HeaderLg = ({ children }) => (
  <div>
    <div className="flex justify-between items-center p-6 space-x-8">
      {children}
    </div>
  </div>
)

const HeaderSm = ({ children }) => (
  <div className="z-20 absolute top-0 right-0 w-64 mt-16 transition transform origin-top-right lg:hidden">
    <div className="border-4 border-secondary bg-primary shadow-xs">
      <div className="shadow-lg">
        <div className="pt-6 pb-6 px-5 space-y-6">{children}</div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
