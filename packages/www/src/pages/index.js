import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

library.add(faMugHot)

const IndexPage = () => (
  <Layout>
    <div className="container mx-auto">
      <SEO title="Home" />
      <h1 className="font-serif text-5xl font-black tracking-tighter">
        Fake Coffee <FontAwesomeIcon icon='mug-hot' className="text-5xl" />
      </h1>
      <h1 className="font-serif text-5xl italic leading-3">Imagine</h1>
      <p className="mt-10 mb-6">
        Kick off your day with one of our best, made-up coffees.<br/>
        Instant delivery for free!<br/>
      </p>
      <button className="btn btn-primary mr-2">Browse Coffees</button>
      <button className="btn btn-secondary">
        <Link to="/page-2/">
          Create a plan
        </Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
