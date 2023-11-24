import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {
    useQuery
} from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });

    const handleDelete = (id) => {

        console.log('Delete user id: ', id);
    }



    return (
        <div>
            <SectionTitle
                subHeading={"Manage All Users"}
                heading={"How many?"}
            ></SectionTitle>

            <div>
                <div className="flex justify-evenly uppercase items-center">
                    <p className="text-3xl">Total Users: {users.length}</p>
                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="uppercase">
                                <th>
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    Role
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-error">
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

export default AllUsers;