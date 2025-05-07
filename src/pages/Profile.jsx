import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const [editUser, setEditUser] = useState(false);
  const [success, setSuccess] = useState(false);

  // Color palette
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setEditUser(false);
      })
      .catch((error) => {
        console.error("Update failed:", error.message);
      });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: colors.primary }}></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Helmet>
        <title>GameDay | Profile</title>
      </Helmet>
      <div className="max-w-md mx-auto p-6">
        <div 
          className="rounded-xl shadow-sm p-6 mt-48"
          style={{ backgroundColor: colors.card }}
        >
          <h1 
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: colors.primaryDark }}
          >
            My Profile
          </h1>

          {!editUser ? (
            <div className="space-y-6">
              <div className="flex justify-center">
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4"
                  style={{ borderColor: colors.primaryLight }}
                />
              </div>
              
              <div className="text-center">
                <h2 
                  className="text-xl font-semibold"
                  style={{ color: colors.primaryDark }}
                >
                  {user.displayName || "No name set"}
                </h2>
                <p style={{ color: colors.neutral }}>{user.email}</p>
              </div>

              <button
                onClick={() => setEditUser(true)}
                className="w-full mt-4 px-4 py-3 rounded-lg font-medium transition-all hover:shadow"
                style={{ 
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {success && (
                <div 
                  className="p-3 rounded-lg text-center"
                  style={{ 
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primaryDark,
                    border: `1px solid ${colors.primary}`
                  }}
                >
                  Profile updated successfully!
                </div>
              )}

              <div>
                <label 
                  className="block mb-2 font-medium"
                  style={{ color: colors.primaryDark }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="displayName"
                  defaultValue={user.displayName || ""}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: colors.neutral,
                    focusRingColor: colors.primary
                  }}
                  required
                />
              </div>

              <div>
                <label 
                  className="block mb-2 font-medium"
                  style={{ color: colors.primaryDark }}
                >
                  Profile Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  defaultValue={user.photoURL || ""}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: colors.neutral,
                    focusRingColor: colors.primary
                  }}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="flex space-x-3 mt-8">
                <button
                  type="button"
                  onClick={() => setEditUser(false)}
                  className="flex-1 px-4 py-3 rounded-lg font-medium transition-all hover:shadow"
                  style={{ 
                    backgroundColor: `${colors.neutral}20`,
                    color: colors.neutral
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-lg font-medium transition-all hover:shadow disabled:opacity-70"
                  style={{ 
                    backgroundColor: loading ? `${colors.primary}80` : colors.primary,
                    color: 'white'
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : "Save Changes"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;