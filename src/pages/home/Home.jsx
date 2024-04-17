
import { useLoaderData } from "react-router-dom";
import Banner from "../shared/banner/Banner";
import FeaturedProperties from "../shared/Featuredproperties/FeaturedProperties";
import clientBanner from '../../assets/slide2.jpg'
import Contact from "../shared/contact/Contact";
import { Helmet } from "react-helmet-async";
const Home = () => {
    const properties = useLoaderData()

   
    return (
        <div>
            <Helmet>
                <title>Home-Dream Land</title>
            </Helmet>
         <Banner/>
         <div className='text-center my-14 space-y-3'>
    <h1 className='text-3xl text-center font-poppins font-semibold '>Feature Properties</h1>
    <p className='font-poppins'>Certainly! Could you please specify the type of feature properties you're referring to? <br /> Are you talking about software features, real estate features, or something else?</p>
    <div className="divider"></div>
    </div>
    <div   className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {
           properties.map(propertyCard => <FeaturedProperties key={propertyCard.id} propertyCard={propertyCard}></FeaturedProperties>)
        }

    </div> 
    {/* Happy client  */}
    <div className='text-center my-14 space-y-3'>
    <h1 className='text-3xl text-center font-poppins font-semibold '>WHAT CLIENT SAY</h1>
    <p className='font-poppins'>Real Estate agents are Property consisting of land and the buildings on it, along with its <br />seds naturals resources such seds as crops, minerals, or water</p>
    <div className="divider"></div>
    <div className="hero h-[490px]   mt-12 rounded-xl bg-cover bg-center">
    
    </div>
    </div>
    <Contact/>
    </div>
    );
};

export default Home;