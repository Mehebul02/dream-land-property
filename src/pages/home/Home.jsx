import { useContext } from "react";
import Banner from "../shared/banner/Banner";
import { AuthContext } from "../../provider/AuthProvider";
import { ScaleLoader } from "react-spinners";

const Home = () => {
    const{loading} = useContext(AuthContext)
   
    return (
        <div>
         <Banner/>
  
        </div>
    );
};

export default Home;