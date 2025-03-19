"use client"

import { useEffect, useState } from "react"

const collections = [
  {
    id: "executive",
    name: "Executive Series",
    description: "Designed for leaders who command respect in the boardroom and beyond.",
    watches: [
      {
        id: 1,
        name: "Executive Chronograph",
        description: "Precision engineering meets boardroom elegance.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$12,500",
        features: ["Swiss Automatic Movement", "42mm Case", "Sapphire Crystal", "100m Water Resistance"],
      },
      {
        id: 2,
        name: "Executive Tourbillon",
        description: "The pinnacle of watchmaking excellence for the distinguished gentleman.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$38,900",
        features: ["In-house Tourbillon Movement", "44mm Case", "Exhibition Caseback", "Alligator Strap"],
      },
      {
        id: 3,
        name: "Executive Skeleton",
        description: "Revealing the intricate mechanics that power your success.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$18,750",
        features: ["Skeleton Dial", "316L Stainless Steel", "Deployant Clasp", "Limited Edition of 500"],
      },
    ],
  },
  {
    id: "adventurer",
    name: "Adventurer Line",
    description: "For the modern explorer who conquers both urban jungles and natural wilderness.",
    watches: [
      {
        id: 4,
        name: "Adventurer GMT",
        description: "Track multiple time zones as you conquer the world.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$9,800",
        features: ["GMT Function", "Rotating Bezel", "SuperLuminova Indices", "Titanium Case"],
      },
      {
        id: 5,
        name: "Adventurer Diver",
        description: "Engineered for depths, designed for heights.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$7,500",
        features: ["300m Water Resistance", "Helium Escape Valve", "Ceramic Bezel", "Rubber Strap"],
      },
      {
        id: 6,
        name: "Adventurer Chronograph",
        description: "Precision timing for life's most challenging moments.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$11,200",
        features: ["Chronograph Function", "Tachymeter Scale", "Screw-down Crown", "Integrated Bracelet"],
      },
    ],
  },
  {
    id: "heritage",
    name: "Heritage Collection",
    description: "Timeless designs that honor our watchmaking legacy while embracing modern craftsmanship.",
    watches: [
      {
        id: 7,
        name: "Heritage Automatic",
        description: "A modern interpretation of our original 1950s design.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$8,900",
        features: ["Vintage-inspired Dial", "Domed Crystal", "Hand-finished Movement", "Leather Strap"],
      },
      {
        id: 8,
        name: "Heritage Moonphase",
        description: "Track the lunar cycle with unparalleled elegance.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$14,500",
        features: ["Moonphase Complication", "Guilloche Dial", "Blued Steel Hands", "Exhibition Caseback"],
      },
      {
        id: 9,
        name: "Heritage Perpetual Calendar",
        description: "A masterpiece of horological complexity that will never need adjustment.",
        image: "/placeholder.svg?height=600&width=600",
        price: "$32,000",
        features: ["Perpetual Calendar", "Leap Year Indicator", "18K Gold Case", "Hand-stitched Strap"],
      },
    ],
  },
]

const CollectionsPage = () => {
  const [activeCollection, setActiveCollection] = useState("executive")
  const [selectedWatch, setSelectedWatch] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleWatchClick = (watch) => {
    setSelectedWatch(watch)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const closeWatchDetail = () => {
    setSelectedWatch(null)
  }

  return (
    <main className="pt-20">
      <section className="py-16 bg-dark-gray">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collections</h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Explore our curated collections, each designed to complement the distinct facets of a powerful man's life.
            </p>
          </div>

          {selectedWatch ? (
            <div className="bg-black border border-gray-800 p-6 md:p-10 mb-16">
              <button onClick={closeWatchDetail} className="text-gold mb-6 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2">Back to Collection</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <img
                    src={selectedWatch.image || "/placeholder.svg"}
                    alt={selectedWatch.name}
                    className="w-full h-auto"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedWatch.name}</h2>
                  <p className="text-xl gold-text font-semibold mb-4">{selectedWatch.price}</p>
                  <p className="text-gray-300 mb-6">{selectedWatch.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedWatch.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-gold mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="gold-button px-8 py-3 rounded-none w-full md:w-auto">Book a Viewing</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap justify-center mb-12 gap-4">
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => setActiveCollection(collection.id)}
                    className={`px-6 py-3 border ${activeCollection === collection.id ? "border-gold text-gold" : "border-gray-700 text-gray-300"} hover:border-gold hover:text-gold transition-colors`}
                  >
                    {collection.name}
                  </button>
                ))}
              </div>

              {collections.map((collection) => (
                <div key={collection.id} className={activeCollection === collection.id ? "block" : "hidden"}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{collection.name}</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">{collection.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collection.watches.map((watch) => (
                      <div
                        key={watch.id}
                        className="watch-card bg-black border border-gray-800 group cursor-pointer"
                        onClick={() => handleWatchClick(watch)}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={watch.image || "/placeholder.svg"}
                            alt={watch.name}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                            <button className="outline-gold-button px-6 py-2 rounded-none">View Details</button>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{watch.name}</h3>
                          <p className="text-gray-400 mb-4">{watch.description}</p>
                          <p className="gold-text font-semibold">{watch.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default CollectionsPage

