import { useLoaderData } from "react-router-dom";
import 'animate.css';
const Clients = () => {
    const clients = useLoaderData()
    console.log(clients)
    return (
        <div className="flex gap-4">
            <div   className="  bg-base-100 border p-4 rounded-lg shadow-xl relative">
        <div className="avatar  ">
      <div className="w-24 mx-auto rounded-full">
        <img  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
      <div  className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-poppins">Mehebul Alif</h2>
        <h1>Co- Founder at Houzz</h1>
        <p>“We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.”</p>
       
      </div>
    </div>
    <div    className="  bg-base-100 border p-4 rounded-lg shadow-xl relative">
        <div className="avatar  ">
      <div className="w-24 mx-auto rounded-full">
        <img  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-poppins">Md.Somrat Ali</h2>
        <h1>Co- Founder at Houzz</h1>
        <p>“We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.”</p>
       
      </div>
    </div>
    <div    className="  bg-base-100 border p-4 rounded-lg shadow-xl relative">
        <div className="avatar  ">
      <div className="w-24 mx-auto rounded-full">
        <img  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-poppins">Razwan Khan</h2>
        <h1>Co- Founder at Houzz</h1>
        <p>“We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.”</p>
       
      </div>
    </div>
        </div>
    );
};

export default Clients;