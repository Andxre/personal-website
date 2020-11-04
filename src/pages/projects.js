import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import PageTransition from "gatsby-plugin-page-transitions"

const ProjectPage = ({ data }) => {
  const dataArr = data.allProjectsJson.edges
  return (
    <Layout>
      <PageTransition>
        <SEO title="Projects" />
        <div className="project-title">
          <h1>Projects</h1>
          <p>This is a list of all of my projects</p>
        </div>
        <div className="projects-wrapper">
          {dataArr.map((project, index) => (
            <Card key={index} data={project.node} />
          ))}
        </div>
      </PageTransition>
    </Layout>
  )
}

export default ProjectPage

export const queryResults = graphql`
  query MyQuery {
    allProjectsJson {
      edges {
        node {
          title
          description
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          hasWebsite
          website
          github
        }
      }
    }
  }
`
