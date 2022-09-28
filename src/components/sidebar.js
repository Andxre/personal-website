import React from "react"
import { VscChromeClose } from "react-icons/vsc"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={isOpen ? `sidebar active` : `sidebar`}>
      <div className="exit-button">
        <VscChromeClose size={30} onClick={toggleSidebar} />
      </div>
      <div className="mobile-navbar-links">
        <Link activeClassName="active" to="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link activeClassName="active" to="/projects" onClick={toggleSidebar}>
          Projects
        </Link>
        <Link activeClassName="active" to="/blog" onClick={toggleSidebar}>
          Blog
        </Link>
        <Link activeClassName="active" to="/contact" onClick={toggleSidebar}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
