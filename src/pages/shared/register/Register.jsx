import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  const { createUser, updatePhoto } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,) => {
    const { email, password,name,image } = data;
    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters!");
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      return toast.error("First Characters uppercase and Lowercase Will be ");
    }
    createUser(email, password)
      .then((result) => {
        updatePhoto(name,image)
        .then(()=>{
          navigate(from)
         

        })
        .catch(error =>console.log(error))
        console.log(result.user);
        toast.success("Your Registration Is Successful");
        
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Email-already-in-use!");
      });

    console.log("show data", data);
  };

  return (
    <div className=" p-4">
      <div className="p-4 bg-gray-300 max-w-4xl mx-auto rounded-md shadow-lg">
        <h1 className="text-3xl text-center my-5 font-poppins font-semibold ">
          Please Register
        </h1>
        <div className="divider "></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-3/4 lg:w-[770px] mx-auto "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins font-semibold">
                Photo Url
              </span>
            </label>
            <input
              type="text"
              name="image" 
              placeholder="Photo"
              className="input input-bordered"
              required
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>
          <div className="form-control mt-4">
            <h1 className="font-poppins font-semibold">Password</h1>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                className="grow "
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <span>
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="bg-primary py-2 rounded-md text-xl text-white">Register</button>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </form>
        <p className="text-center my-6">
          Already Have An Account ?{" "}
          <Link className="btn-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
