import React from "react"
import PropTypes from "prop-types"

import Header from "../header"
import Footer from "../footer"
import Layout from "."
import Section from "../sections/section"
import Masthead from "../sections/masthead"

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Section bgColor="bg-primary">
        <Header inverse />
        <Masthead />
      </Section>
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
