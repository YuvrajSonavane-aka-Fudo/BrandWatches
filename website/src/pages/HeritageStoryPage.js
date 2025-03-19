"use client"

import { useEffect } from "react"

const HeritageStoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20">
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Heritage</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                A Legacy of <span className="gold-text">Excellence</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Founded in 1952 by master watchmaker Antoine Chronos, our company began with a simple yet profound
                vision: to create timepieces that would stand as testaments to both technical precision and masculine
                elegance.
              </p>
              <p className="text-gray-300 mb-4">
                From our humble beginnings in a small Swiss workshop to our current position as a global symbol of
                luxury, we have maintained an unwavering commitment to craftsmanship, innovation, and the pursuit of
                perfection.
              </p>
              <p className="text-gray-300">
                Each CHRONOS watch carries with it this rich heritage—a legacy of excellence that continues to define
                our brand and inspire our master watchmakers to this day.
              </p>
            </div>
            <div className="relative">
              <div className="border-2 border-gold absolute -top-4 -right-4 w-full h-full"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Heritage Workshop"
                className="w-full relative z-10"
              />
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1 relative">
              <div className="border-2 border-gold absolute -top-4 -left-4 w-full h-full"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Watchmaking Process"
                className="w-full relative z-10"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">
                The Art of <span className="gold-text">Watchmaking</span>
              </h2>
              <p className="text-gray-300 mb-4">
                At CHRONOS, watchmaking is not merely a process—it is an art form that requires patience, precision, and
                passion. Our master watchmakers train for decades to perfect their craft, combining traditional
                techniques with cutting-edge technology.
              </p>
              <p className="text-gray-300 mb-4">
                Each timepiece undergoes over 500 hours of meticulous craftsmanship, from the initial design to the
                final quality control. We source only the finest materials from around the world, ensuring that every
                component meets our exacting standards.
              </p>
              <p className="text-gray-300">
                This uncompromising approach to quality is why a CHRONOS watch is not simply an accessory, but an
                heirloom—a piece of art that can be passed down through generations.
              </p>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Timeline</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A journey through the key moments that have shaped our legacy of excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold"></div>

            <div className="grid grid-cols-1 gap-16">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-black border-2 border-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-right pr-8 md:pr-16">
                    <h3 className="text-2xl font-bold gold-text mb-2">1952</h3>
                    <h4 className="text-xl font-semibold mb-2">The Beginning</h4>
                    <p className="text-gray-300">
                      Antoine Chronos establishes his watchmaking workshop in Geneva, Switzerland, creating his first
                      collection of handcrafted timepieces.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-black border-2 border-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8 md:pl-16">
                    <h3 className="text-2xl font-bold gold-text mb-2">1968</h3>
                    <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                    <p className="text-gray-300">
                      CHRONOS introduces the Executive Chronograph, revolutionizing the industry with its precision
                      movement and distinctive design for the modern businessman.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-black border-2 border-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-right pr-8 md:pr-16">
                    <h3 className="text-2xl font-bold gold-text mb-2">1985</h3>
                    <h4 className="text-xl font-semibold mb-2">Global Expansion</h4>
                    <p className="text-gray-300">
                      Following international acclaim, CHRONOS expands globally, opening flagship boutiques in New York,
                      London, and Tokyo.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-black border-2 border-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8 md:pl-16">
                    <h3 className="text-2xl font-bold gold-text mb-2">2002</h3>
                    <h4 className="text-xl font-semibold mb-2">The New Era</h4>
                    <p className="text-gray-300">
                      CHRONOS celebrates its 50th anniversary by introducing the Heritage Collection, honoring our past
                      while embracing modern watchmaking techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-black border-2 border-gold"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-right pr-8 md:pr-16">
                    <h3 className="text-2xl font-bold gold-text mb-2">Present Day</h3>
                    <h4 className="text-xl font-semibold mb-2">Continuing Legacy</h4>
                    <p className="text-gray-300">
                      Today, CHRONOS continues to set the standard for luxury timepieces, combining our rich heritage
                      with innovative designs for the modern gentleman.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HeritageStoryPage

