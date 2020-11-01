import React from "react"
import githubIcon from "../images/github-icon.png"

const Card = ({ data }) => {
  // Destructure post and grab data (Post should be a graphQL Node)
  // This can work for both project and blog
  // Post Type: Project
  return (
    <div className="card">
      <div className="card-picture">
        <img src={data.image.childImageSharp.fluid.src}></img>
      </div>
      <div className="card-text">
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <div className="buttons">
        <a
          href={data.hasWebsite == 1 ? data.website : `#`}
          target="_blank"
          className={data.hasWebsite == 1 ? `button` : `button disable`}
        >
          {data.hasWebsite == 1 ? `Website` : `No Demo`}
        </a>

        {/*Greyed out if there is no live website*/}
        <a href={data.github} target="_blank" className="button">
          Github
        </a>
      </div>
    </div>
  )
}

export default Card
