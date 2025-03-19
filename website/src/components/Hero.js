"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleParallax)
    return () => window.removeEventListener("scroll", handleParallax)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      ></div>

      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gold-text">Time</span> Is The Ultimate <span className="gold-text">Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Crafted for men who command respect and demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/collections" className="gold-button px-8 py-3 rounded-none text-center font-medium">
                Explore Collections
              </Link>
              <Link to="/heritage" className="outline-gold-button px-8 py-3 rounded-none text-center font-medium">
                Our Heritage
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero

