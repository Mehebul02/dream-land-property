
import { useLoaderData } from "react-router-dom";
import Banner from "../shared/banner/Banner";
import FeaturedProperties from "../shared/Featuredproperties/FeaturedProperties";

const Home = () => {
    const properties = useLoaderData()
    // console.log(properties)
   
    return (
        <div>
         <Banner/>
         <div className='text-center my-14 space-y-3'>
    <h1 className='text-3xl text-center font-poppins font-semibold '>Feature Properties</h1>
    <p className='font-poppins'>Certainly! Could you please specify the type of feature properties you're referring to? <br /> Are you talking about software features, real estate features, or something else?</p>
    <div className="divider"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {
           properties.map(card => <FeaturedProperties key={card.if} card={card}></FeaturedProperties>)
        }

    </div>
        </div>
    );
};

export default Home;