import React from "react"
import PropTypes from "prop-types"

import SubpageHeader from "../header/subpage-header"
import Footer from "../footer"
import Layout from "."

const PageLayout = ({ children, header }) => {
  return (
    <Layout>
      <SubpageHeader {...header} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
