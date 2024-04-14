import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [showPassword,setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit= (data) => {
    //     const {email,password} = data
    //     createUser(email,password)
    //    .then(result =>{
    //     console.log(result.user)
    //    })
    //    .catch(error =>{
    //     console.log(error)
    //    })
    console.log('show data',data)
    }

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-10">Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
             {...register("FullName", { required: true })}
          />
           {errors.FullName && <span className="text-red-700">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo"
            className="input input-bordered"
            required {...register("photo", { required: true })}
          />
                     {errors.photo && <span className="text-red-700">This field is required</span>}

        </div>
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
        <div className="form-control mt-4">
          {/* <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            value='password'
            placeholder="Password"
            className="input input-bordered "
            required {...register("password", { required: true })}
          /><FaEye className="relative top-1"></FaEye>
     
     {errors.password && <span className="text-red-700">This field is required</span>} */}
     <h1>Password</h1>
<label className="input input-bordered flex items-center gap-2">

  <input type={showPassword ? 'text':'password'} className="grow " placeholder="Password" />
  <span>
  <span onClick={()=>setShowPassword(!showPassword)}>
    
    {
     showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
    }
   </span>
  </span>
</label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center my-6">
        Already Have An Account ?{" "}
        <Link className="btn-link" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
