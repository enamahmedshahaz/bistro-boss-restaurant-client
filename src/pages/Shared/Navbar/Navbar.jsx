import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign-out successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error while Sign-out!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    const navLinks = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/menu">Menu</Link> </li>
        <li> <Link to="/order/salad">Order</Link> </li>

        {
            user ?
                <>
                    <li>  <button onClick={handleLogout} className="btn btn-ghost">Logout</button> </li>
                </>
                :
                <><li> <Link to="/login">Login</Link> </li></>
        }

        <li>
            <Link to="/dashboard/cart">
                <FaCartShopping className="text-2xl" />
                <div className="badge badge-secondary">{cart.length}</div>
            </Link>
        </li>

    </>;

    return (
        <div className="navbar fixed z-10 max-w-screen-xl  bg-opacity-30 bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
               {
                 user && 
                 <p className="btn">{user?.email}</p>
               }
            </div>
        </div>

    );
};

export default Navbar;