import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer"
import Header from "../header"
import Layout from "."

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main className="flex-grow flex flex-col">{children}</main>
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
