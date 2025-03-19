import { Link } from "react-router-dom"

const watches = [
  {
    id: 1,
    name: "Executive Chronograph",
    description: "Precision engineering meets boardroom elegance.",
    image: "/placeholder.svg?height=600&width=600",
    price: "$12,500",
  },
  {
    id: 2,
    name: "Adventurer Automatic",
    description: "Built for the modern explorer, from mountains to meetings.",
    image: "/placeholder.svg?height=600&width=600",
    price: "$8,900",
  },
  {
    id: 3,
    name: "Heritage Tourbillon",
    description: "A legacy of craftsmanship passed through generations.",
    image: "/placeholder.svg?height=600&width=600",
    price: "$24,750",
  },
]

const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Our signature timepieces embody the essence of masculine power and refined taste. Each watch is meticulously
            crafted to become an extension of your identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <div key={watch.id} className="watch-card bg-black border border-gray-800 group">
              <div className="relative overflow-hidden">
                <img
                  src={watch.image || "/placeholder.svg"}
                  alt={watch.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Link to={`/collections`} className="outline-gold-button px-6 py-2 rounded-none">
                    View Details
                  </Link>
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

        <div className="text-center mt-12">
          <Link to="/collections" className="outline-gold-button px-8 py-3 rounded-none inline-block">
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection

