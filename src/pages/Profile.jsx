import { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile, loading } = useContext(AuthContext);
  const [editUser, setEditUser] = useState(false);
  const [success, setSuccess] = useState(false);

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
    return <div>Loading user data...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>

      {!editUser ? (
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              src={
                user.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              {user.displayName || "No name set"}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={() => setEditUser(true)}
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Profile updated successfully!
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="displayName"
              defaultValue={user.displayName || ""}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Profile Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              defaultValue={user.photoURL || ""}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setEditUser(false)}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
