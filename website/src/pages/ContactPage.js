"use client"

import { useEffect, useState } from "react"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <main className="pt-20">
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Schedule a private consultation or visit one of our boutiques to experience the CHRONOS difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              {formStatus.submitted ? (
                <div className="bg-gray p-8 border border-gold">
                  <h3 className="text-xl font-bold gold-text mb-4">Thank You</h3>
                  <p className="text-gray-300">
                    Your message has been received. A CHRONOS representative will contact you within 24 hours to arrange
                    your private consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray border border-gray-700 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray border border-gray-700 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray border border-gray-700 focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block mb-2 font-medium">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray border border-gray-700 focus:border-gold focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="Executive Series">Executive Series</option>
                      <option value="Adventurer Line">Adventurer Line</option>
                      <option value="Heritage Collection">Heritage Collection</option>
                      <option value="Private Consultation">Private Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray border border-gray-700 focus:border-gold focus:outline-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="gold-button px-8 py-3 rounded-none">
                    Submit Request
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Visit Our Flagship Boutique</h2>

              <div className="bg-black p-8 border border-gray-800 mb-8">
                <div className="flex items-start mb-6">
                  <FaMapMarkerAlt className="text-gold text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-gray-300">123 Luxury Avenue</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <FaPhone className="text-gold text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (800) CHRONOS</p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <FaEnvelope className="text-gold text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-300">info@chronoswatches.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-gold text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 10am - 7pm</p>
                    <p className="text-gray-300">Saturday: 11am - 6pm</p>
                    <p className="text-gray-300">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 h-80">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Boutique Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage

