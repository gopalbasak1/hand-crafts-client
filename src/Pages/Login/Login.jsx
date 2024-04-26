import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react"; // Import useState

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContextProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                    toast.success;
                } else {
                    toast.error('Email or password is incorrect.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(error => {
                console.error('Error signing in:', error);
                toast.error('An error occurred. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    return (
        <div className="w-[420px] md:w-full">
            
            <div className="my-10">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-10">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}  placeholder="password" name="password" className="input input-bordered" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-600 font-semibold">This field is required</span>}
                                <span 
                                    onClick={()=> setShowPassword(!showPassword)}
                                    className="left-72 mr-0 absolute top-[54px]">
                                        {
                                            showPassword ? 
                                            <FaEye /> : <FaEyeSlash/> 
                                            }
                                    </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="">
                            <SocialLogin/>
                        </div>
                        <div className="text-center pb-5">
                            <p className="font-medium">Do not have an account? <Link to="/register" className="font-semibold underline text-blue-600">Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
