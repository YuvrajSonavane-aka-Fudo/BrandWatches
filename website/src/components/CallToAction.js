import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section className="py-20 bg-black relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Time Waits For <span className="gold-text">No Man</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Schedule a private consultation with our watch specialists to find the timepiece that defines your legacy.
          </p>
          <Link to="/contact" className="gold-button px-10 py-4 rounded-none inline-block text-lg font-medium">
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

