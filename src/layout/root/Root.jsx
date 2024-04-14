import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";


const Root = () => {
    return (
        <div>
           <Navbar/>
           <div className="max-w-[1300px] mx-auto">
            <Outlet/>
           </div>
        </div>
    );
};

export default Root;