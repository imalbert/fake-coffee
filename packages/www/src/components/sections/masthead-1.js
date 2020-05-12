import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        <div className="p-6 text-primary-light">
          <h1 className="text-5xl font-bold leading-9">20</h1>
          <h1 className="text-5xl font-bold leading-10">20</h1>
        </div>
      </div>
      <div className="self-center">
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
              <div className="bg-primary-light" />
              <div className="bg-primary" />
              <div className="bg-primary-dark" />
              <div className="bg-secondary-light" />
              <div className="bg-secondary" />
              <div className="bg-secondary-dark" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-right p-6 hidden lg:flex flex-col justify-between">
        <div className="p-6 text-white">
          <h1 className="text-5xl font-bold leading-9">20</h1>
          <h1 className="text-5xl font-bold leading-10">20</h1>
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
