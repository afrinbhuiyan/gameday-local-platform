import { createBrowserRouter } from 'react-router';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import EventDetails from '../pages/EventDetails';
import Features from '../components/Features';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                index: true,
                Component: Home,
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
                path: "/eventDetails",
                Component: EventDetails,
            },
            {
                path: "/features",
                Component: Features
            }
        ]
    }
]);