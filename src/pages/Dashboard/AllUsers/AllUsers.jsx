import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {
    useQuery
} from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            // const res = await axiosSecure.get('/users',{
            //     headers: { authorization: `Bearer ${localStorage.getItem('access-token')}` }
            // });
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });

    const handleDeleteUser = (user) => {

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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(response => {
                        // console.log(response.data);
                        if (response.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted!",
                                icon: "success"
                            });
                            refetch(); //refetch carts data
                        }
                    })
                    .catch(error => {
                        //  console.log(error);
                        Swal.fire({
                            title: "Can't Delete!",
                            text: `Error occurred: ${error.message}`,
                            icon: "error"
                        });
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Make this user as admin??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.modifiedCount) {
                            Swal.fire({
                                title: "Done!",
                                text: `${user.name} is now Admin!`,
                                icon: "success"
                            });
                            refetch(); //refetch users data
                        }
                    })
                    .catch(error => {
                        //  console.log(error);
                        Swal.fire({
                            title: "Can't set Admin role!",
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
                    <table className="table table-zebra">
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
                                    {
                                        user.role === 'admin' ? 'Admin'
                                            : <button onClick={() => handleMakeAdmin(user)} className="btn btn-warning">
                                                <FaUsers className="text-xl"></FaUsers>
                                            </button>
                                    }
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-error">
                                        <FaTrashCan className="text-xl"></FaTrashCan>
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