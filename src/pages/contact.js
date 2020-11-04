import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const ContactPage = () => (
  <Layout>
    <PageTransition>
      <SEO title="Contact" />
      <div className="wrapper">
        <div className="project-title">
          <h1>Contact Me</h1>
          <p>Get in touch!</p>
        </div>
        <div className="contact-info">
          <h3>Email</h3>
          <p>andredasalla@yahoo.com</p>
          <h3>Discord</h3>
          <p>Skwiid#2027</p>
        </div>
      </div>
    </PageTransition>
  </Layout>
)

export default ContactPage
