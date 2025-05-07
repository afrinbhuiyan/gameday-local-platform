import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed with:", email);
    toast.success("Subscribed successfully!");
    e.target.reset();
  };

  return (
    <footer className="bg-black text-gray-300 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 playWrite">
                GameDay Local
              </span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-md">
              Your premier destination for local sports events and community games. 
              Find, join, and organize sports activities in your area.
            </p>
            <Link 
              to="/events" 
              className="inline-block bg-[#9ce979] text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-[#83b66b] transition"
            >
              Explore Events
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-white transition">
                    All Events
                  </Link>
                </li>
                <li>
                  <Link to="/News" className="hover:text-white transition">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-white transition">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-white transition">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Newsletter Subscription
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest events and offers
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#9ce979]"
                required
              />
              <button
                type="submit"
                className="bg-[#9ce979] hover:bg-[#83b66b] text-gray-900 px-4 py-2 rounded-r-md transition font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} GameDay Local. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#9ce979] transition"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#9ce979] transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-[#9ce979] transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;