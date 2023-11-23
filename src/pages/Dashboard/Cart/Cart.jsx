import { FaRecycle, FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);


    return (
        <div>
            <SectionTitle
                subHeading={"My Cart"}
                heading={"Add more?"}
            ></SectionTitle>

            <div className="flex justify-evenly">
                <p className="text-4xl">Total Items: {cart.length}</p>
                <p className="text-4xl">Total Price: {totalPrice.toFixed(2)}</p>
                <button className="btn btn-warning">Pay</button>
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
                                    {index+1}
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
                                    <button className="btn btn-error">
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