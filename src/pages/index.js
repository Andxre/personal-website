import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import githubIcon from "../images/github-icon.png"
import resume from "../images/resume.pdf"
import devIcon from "../images/dev.png"
import PageTransition from "gatsby-plugin-page-transitions"

const IndexPage = () => {
  return (
    <Layout>
      <PageTransition>
        <SEO title="Home" />
        <div className="wrapper">
          <div className="home-text">
            <h1>Andre Dasalla</h1>
            <h3>Computer Science Student</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/andre-dasalla-063a0411a/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  height="30"
                  src="https://raw.githubusercontent.com/trinwin/trinwin/master/icons/linkedin.png?raw=true"
                  alt="linkedIn"
                  loading="lazy"
                />
              </a>
              <a
                href="https://medium.com/@apd6710"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  height="30"
                  src="https://raw.githubusercontent.com/trinwin/trinwin/master/icons/medium.png?raw=true"
                  alt="Medium"
                  loading="lazy"
                />
              </a>
              <a
                href="https://github.com/Andxre"
                target="_blank"
                rel="noreferrer"
              >
                <img height="30" src={githubIcon} alt="github" loading="lazy" />
              </a>
              <a href="https://dev.to/andxre" target="_blank" rel="noreferrer">
                <img height="30" src={devIcon} alt="dev.to" loading="lazy" />
              </a>
            </div>
            <a
              href={resume}
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
          <div className="about_wrapper">
            <div className="about-text">
              <h3>Who Am I?</h3>
              <p>
                Hello! My name is Andre Dasalla and I am a junior CS student at
                Seattle University. I am currently teaching myself Web
                Development including: React, NodeJS, MongoDB.
              </p>
              <h3>Why this website?</h3>
              <p>
                I made this website to test my knowledge in React and to learn
                GatsbyJS. I also needed a place to display my work and to share
                what I've learned through my blog.
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
