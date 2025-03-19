"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import FeaturedCollection from "../components/FeaturedCollection"
import CraftmanshipSection from "../components/CraftmanshipSection"
import TestimonialSection from "../components/TestimonialSection"
import CallToAction from "../components/CallToAction"

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <CraftmanshipSection />
      <TestimonialSection />
      <CallToAction />
    </main>
  )
}

export default HomePage

