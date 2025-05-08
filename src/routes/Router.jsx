import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import EventDetails from "../pages/EventDetails";
import Features from "../components/Features";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import { ClipLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../events.json"),
        hydrateFallbackElement:  <div className="flex justify-center items-center h-screen">
        <ClipLoader 
          color="#93e77a"
          size={50}
          speedMultiplier={0.8}
        />
      </div>,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/eventDetails/:id",
        element: (
          <PrivateRoute>
            <Helmet><title>GameDay | EventDetails</title></Helmet>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../events.json"),
        hydrateFallbackElement: <div className="flex justify-center items-center h-screen">
        <ClipLoader 
          color="#93e77a"
          size={50}
          speedMultiplier={0.8}
        />
      </div>,
      },
      {
        path: "/features",
        // Component: Features,
        element: <div><Helmet><title>GameDay | Features</title></Helmet><Features></Features></div>
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        loader: () => fetch("../events.json"),
        hydrateFallbackElement: <div className="flex justify-center items-center h-screen">
        <ClipLoader 
          color="#93e77a"
          size={50}
          speedMultiplier={0.8}
        />
      </div>,
      },
      {
        path: "/forgotPassword",
        Component: ForgotPassword,
      },
    ],
  },
]);
