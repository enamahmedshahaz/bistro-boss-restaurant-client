import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


const Register = () => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    //console.log(watch("name")) 

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" type="password" placeholder="Enter password" className="input input-bordered" />

                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}

                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password should be min 6 characters long</p>
                            )}

                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password should be max 20 characters long</p>
                            )}

                        </div>

                        <div className="form-control ">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>

                    <div className="card-body text-center -mt-10">
                        <p>Already have account? Please  <Link className='font-bold text-blue-700' to="/login">Login</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;