import React, { useState } from "react"
import PropTypes from "prop-types"

import HeaderLink from "./header-link"
import HeaderButton from "./header-button"
import Icon from "../icon/icon"

const Header = ({ padding = "6" }) => {
  const [flyoutOpen, toggleFlyout] = useState(false)
  const [burgerOpen, toggleBurger] = useState(false)

  return (
    <div className="container mx-auto">
      <header className="relative">
        <HeaderLg padding={padding}>
          <HeaderLink>
            <Icon icon="coffee" size="lg" />
          </HeaderLink>

          <HeaderButton
            appendedClassNames="lg:hidden"
            onClick={() => toggleBurger(!burgerOpen)}
          >
            <Icon icon="hamburger" size="lg" />
          </HeaderButton>

          <nav className="hidden lg:flex lg:flex-grow justify-start items-center space-x-8">
            <HeaderLink to="/coffee-plan">
              <div className="btn btn-gray-800">Create a fake plan</div>
            </HeaderLink>
            <div>
              <HeaderButton onClick={() => toggleFlyout(!flyoutOpen)}>
                Shop
                <Icon icon="chevron-down" size="sm" className="ml-2" />
              </HeaderButton>
              <HeaderFlyout isOpen={flyoutOpen}>
                <HeaderLink to="/coffee">
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
        <HeaderSm isOpen={burgerOpen}>
          <nav className="grid row-gap-8">
            <HeaderLink to="/coffee-plan">
              <Icon icon="calendar-check" size="lg" className="mr-4" />
              Create a fake plan
            </HeaderLink>
            <HeaderLink to="/coffee">
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
              <Icon icon="sign-in-alt" size="lg" className="mr-4" />
              Sign in
            </HeaderLink>
            <HeaderLink>
              <Icon icon="shopping-cart" size="lg" className="mr-4" />
              Shopping cart
            </HeaderLink>
          </nav>
        </HeaderSm>
      </header>
    </div>
  )
}

const HeaderFlyout = ({ children, isOpen }) => (
  <div
    className={`z-30 absolute -ml-4 mt-3 w-screen max-w-md ${
      isOpen ? "" : "hidden"
    }`}
  >
    <div className="border-8 border-gray-800bg-primary overflow-hidden shadow-xs">
      <div className="shadow-lg">
        <div className="relative grid p-2 lg:p-4 gap-1 lg:gap-2">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export const HeaderLg = ({ children, padding }) => (
  <div className={`flex justify-between items-center p-${padding} space-x-8`}>
    {children}
  </div>
)

export const HeaderSm = ({ children, alwaysShow, isOpen }) => (
  <div
    className={`
    z-20 absolute top-0 right-0 w-64 mt-8
		transition transform origin-top-right
		${isOpen ? "" : "hidden"}
    ${alwaysShow ? "" : "sm:hidden"}`}
  >
    <div className="border-4 border-gray-800bg-primary shadow-xs">
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
