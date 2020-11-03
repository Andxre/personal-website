import React from "react"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    isOpen && (document.body.style.overflow = `hidden`)
    !isOpen && (document.body.style.overflow = `unset`)
  }, [isOpen])

  return (
    <header className="header">
      <p>Andre</p>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}

export default Header
