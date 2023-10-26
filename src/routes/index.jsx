import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import NotFound from "../pages/notFound";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/explore',
        element: <Explore/>
    },
    {
        path: '/notifications',
        element: <Notification/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default routes