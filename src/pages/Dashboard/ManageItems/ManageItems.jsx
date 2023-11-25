import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const ManageItems = () => {

    const [menu, loading] = useMenu();

    const handleUpdateItem = (item) => {
    }
    const handleDeleteItem = (item) => {
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
                            {menu.map((item, index) => <tr key={item._id}>
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
                                    <button onClick={() => handleUpdateItem(item)} className="btn btn-warning">
                                        <FaRegEdit></FaRegEdit>
                                    </button>
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