"use client"

import { useState } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    quote:
      "My CHRONOS watch isn't just a timepiece—it's a statement of intent. In the boardroom, it commands respect without saying a word.",
    author: "James Richardson",
    title: "CEO, Global Ventures",
  },
  {
    id: 2,
    quote:
      "From scaling mountains to closing deals, my Adventurer has been with me through it all. It's not just reliable—it's part of my identity.",
    author: "Michael Chen",
    title: "Serial Entrepreneur",
  },
  {
    id: 3,
    quote:
      "The craftsmanship is unparalleled. When you wear a CHRONOS, you're wearing generations of expertise on your wrist.",
    author: "Alexander Wright",
    title: "Investment Banker",
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dark-gray to-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-20">
            <FaQuoteLeft size={80} className="text-gold" />
          </div>

          <div className="bg-gray p-8 md:p-12 relative z-10">
            <div className="text-center">
              <p className="text-xl md:text-2xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold gold-text">{testimonials[currentIndex].author}</h4>
              <p className="text-gray-400">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-gold" : "bg-gray-600"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

