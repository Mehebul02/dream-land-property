import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";
import Footer from "../../pages/footer/Footer";


const Root = () => {
    return (
        <div>
           <Navbar/>
           <div className="max-w-[1300px] mx-auto mt-10">
            <Outlet/>
           </div>
         <div className="mt-10">
         <Footer/>
         </div>
        </div>
    );
};

export default Root;