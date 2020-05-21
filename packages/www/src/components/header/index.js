import React from "react"

import HeaderLink from "./header-link"
import HeaderButton from "./header-button"
import Icon from "../icon/icon"
import Text from "../text"

export const Logo = ({ children }) => (
  <h1 className="font-semibold tracking-wider uppercase">
    {children || "FAKECOFFEE"}
  </h1>
)

const Header = () => (
  <header className="container mx-auto text-white">
    <div className="flex justify-between">
      <nav className="flex-1 space-x-2 flex items-center">
        <HeaderButton
        // appendedClassNames="lg:hidden"
        // onClick={() => toggleBurger(!burgerOpen)}
        >
          <Icon icon="hamburger" />
        </HeaderButton>
        <Text.l2 className="uppercase">Menu</Text.l2>
      </nav>

      <div className="flex-1 text-center">
        <Logo>FAKECOFFEE</Logo>
      </div>

      <nav className="flex-1 space-x-2 flex items-center justify-end">
        <HeaderButton>
          <Icon icon="search" />
        </HeaderButton>
        <HeaderButton>
          <Icon icon="shopping-cart" />
        </HeaderButton>
        <HeaderButton>
          <div className="flex items-center">
            <Text.l2 className="">EN</Text.l2>
            <Icon icon="chevron-down" size="sm" />
          </div>
        </HeaderButton>
      </nav>
    </div>
  </header>
)

export default Header
