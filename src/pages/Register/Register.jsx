import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedOnUser = result.user;
                console.log(loggedOnUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //save user data to database
                        const user = {
                            name: data.name,
                            email: data.email,
                        };
                        axiosPublic.post('/users', user)
                            .then(res => {
                                if (res.data.insertedId) {
                                    // clear all input values in the form
                                    // e.target.reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Registration successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/");
                                }
                            }).catch(error => {
                                Swal.fire({
                                    title: "Registration failed!",
                                    text: `Error: ${error.message}`,
                                    icon: "error"
                                });
                            })
                    }).catch((error) => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Registration Failed",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    //console.log(watch("name")) 

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className="border-2 p-4 border-red-600 rounded-lg w-1/2">
                            <h2 className=" text-2xl font-bold text-amber-600">Enter this sample info: </h2>
                            <p> <span className="font-bold">Name: </span>John Doe</p>
                            <p> <span className="font-bold">PhotoUrl: </span> https://i.ibb.co/VQc925X/original.png</p>
                            <p> <span className="font-bold">Email: </span>john@gmail.com</p>
                            <p> <span className="font-bold">Password: </span>John@1234</p>
                        </div>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter Name" className="input input-bordered" />

                                {errors.name?.type === "required" && (
                                    <p className="text-red-600">Name is required</p>
                                )}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Enter URL of your photo" className="input input-bordered" />
                                {errors.photoURL?.type === "required" && (
                                    <p className="text-red-600">Photo URL is required</p>
                                )}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} name="email" placeholder="Enter email" className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required</p>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <p className="text-red-600">Email is not in valid format</p>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ })} name="password" type="password" placeholder="Enter password" className="input input-bordered" />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password should be min 6 characters long</p>
                                )}

                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password should be max 20 characters long</p>
                                )}

                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">At least one lowercase letter, one uppercase, one special char, one digit</p>
                                )}

                            </div>

                            <div className="form-control ">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>

                        <div className="card-body text-center -mt-14">
                            <p>Already have account? Please  <Link className='font-bold text-blue-700' to="/login">Login</Link> </p>
                        </div>

                        <div className='mb-5 -mt-5'>
                            <div className='divider'>Or Sign up with</div>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;