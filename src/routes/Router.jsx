import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import EventDetails from "../pages/EventDetails";
import Features from "../components/Features";
import PrivateRoute from "../provider/PrivateRoute";

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
        hydrateFallbackElement: <p>Loading...</p>,
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
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
      },
      {
        path: "/features",
        Component: Features,
      },
    ],
  },
]);
