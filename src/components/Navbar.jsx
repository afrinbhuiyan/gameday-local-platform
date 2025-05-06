import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { motion } from "framer-motion";
console.log(motion);
import {
  FaVolleyballBall,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 py-5 px-3 transition-all ${
              isActive
                ? "bg-[#93e77a] text-black"
                : "text-white hover:bg-[#93e77a] hover:text-black"
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/features"
          className={({ isActive }) =>
            `flex items-center gap-2 py-5 px-3 transition-all ${
              isActive
                ? "bg-[#93e77a] text-black"
                : "text-white hover:bg-[#93e77a] hover:text-black"
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Features</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `flex items-center gap-2 py-5 px-3 transition-all ${
              isActive
                ? "bg-[#93e77a] text-black"
                : "text-white hover:bg-[#93e77a] hover:text-black"
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>News</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 py-5 px-3 transition-all ${
              isActive
                ? "bg-[#93e77a] text-black"
                : "text-white hover:bg-[#93e77a] hover:text-black"
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 py-5 px-3 transition-all ${
              isActive
                ? "bg-[#93e77a] text-black"
                : "text-white hover:bg-[#93e77a] hover:text-black"
            }`
          }
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>My Profile</span>
        </NavLink>
      </li>
      {user && (
        <li className="md:hidden">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-gray-100"
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-black top-0 z-50">
      <div className="container lg:px-24 mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <FaVolleyballBall className="text-[#ffffff] text-3xl" />
              <span className="text-xl font-bold text-[#ffffff] playWrite">
                GameDay Local
              </span>
            </Link>
          </div>

          <ul className="hidden md:flex items-center ml-10">{navLinks}</ul>

          <div className="flex items-center">
            {user ? (
              <>
                <div className="hidden md:block relative group">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    <div className="relative w-8">
                      <img
                        className="h-8 w-8 rounded-full object-cover border-2 border-green-500"
                        src={
                          user.photoURL ||
                          "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY="
                        }
                        alt={user.displayName || "User"}
                      />
                      <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-500"></span>
                    </div>
                    <span className="text-sm font-medium text-white">
                      {user.displayName || "Profile"}
                    </span>
                  </button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Sign out
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="bg-[#9ce979] hover:bg-[#83b66b] font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 dm-sans lg:flex items-center ml-3 hidden"
                >
                  <FaSignOutAlt className="mr-2" />
                  Sign out
                </motion.button>

                {/* Mobile menu button */}
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden ml-4 p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
                >
                  <FaBars className="text-xl" />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hidden lg:flex">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#9ce979] hover:bg-[#83b66b] font-bold py-2 px-10 rounded-full text-sm transition-all duration-300 dm-sans"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link
                  to="/login"
                  className="md:hidden ml-4 p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
                >
                  <FaUser className="text-xl" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="px-2 py-3 space-y-2">
          {navLinks}
          {!user && (
            <li>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser className="text-lg" />
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
