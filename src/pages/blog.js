import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <PageTransition>
        <SEO title="Blog" />
        <div className="wrapper">
          <div className="project-title">
            <h1>Blog</h1>
            <p>Welcome to my personal blog</p>
          </div>
          <div className="blog-wrapper">
            {allMarkdownRemark.edges.map((edge, index) => (
              <div className="blog-post">
                <Link to={edge.node.frontmatter.slug}>
                  <h1>{edge.node.frontmatter.title}</h1>
                </Link>
                <p className="blog-post-excerpt">{edge.node.excerpt}</p>
                <p className="blog-post-date">{edge.node.frontmatter.date}</p>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default BlogPage

export const queryResults = graphql`
  query blogQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
          excerpt
          html
        }
      }
    }
  }
`
