import { Link } from "gatsby"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = ({ toggleSidebar }) => {
  return (
    <React.Fragment>
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
      <div className="mobile-navbar">
        <GiHamburgerMenu className="hamburger" onClick={toggleSidebar} />
      </div>
    </React.Fragment>
  )
}

export default Navbar
