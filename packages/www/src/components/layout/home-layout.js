import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer"
import Layout from "."

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
