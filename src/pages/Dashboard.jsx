import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  // Mock data - replace with real data from your backend
  const userStats = {
    eventsAttended: 12,
    upcomingEvents: 3,
    friends: 8,
    achievements: ['First Game', 'Team Player', 'Regular Attendee']
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">
            Welcome back, {user?.displayName || 'Player'}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Activity</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Events Attended</span>
                <span className="font-bold">{userStats.eventsAttended}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Upcoming Events</span>
                <span className="font-bold">{userStats.upcomingEvents}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Friends</span>
                <span className="font-bold">{userStats.friends}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/events"
                className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center"
              >
                Find New Events
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-center"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
          <div className="flex flex-wrap gap-2">
            {userStats.achievements.map((achievement, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Activity (Mock) */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <p className="text-gray-600">You registered for "Weekend Soccer Tournament"</p>
              <p className="text-sm text-gray-400">2 days ago</p>
            </li>
            <li className="border-b pb-2">
              <p className="text-gray-600">You attended "Friday Night Basketball"</p>
              <p className="text-sm text-gray-400">1 week ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;