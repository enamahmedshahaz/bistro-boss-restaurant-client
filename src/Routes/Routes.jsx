import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:category",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>,
            },
            {
                path: "allUsers",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "addItems",
                element: <AdminRoutes> <AddItems></AddItems> </AdminRoutes>
            },
            {
                path: "manageItems",
                element: <AdminRoutes> <ManageItems></ManageItems> </AdminRoutes>
            },
            {
                path: "updateItems/:id",
                element: <AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },

        ],
    },
])


/*
Page level security:
---------------------
1. do not show the link to those user who should not see the link
2. even if they gets the link, do not allow them to visit the link
3. do not allow user to access the api check admin in the server as well (verifyAdmin)
*/