import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const ProjectPage = ({ data }) => {
  const dataArr = data.allProjectsJson.edges
  console.log(dataArr)
  return (
    <Layout>
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
