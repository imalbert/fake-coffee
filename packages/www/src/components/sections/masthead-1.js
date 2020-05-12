import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Header from "../header"

const masthead1 = () => (
  <div className="flex flex-col h-screen bg-primary">
    <Header />
    <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 p-6 mt-0 m-6 border-8 border-primary-light">
      <div className="text-white p-6 hidden lg:flex flex-col justify-between">
        <div>
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
            Fake
          </h1>
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">
            Coffee
          </h1>
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
            Imagine
          </h1>
        </div>
        <div className="flex flex-col space-y-6 text-left text-white">
          <a href="https://github.com/imalbert" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/albertsmanuel/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:albert.s.manuel@gmail.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
        <div className="text-primary-light">
          <h1 className="text-5xl font-bold leading-9">20</h1>
          <h1 className="text-5xl font-bold leading-10">20</h1>
        </div>
      </div>
      <div className="items-center flex relative">
        <div className="absolute top-0 left-0 right-0 space-x-6 text-center text-white">
          <a href="https://github.com/imalbert" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/albertsmanuel/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:albert.s.manuel@gmail.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
        <div className="w-full">
          <div className="bg-primary border-8 border-black border-secondary rounded shadow-xl text-secondary">
            <div className="flex flex-col w-full shadow-2xl">
              <div className="relative p-6">
                <div className="absolute top-0 right-0 p-6">
                  <h1 className="text-5xl font-bold leading-9">20</h1>
                  <h1 className="text-5xl font-bold leading-10">20</h1>
                </div>
                <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
                  Fake
                </h1>
                <h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">
                  Coffee
                </h1>
                <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
                  Imagine
                </h1>
                <p className="ml-1 mt-4 uppercase text-xs leading-tight">
                  Best, made-up coffees.
                  <br />
                  Instant delivery for free!
                  <br />
                </p>
              </div>
              <div className="flex-grow grid grid-cols-6 w-full h-16 gap-0 p-2">
                <div className="bg-primary-light transition ease-in-out duration-150 transform hover:scale-110" />
                <div className="bg-primary transition ease-in-out duration-150 hover:shadow-lg" />
                <div className="bg-primary-dark transition ease-in-out duration-150 transform hover:scale-110" />
                <div className="bg-secondary-light transition ease-in-out duration-150 transform hover:scale-110" />
                <div className="bg-secondary transition ease-in-out duration-150 transform hover:scale-110" />
                <div className="bg-secondary-dark transition ease-in-out duration-150 transform hover:scale-110" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 space-x-6 text-center text-primary-light">
            <a href="https://github.com/imalbert" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/albertsmanuel/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:albert.s.manuel@gmail.com">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-right p-6 hidden lg:flex flex-col justify-between">
        <div className="text-white">
          <h1 className="text-5xl font-bold leading-9">20</h1>
          <h1 className="text-5xl font-bold leading-10">20</h1>
        </div>
        <div className="flex flex-col space-y-6 text-right text-primary-light">
          <a href="https://github.com/imalbert" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/albertsmanuel/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:albert.s.manuel@gmail.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
        <div className="text-primary-light">
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
            Fake
          </h1>
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-10">
            Coffee
          </h1>
          <h1 className="text-6xl uppercase font-bold tracking-tighter leading-none">
            Imagine
          </h1>
        </div>
      </div>
    </div>
  </div>
)

export default masthead1
