import { FaBook, FaCalendar, FaCartShopping, FaHouse, FaHouseChimney, FaList, FaShop, FaSpoon, FaStar, FaUser, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();

    //Todo: 
    const isAdmin = true;

    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-64 bg-yellow-500 min-h-screen">
                <ul className="menu flex flex-col gap-2 uppercase">

                    {isAdmin ?
                        <>
                        {/* Menu links for Admin Users */}
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHouse></FaHouse> Admin Home</NavLink></li>

                            <li><NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>Add Items</NavLink></li>

                            <li><NavLink to="/dashboard/manageItems">
                                <FaSpoon></FaSpoon>Manage Items</NavLink></li>

                            <li><NavLink to="/dashboard/manageBookings">
                                <FaBook></FaBook>Manage Bookings</NavLink></li>

                            <li><NavLink to="/dashboard/allUsers">
                                <FaUsers></FaUsers>All Users</NavLink></li>
                        </>
                        :
                        <>  
                         {/* Menu links for Normal Users */}
                        <li ><NavLink to="/dashboard/userHome">
                            <FaHouse></FaHouse> User Home</NavLink></li>

                            <li><NavLink to="/dashboard/reservation">
                                <FaCalendar></FaCalendar> Reservation </NavLink></li>

                            <li><NavLink to="/dashboard/cart">
                                <FaCartShopping></FaCartShopping>My Cart ({cart.length})</NavLink></li>

                            <li><NavLink to="/dashboard/review">
                                <FaStar></FaStar> Add Review</NavLink></li>

                            <li><NavLink to="/dashboard/bookings">
                                <FaList></FaList> My Bookings</NavLink></li>
                        </>
                    }



                    {/* Shared Menu Links for all*/}
                    <div className="divider"></div>

                    <li><NavLink to="/">
                        <FaHouseChimney></FaHouseChimney> Home</NavLink></li>

                    <li><NavLink to="/menu">
                        <FaList></FaList> Menu</NavLink></li>

                    <li><NavLink to="/order/salad">
                        <FaShop></FaShop> Shop</NavLink></li>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;