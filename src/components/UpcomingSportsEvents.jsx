import React, { useState } from "react";
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaRunning, FaTicketAlt } from "react-icons/fa";

const sportsEvents = [
  {
    id: 1,
    thumbnail: "https://i.ibb.co.com/M5W9ZBHw/636055765699949515-MNI-0731-Stop-The-Violence-Basketball03.webp",
    name: "Community Basketball Tournament",
    category: "Basketball",
    date: "2023-11-18",
    location: "Downtown Sports Complex, Austin",
    entryFee: "$10",
    skillLevel: "Amateur",
    teamSize: "5v5"
  },
  {
    id: 2,
    thumbnail: "https://i.ibb.co.com/fzFzdXdR/Untitled-design.jpg",
    name: "Annual 5K Charity Run",
    category: "Running",
    date: "2023-11-25",
    location: "Riverside Park, Dallas",
    entryFee: "Free",
    skillLevel: "All Levels",
    teamSize: "Individual"
  },
  {
    id: 3,
    thumbnail: "https://i.ibb.co.com/gZnyWsn0/soccer-tournament-1366x768-fp-mm-fpoff-0-0.webp",
    name: "Youth Soccer Cup",
    category: "Soccer",
    date: "2023-12-02",
    location: "Regional Soccer Field, Houston",
    entryFee: "$15",
    skillLevel: "Under-16",
    teamSize: "11v11"
  },
  {
    id: 4,
    thumbnail: "https://i.ibb.co.com/nTqdy4J/avp-facebook-og-image.jpg",
    name: "Beach Volleyball Open",
    category: "Volleyball",
    date: "2023-12-10",
    location: "Sunset Beach, Galveston",
    entryFee: "$20 per team",
    skillLevel: "Intermediate",
    teamSize: "2v2"
  },
  {
    id: 5,
    thumbnail: "https://i.ibb.co.com/DH34GF8t/NNAT0808000-Pickleball-Image-03-R2-copy-960x.jpg",
    name: "Beginner Pickleball Clinic",
    category: "Pickleball",
    date: "2023-12-15",
    location: "Community Rec Center, San Antonio",
    entryFee: "$5",
    skillLevel: "Beginner",
    teamSize: "1v1"
  }
];

const UpcomingSportsEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events
  const filteredEvents = sportsEvents.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique sport categories
  const sportCategories = ["All", ...new Set(sportsEvents.map((event) => event.category))];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">GameDay Sports Events</h1>
          <p className="text-gray-600">Find local games, tournaments, and clinics</p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search sports events..."
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sport Type Filter */}
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {sportCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <SportsEventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <FaRunning className="mx-auto text-gray-400 text-5xl mb-4" />
            <p className="text-gray-500 text-lg">No events found. Try another search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Sports Event Card Component
const SportsEventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
      {/* Thumbnail with sport category overlay */}
      <div className="relative">
        <img
          src={event.thumbnail}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          {event.category}
        </span>
      </div>

      {/* Event Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.name}</h3>
        
        {/* Sport-specific metadata */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded mr-2">{event.skillLevel}</span>
          <span className="bg-gray-100 px-2 py-1 rounded">{event.teamSize}</span>
        </div>

        {/* Core details */}
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-green-500" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-green-500" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center font-medium">
            <FaTicketAlt className="mr-2 text-green-500" />
            <span>{event.entryFee === "Free" ? "Free Entry" : `Entry Fee: ${event.entryFee}`}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300">
            View Details
          </button>
          <button className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-300">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSportsEvents;