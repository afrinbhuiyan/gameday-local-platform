import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <ClipLoader 
      color="#93e77a"
      size={50}
      speedMultiplier={0.8}
    />
  </div>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
