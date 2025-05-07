import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const colors = {
    primary: "#4CAF50",     
    primaryLight: "#81C784",
    primaryDark: "#388E3C", 
    secondary: "#FFC107",   
    accent: "#2196F3",      
    neutral: "#607D8B",     
    background: "#F5F7F6",  
    card: "#FFFFFF",        
  };

  const stats = [
    { name: "Events Attended", value: 12, color: colors.primary },
    { name: "Upcoming Events", value: 3, color: colors.primaryLight },
    { name: "Friends", value: 8, color: colors.secondary },
  ];

  const activityData = [
    { name: "Jan", events: 3 },
    { name: "Feb", events: 5 },
    { name: "Mar", events: 2 },
    { name: "Apr", events: 6 },
    { name: "May", events: 4 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold" style={{ color: colors.primaryDark }}>
            Player Dashboard
          </h1>
          <p className="text-lg mt-2" style={{ color: colors.neutral }}>
            Welcome back, <span className="font-semibold" style={{ color: colors.primary }}>{user?.displayName || "Player"}</span>!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="rounded-xl shadow-sm p-6 transition-all hover:shadow-md"
              style={{ 
                backgroundColor: colors.card,
                borderTop: `4px solid ${stat.color}`
              }}
            >
              <h3 className="text-lg font-medium mb-2" style={{ color: colors.neutral }}>
                {stat.name}
              </h3>
              <p className="text-3xl font-bold" style={{ color: colors.primaryDark }}>
                {stat.value}
              </p>
              <div 
                className="w-full h-2 mt-4 rounded-full"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    width: `${Math.min(100, stat.value * 10)}%`,
                    backgroundColor: stat.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div 
            className="rounded-xl shadow-sm p-6"
            style={{ backgroundColor: colors.card }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: colors.primaryDark }}>
              Activity Distribution
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {stats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div 
            className="rounded-xl shadow-sm p-6"
            style={{ backgroundColor: colors.card }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: colors.primaryDark }}>
              Monthly Activity
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <XAxis 
                    dataKey="name" 
                    stroke={colors.neutral}
                  />
                  <YAxis 
                    stroke={colors.neutral}
                  />
                  <Tooltip />
                  <Bar 
                    dataKey="events" 
                    fill={colors.primary}
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            className="rounded-xl shadow-sm p-6"
            style={{ backgroundColor: colors.card }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: colors.primaryDark }}>
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link
                to="/events"
                className="block w-full px-4 py-3 text-center rounded-lg transition-all font-medium hover:shadow"
                style={{ 
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
              >
                Find Events
              </Link>
              <Link
                to="/profile"
                className="block w-full px-4 py-3 text-center rounded-lg transition-all font-medium hover:shadow"
                style={{ 
                  backgroundColor: colors.secondary,
                  color: 'rgba(0, 0, 0, 0.87)'
                }}
              >
                Edit Profile
              </Link>
              <Link
                to="/friends"
                className="block w-full px-4 py-3 text-center rounded-lg transition-all font-medium hover:shadow"
                style={{ 
                  backgroundColor: colors.accent,
                  color: 'white'
                }}
              >
                View Friends
              </Link>
            </div>
          </div>

          <div 
            className="rounded-xl shadow-sm p-6 lg:col-span-2"
            style={{ backgroundColor: colors.card }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: colors.primaryDark }}>
              Recent Activity
            </h2>
            <ul className="space-y-4">
              <li className="pb-4 border-b" style={{ borderColor: `${colors.neutral}20` }}>
                <div className="flex items-center">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${colors.primary}20` }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke={colors.primary} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primaryDark }}>
                      Registered for "Weekend Soccer Tournament"
                    </p>
                    <p className="text-sm" style={{ color: colors.neutral }}>
                      2 days ago
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-4 border-b" style={{ borderColor: `${colors.neutral}20` }}>
                <div className="flex items-center">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${colors.primaryLight}20` }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke={colors.primaryLight} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primaryDark }}>
                      Attended "Friday Night Basketball"
                    </p>
                    <p className="text-sm" style={{ color: colors.neutral }}>
                      1 week ago
                    </p>
                  </div>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex items-center">
                  <div 
                    className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke={colors.secondary} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primaryDark }}>
                      Won "Tennis Championship"
                    </p>
                    <p className="text-sm" style={{ color: colors.neutral }}>
                      2 weeks ago
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;