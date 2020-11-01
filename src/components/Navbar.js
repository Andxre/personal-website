import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link activeClassName="active" to="/">
        Home
      </Link>
      <Link activeClassName="active" to="/projects">
        Projects
      </Link>
      <Link activeClassName="active" to="/blog">
        Blog
      </Link>
      <Link activeClassName="active" to="/contact">
        Contact
      </Link>
    </div>
  )
}

export default Navbar
