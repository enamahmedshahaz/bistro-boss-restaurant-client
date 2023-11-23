import { FaCalendar, FaCartShopping, FaHouse, FaList, FaStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">

            {/* dashboard side bar */}
            <div className="w-64 bg-yellow-500 min-h-screen">
                <ul className="menu flex flex-col gap-2 uppercase">

                    <li ><NavLink to="/dashboard/userHome">
                        <FaHouse></FaHouse> User Home</NavLink></li>

                    <li><NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar> Reservation </NavLink></li>

                    <li><NavLink to="/dashboard/cart">
                        <FaCartShopping></FaCartShopping>My Cart</NavLink></li>

                    <li><NavLink to="/dashboard/review">
                        <FaStar></FaStar> Add Review</NavLink></li>

                    <li><NavLink to="/dashboard/bookings">
                        <FaList></FaList> My Bookings</NavLink></li>

                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;