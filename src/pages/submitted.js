import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import githubIcon from "../images/github-icon.png"
import resume from "../images/resume.pdf"
import devIcon from "../images/dev.png"
import PageTransition from "gatsby-plugin-page-transitions"
import { navigate } from "gatsby"

const handleClick = () => {
    navigate("/")
}

const IndexPage = () => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="Submitted" />
        <div className="wrapper">
          <div className="home-text">
            <h3>Your message has been sent!</h3>
            <button className="button" onClick={handleClick}>Home</button>
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
