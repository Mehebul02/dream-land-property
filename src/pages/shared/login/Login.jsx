import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialPage from "../../socialpage/SocialPage";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate(location?.state ? location.state :'/');
        navigate(from)
      })
      .catch((error) => {
        toast.error("Incorrect Password !")
        console.log(error);
        
      });

    console.log("login", data);
  };

  return (
    <div>
      <Helmet>
        <title>Login-Dream Land</title>
      </Helmet>
      <div className="p-4 bg-gray-300 max-w-4xl mx-auto rounded-md shadow-lg">
        <h1 className="text-3xl text-center my-10">Please Login Now !</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-3/4 lg:w-[770px] mx-auto "
        >
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
          <div className="form-control">
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
            <button className="bg-primary py-2 rounded-md text-xl text-white">
              Login
            </button>
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </form>
        <p className="text-center my-6">
          Dont’t Have An Account ?{" "}
          <Link className="btn-link" to="/register">
            Register
          </Link>
        </p>
        <div className="text-center">
          <SocialPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
