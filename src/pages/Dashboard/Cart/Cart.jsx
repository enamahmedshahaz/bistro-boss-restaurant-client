import { FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {

    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        //console.log('Delete: ', id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(response => {
                        // console.log(response.data);
                        if (response.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted!",
                                icon: "success"
                            });

                            refetch(); //refetch carts data
                        }
                    })
                    .catch(error => {
                        //  console.log(error);
                        Swal.fire({
                            title: "Can't Delete Item ",
                            text: `Error occurred: ${error.message}`,
                            icon: "error"
                        });
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeading={"My Cart"}
                heading={"Add more?"}
            ></SectionTitle>

            <div className="flex justify-evenly uppercase items-center">
                <p className="text-3xl">Total Items: {cart.length}</p>
                <p className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</p>
                <button className="btn btn-warning btn-md">Pay</button>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error">
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

export default Cart;