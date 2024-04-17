import { useContext, useEffect, useState } from "react";
import { register } from "swiper/element";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {updatePhoto,user,setUser}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    const from = location?.state ? location.state : "/";
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
   
    const handleNameChange =e=>{
      setName(e.target.value)
    }
    const handleImageChange =e=>{
      setImage(e.target.value)
    }
    useEffect(()=>{
      if(user){
        setName(user.displayName || '')
        setImage(user.photoURL || '')
      }
    },[user])
    const handleSubmit=e =>{
      navigate(from)
      // e.preventDefault()
      updatePhoto(name,image)
      .then(result =>{
        console.log(result)
        setImage()
       
      })
      .catch(error =>{
        console.log(error)
      })
    }

    return (
        <div className="card border p-4 card-compact max-w-4xl mx-auto bg-base-100 shadow-xl">
 <div className="avatar">
  <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    {
      image && <img src={user.photoURL} />
    }
  </div>
</div>
<div>
<form onSubmit={handleSubmit}>
<label className="form-control  ">
  <div className="label">
    <span className="label-text text-xl font-poppins font-semibold">Name</span>
  </div>
  <input type="text" placeholder="Name" value={name} name="name" className="input input-bordered " onChange={handleNameChange} />
  
</label>
<label className="form-control  ">
  <div className="label">
    <span className="label-text text-xl font-poppins font-semibold">Email</span>
  </div>
  <input type="email" placeholder="Email" value={user?.email} name="email"  className="input input-bordered " />
  
</label>
<label className="form-control  ">
  <div className="label">
    <span className="label-text text-xl font-poppins font-semibold">PhotoUrl</span>
  </div>
  <input type="text" value={image} placeholder="Name" name="image" className="input input-bordered " onChange={handleImageChange} />
  
</label>
<div className="form-control mt-6">
            <button className="bg-primary py-2 rounded-md text-xl text-white">Save Change</button>
          </div>
</form>
</div>
  
</div>
    );
};

export default UpdateProfile;