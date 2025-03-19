import { FaClock, FaGem, FaCog, FaAward } from "react-icons/fa"

const features = [
  {
    icon: <FaClock size={36} className="gold-text" />,
    title: "Swiss Movement",
    description: "Each timepiece houses a precision Swiss movement, the heart of exceptional watchmaking.",
  },
  {
    icon: <FaGem size={36} className="gold-text" />,
    title: "Premium Materials",
    description: "We source only the finest materials - from 316L stainless steel to sapphire crystal.",
  },
  {
    icon: <FaCog size={36} className="gold-text" />,
    title: "Master Craftsmanship",
    description: "Our master watchmakers bring decades of experience to every piece they assemble.",
  },
  {
    icon: <FaAward size={36} className="gold-text" />,
    title: "Limited Production",
    description: "We produce limited quantities to ensure exclusivity and meticulous attention to detail.",
  },
]

const CraftmanshipSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uncompromising <span className="gold-text">Craftsmanship</span>
            </h2>
            <p className="text-gray-300 mb-8">
              At CHRONOS, we believe that a timepiece is more than an accessory—it's a statement of character. Our
              watches are crafted with meticulous attention to detail, combining traditional watchmaking techniques with
              modern innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="border-2 border-gold absolute -top-4 -left-4 w-full h-full"></div>
            <img
              src="/placeholder.svg?height=800&width=600"
              alt="Watch Craftsmanship"
              className="w-full relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftmanshipSection

