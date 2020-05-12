// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => (
  <div className="container mx-auto">
    <header className="relative">
      <div>
        <div className="flex justify-between items-center p-6 space-x-8">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon="coffee"
              size="lg"
              className="text-secondary-light"
            />
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              class={`
            p-2 text-secondary-light
            hover:text-secondary-light hover:bg-accent-light
            transition duration-150 ease-in-out
          `}
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="hidden lg:flex lg:flex-grow justify-start items-center space-x-8">
            <a
              href="#"
              className="btn btn-secondary text-base font-medium leading-6 align-left"
            >
              Create a fake plan
            </a>
            <div>
              <button
                type="button"
                className="text-secondary font-medium text-lg tracking-tighter"
              >
                Shop
                <FontAwesomeIcon
                  icon="chevron-down"
                  size="sm"
                  className="ml-2"
                />
              </button>
              <div className="absolute -ml-4 mt-3 px-2 w-screen max-w-md">
                <div className="rounded-lg shadow-xs overflow-hidden">
                  <div className="rounded-lg shadow-lg">
                    <div className="z-20 relative bg-white grid p-2 lg:p-4 gap-1 lg:gap-2">
                      <a
                        href="#"
                        className="p-3 flex items-center space-x-4 rounded-lg hover:opacity-75 transition ease-in-out duration-150"
                      >
                        <FontAwesomeIcon
                          icon="coffee"
                          size="2x"
                          className="text-secondary-light"
                        />
                        <div>
                          <p className="text-secondary font-medium text-lg tracking-tighter">
                            Coffee
                          </p>
                          <p className="text-secondary font-medium text-lg tracking-tighter opacity-75">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="p-3 flex items-center space-x-4 rounded-lg hover:opacity-75 transition ease-in-out duration-150"
                      >
                        <FontAwesomeIcon
                          icon="hammer"
                          size="2x"
                          className="text-secondary-light"
                        />
                        <div>
                          <p className="text-secondary font-medium text-lg tracking-tighter">
                            Equipment
                          </p>
                          <p className="text-secondary font-medium text-lg tracking-tighter opacity-75">
                            Lorem ipsum dolor sit amet
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-secondary font-medium text-lg tracking-tighter"
            >
              About us
            </a>
          </nav>

          <div className="hidden lg:flex justify-end items-center space-x-8">
            <a
              href="#"
              className="text-secondary font-medium text-lg tracking-tighter"
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-secondary-light text-base font-medium leading-6"
            >
              <FontAwesomeIcon icon="shopping-cart" size="lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right lg:hidden">
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary font-medium text-lg tracking-tighter">
                    Fake
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon="times"
                    size="2x"
                    className="w-auto h-6 text-secondary-light"
                  />
                </div>
              </div>
              <div>
                <nav className="grid row-gap-8">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md transition ease-in-out duration-150"
                  >
                    <FontAwesomeIcon
                      icon="coffee"
                      size="lg"
                      className="text-secondary-light"
                    />
                    <p className="text-secondary font-medium text-lg tracking-tighter">
                      Coffee
                    </p>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md transition ease-in-out duration-150"
                  >
                    <FontAwesomeIcon
                      icon="hammer"
                      size="lg"
                      className="text-secondary-light"
                    />
                    <p className="text-secondary font-medium text-lg tracking-tighter">
                      Equipment
                    </p>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md transition ease-in-out duration-150"
                  >
                    <FontAwesomeIcon
                      icon="portrait"
                      size="lg"
                      className="text-secondary-light"
                    />
                    <p className="text-secondary font-medium text-lg tracking-tighter">
                      About
                    </p>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md transition ease-in-out duration-150"
                  >
                    <FontAwesomeIcon
                      icon="sign-in-alt"
                      size="lg"
                      className="text-secondary-light"
                    />
                    <p className="text-secondary font-medium text-lg tracking-tighter">
                      Sign In
                    </p>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center space-x-3 rounded-md transition ease-in-out duration-150"
                  >
                    <FontAwesomeIcon
                      icon="shopping-cart"
                      size="lg"
                      className="text-secondary-light"
                    />
                    <p className="text-secondary font-medium text-lg tracking-tighter">
                      Shopping Cart
                    </p>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
