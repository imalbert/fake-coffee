import React from "react"
import { Link } from "gatsby"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container mx-auto">
      <SEO title="Home" />
      <h1 className="font-serif text-5xl font-black tracking-tighter">
        Fake Coffee <FontAwesomeIcon icon={faMugHot} />
      </h1>
      <h1 className="font-serif text-5xl italic leading-3">Imagine</h1>
      <p className="mt-10 mb-6">
        We'll travel the world, find the best coffee,<br/>
        and send it through your door.<br/>
        You just need to think it.<br/>
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
