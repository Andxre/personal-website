import React from "react"

const Card = ({ data }) => {
  // Destructure post and grab data (Post should be a graphQL Node)
  // This can work for both project and blog
  // Post Type: Project
  return (
    <div className="card">
      <div
        className="card-picture"
        style={{
          backgroundImage: `url(${data.image.childImageSharp.fluid.src})`,
        }}
      >
        {/* <img src={data.image.childImageSharp.fluid.src} alt="No Image" /> */}
      </div>
      <div className="card-text">
        <p className="title">{data.title}</p>
        <p className="desc">{data.description}</p>
      </div>
      <div className="buttons">
        <a
          href={data.hasWebsite === 1 ? data.website : `#`}
          target="_blank"
          rel="noreferrer"
          className={data.hasWebsite === 1 ? `button` : `button disable`}
        >
          {data.hasWebsite === 1 ? `Website` : `No Demo`}
        </a>

        {/*Greyed out if there is no live website*/}
        <a
          href={data.github}
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default Card
