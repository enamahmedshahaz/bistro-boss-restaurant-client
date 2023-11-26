import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleUpdateItem = (item) => {
    }
    const handleDeleteItem = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete: ${item.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} - has been deleted!`,
                                icon: "success"
                            });
                            refetch(); //refetch menu data
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Can't Delete Item",
                            text: `Error occurred: ${error.message}`,
                            icon: "error"
                        });
                    });
            }
        });
    }

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>

            <SectionTitle
                subHeading={"Manage All Items"}
                heading={"Hurry Up!"}
            ></SectionTitle>

            <div className="flex justify-evenly uppercase items-center">
                <p className="text-3xl">Total Items: {menu.length}</p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase">
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update Action</th>
                                <th>Delete Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <span className="loading loading-spinner loading-lg"></span>
                                    :
                                    menu.map((item, index) => <tr key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt={`img of ${item.name}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <th>
                                            <Link to={`/dashboard/updateItems/${item._id}`}>
                                                <button className="btn btn-warning">
                                                    <FaRegEdit></FaRegEdit>
                                                </button>
                                            </Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDeleteItem(item)} className="btn btn-error">
                                                <FaTrashCan></FaTrashCan>
                                            </button>
                                        </th>
                                    </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;