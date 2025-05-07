import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRunning,
  FaTicketAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { IoFilter } from "react-icons/io5";
import {
  MdSportsSoccer,
  MdSportsBasketball,
  MdSportsBaseball,
  MdSportsVolleyball,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const sportIcons = {
  Soccer: <MdSportsSoccer className="text-green-500" />,
  Basketball: <MdSportsBasketball className="text-orange-500" />,
  Baseball: <MdSportsBaseball className="text-blue-500" />,
  Volleyball: <MdSportsVolleyball className="text-red-500" />,
};

const UpcomingSportsEvents = ({ sportsEvents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const savedFavorites = localStorage.getItem("sportEventFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sportEventFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (eventId) => {
    if (favorites.includes(eventId)) {
      setFavorites(favorites.filter((id) => id !== eventId));
    } else {
      setFavorites([...favorites, eventId]);
    }
  };

  const filteredEvents = sportsEvents.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()


      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sportCategories = [
    "All",
    ...new Set(sportsEvents.map((event) => event.category)),
  ];
console.log(motion)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-light uppercase tracking-wider mb-8">
            Upcoming <span className="font-semibold">Events</span>
          </h1>
          <p className="text-md text-center dm-sans">
            Find and join exciting local sports activities
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search sports events..."
                className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-900 focus:ring-1 focus:border-transparent 
                transition-all duration-300 hover:border-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center gap-2 transition-colors"
            >
              <IoFilter />
              <span>Filters</span>
            </button>

            <div className="hidden md:block relative w-64">
              <select
                className="appearance-none w-full px-4 py-3 pr-10 rounded-xl border border-black shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 
                focus:border-transparent transition-all text-gray-700 hover:border-black"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {sportCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {sportCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <SportsEventCard
                  key={event.id}
                  event={event}
                  isFavorite={favorites.includes(event.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <FaRunning className="mx-auto text-gray-300 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No events found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const SportsEventCard = ({ event, isFavorite, toggleFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
    >
      <button
        onClick={() => toggleFavorite(event.id)}
        className="absolute top-3 left-3 z-10 bg-white/80 p-2 rounded-full backdrop-blur-sm"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaStar className="text-yellow-400 text-xl" />
        ) : (
          <FaRegStar className="text-gray-400 hover:text-yellow-400 text-xl transition-colors" />
        )}
      </button>

      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={event.thumbnail}
          alt={event.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute top-2 right-2 rounded-full bg-[#9ce979] text-black px-3 py-2 text-xs font-bold shadow-sm flex items-center gap-1"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: isHovered ? 1 : 0.9 }}
        >
          {sportIcons[event.category] || <MdSportsSoccer />}
          <span>{event.category}</span>
        </motion.span>
      </div>

      <div className="p-5 rounded-b-xl bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
            {event.skillLevel}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
            {event.teamSize}
          </span>
          {event.isCompetitive && (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
              Competitive
            </span>
          )}
        </div>

        <div className="space-y-3 text-gray-700 mb-4">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-3 text-green-500 flex-shrink-0" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-green-500 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center font-medium">
            <FaTicketAlt className="mr-3 text-green-500 flex-shrink-0" />
            <span>
              {event.entryFee === "Free" ? "Free Entry" : `$${event.entryFee}`}
            </span>
          </div>
        </div>
        <Link
          to={`/eventDetails/${event.id}`}
          class="relative inline-flex items-center justify-center px-10 py-2 w-full overflow-hidden font-mono font-medium tracking-tighter text-black hover:text-white bg-[#9ce979] rounded-lg group"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-96 group-hover:h-96"></span>
          <span class="relative">View More</span>
        </Link>
      </div>
      {event.isFeatured && (
        <div className="absolute top-0 right-0 w-28 overflow-hidden h-28">
          <div className="absolute top-2 right-[-34px] w-[170px] bg-yellow-400 text-gray-900 text-xs font-bold py-1 px-2 uppercase text-center rotate-45 shadow-sm">
            Featured
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default UpcomingSportsEvents;
