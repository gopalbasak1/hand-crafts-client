import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { AuthContext } from "../../Context/AuthContextProvider";
import toast from "react-hot-toast";


const Register = () => {
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    console.log(user);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const from = '/';
    console.log(createUser);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        const { email, password, name, image } = data;
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
            return;
        }
    
        createUser(email, password, name, image)
            .then(() => {
                updateUserProfile(name, image)
                    .then(() => {
                        navigate(from);
                        toast.success('Registration Successful', {
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
            })
            .catch(error => {
                console.error(error)
            });
    };
    

    return (
        <div>

            <div className="w-[420px] md:w-full">
            <div className="my-10">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-10">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-600 font-semibold">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="photo url" name="image" className="input input-bordered" {...register("image")} />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"}  placeholder= "password" name="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span
                        className="text-red-600 font-semibold">This field is required</span>}
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <div className="text-center pb-5">
                    <p className="font-medium">Already have an account? <Link to="/login" className="font-semibold underline text-blue-600">Login</Link> </p>
                </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;
