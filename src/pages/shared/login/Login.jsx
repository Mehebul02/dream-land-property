
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import SocialPage from "../../socialpage/SocialPage";
const Login = () => {
 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => {
    //     const {email,password} = data
    //     logInUser(email,password)
    //    .then(result =>{
    //     console.log(result.user)
    //    })
    //    .catch(error =>{
    //     console.log(error)

    //    })
    console.log('login',data)
    
    }
  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-center my-10">Please Login Now !</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-700">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-700">This field is required</span>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center my-6">
          Dont’t Have An Account ?{" "}
          <Link className="btn-link" to="/register">
            Register
          </Link>
        </p>
       <div className="text-center">
       <SocialPage/>
       </div>
      </div>
    </div>
  );
};

export default Login;
