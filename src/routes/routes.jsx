import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
// import Layout from "../components/Layout";
import Workspace from "../components/Workspace";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Cards from "../components/Cards";
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
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <Layout />
            </PrivateRoute>
        ),
        children: [
            {
                path: "boards",
                element: <PrivateRoute><Workspace /></PrivateRoute>,
            },
            {
                path: "cards",
                element: <PrivateRoute><Cards /></PrivateRoute>,
            },
        ],
    },
]);

export default router;
