import { useContext } from "react";
import { register } from "swiper/element";
import { AuthContext } from "../../../provider/AuthProvider";

const UpdateProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="card border p-4 card-compact max-w-4xl mx-auto bg-base-100 shadow-xl">
 <div className="avatar">
  <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL ||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
  </div>
</div>

  <div className="card-body">
  <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
             <div className="form-control">
            <label className="label">
              <span className="label-text font-poppins font-semibold">
                Photo Url
              </span>
            </label>
            <input
              type="text"
              name="image" 
              defaultValue={user.photoURL}
              placeholder="Photo"
              className="input input-bordered"
              required
              {...register("image", { required: true })}
            />
           
          </div>
          </div>
   
    <div className="card-actions justify-center my-4">
      <button className="bg-primary px-4 py-2 rounded-lg text-xl text-white font-poppins font-semibold">Save Changes</button>
    </div>
  </div>
</div>
    );
};

export default UpdateProfile;