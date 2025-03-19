"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold font-serif gold-text">
            CHRONOS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:gold-text transition-colors">
              Home
            </Link>
            <Link to="/collections" className="text-white hover:gold-text transition-colors">
              Collections
            </Link>
            <Link to="/heritage" className="text-white hover:gold-text transition-colors">
              Heritage
            </Link>
            <Link to="/contact" className="text-white hover:gold-text transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-white hover:gold-text transition-colors py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/collections"
            className="text-white hover:gold-text transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Collections
          </Link>
          <Link
            to="/heritage"
            className="text-white hover:gold-text transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Heritage
          </Link>
          <Link
            to="/contact"
            className="text-white hover:gold-text transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

