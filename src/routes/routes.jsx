import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Workspace from "../components/workspace/Workspace";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Cards from "../components/card/Cards";
import Layout from "../components/Layout"

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/:userID/dashboard",
        element: (
            <PrivateRoute>
                <Layout />
            </PrivateRoute>
        ),
        children: [
            {
                path:"/:userID/dashboard",
                element:<PrivateRoute><Workspace /></PrivateRoute>
            },
            // {
            //     path: "boards",
            //     element: <PrivateRoute><Workspace /></PrivateRoute>,
            // },
            {
                path: ":boardID/cards",
                element: <PrivateRoute><Cards /></PrivateRoute>,
            },
        ],
    },
]);

export default router;
