import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import PageTransition from "gatsby-plugin-page-transitions"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  deckDeckGoHighlightElement()
  return (
    <Layout>
      <PageTransition>
        <div className="blog-post-container">
          <div className="blog-block">
            <div className="blog-header">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.date}</h2>
            </div>
            <hr></hr>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div className="blog-back-button">
            <Link to="/blog" className="button">
              Back
            </Link>
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
