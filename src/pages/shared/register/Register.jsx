import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [error , setError] =useState()
  const {createUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit= (data,e) => {
    const {email,password} = data;
   if(password.length < 6){
    return toast.error('Password should be at least 6 characters!')
   }
   if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
   return toast.error('Please Password  Uppercase and Lowercase ')
   }
    createUser(email,password)
    .then(result =>{
        console.log(result.user)
        toast.success('Your Registration Is Successful')
    
    })
    .catch(error =>{
        console.log(error)
        toast.error('Email-already-in-use!')
    })

    console.log('show data',data)
    }


  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-5 font-poppins font-semibold">Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-poppins font-semibold">Name</span>
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
            <span className="label-text font-poppins font-semibold">Photo Url</span>
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
            <span className="label-text font-poppins font-semibold">Email</span>
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
     <h1 className="font-poppins font-semibold">Password</h1>
<label className="input input-bordered flex items-center gap-2">

  <input type={showPassword ? 'text':'password'} className="grow " placeholder="Password"  {...register("password", { required: true })}/>
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
          <button className="btn btn-primary font-poppins text-xl">Register</button>
          <Toaster position="top-right"
  reverseOrder={false} />
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
