import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark-gray py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gold-text mb-4 font-serif">CHRONOS</h3>
            <p className="text-gray-400 mb-4">
              Crafting timepieces for the modern gentleman. Elegance, precision, and power on your wrist.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">
                  Executive Series
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">
                  Adventurer Line
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">
                  Heritage Collection
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-400 hover:text-gold transition-colors">
                  Limited Editions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/heritage" className="text-gray-400 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/heritage" className="text-gray-400 hover:text-gold transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p>123 Luxury Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">+1 (800) CHRONOS</p>
              <p>info@chronoswatches.com</p>
            </address>
          </div>
        </div>

        <div className="section-divider w-full my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CHRONOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

