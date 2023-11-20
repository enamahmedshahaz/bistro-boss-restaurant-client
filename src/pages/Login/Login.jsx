import { useEffect, useRef, useState } from 'react';
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    // LoadCanvasTemplateNoReload,
    validateCaptcha
} from 'react-simple-captcha';

import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';



const Login = () => {

    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6, 'white', 'black');
    }, [])

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }


    const handleValidateCaptcha = () => {
        const captchaText = captchaRef.current.value;

        if (validateCaptcha(captchaText)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className="border-2 p-4 border-red-600 rounded-lg w-1/2">
                            <h2 className=" text-2xl font-bold text-amber-600">Enter this sample info: </h2>
                            <p> <span className="font-bold">Email: </span>john@gmail.com</p>
                            <p> <span className="font-bold">Password: </span>John@1234</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} name="userCaptchaInput" type="text" placeholder="Enter above captcha text" className="input input-bordered" required />
                                <input onClick={handleValidateCaptcha} className="btn btn-outline btn-sm mt-3" value="Validate" />

                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Sign In" />
                            </div>
                        </form>

                        <div className="card-body text-center -mt-10">
                            <p>New Here? Please  <Link className='font-bold text-blue-700' to="/register">Register</Link> </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;