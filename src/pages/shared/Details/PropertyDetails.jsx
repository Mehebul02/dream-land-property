// import { useParams } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  
  const details = useLoaderData()
  const {id} =useParams()
    const int = parseInt(id)
    const card = details.find(card => card.id == int)
    const {image,estate_title,price,description,status,area,facilities}=card
  //  const {id,image,estate_title,description,price,segment_name}=details
  //  console.lo)
    return (
       <div>
        <Helmet><title>Details-Dream Land</title></Helmet>
         <div  className="card card-compact border-2 max-w-[800px]  mx-auto border-gray-300 bg-base-100 shadow-xl">
    
    <figure className="h-72">
      <img  src={image} alt="Shoes" />
    </figure>
    
    <div className="card-body">
      <h2 className="card-title font-poppins">{estate_title}</h2>
      <p className="font-poppins">
      { description}
      </p>
    <div className="flex justify-between">
    <h1 className="text-2xl font-semibold font-poppins">{price}/month</h1>
    <h1 className="bg-[#0284C7] px-3 font-poppins py-2 text-xl text-white rounded-md">{status}</h1>
    </div>
    <h1 className="text-xl font-poppins">Area:{area}</h1>
      <div className="space-y-3">
        <h1 className="text-xl font-poppins border-b-2">Facilities</h1>
        {
          facilities.map((li,idx) => <li key={idx}  className="font-poppins">{li}</li>)
        }
      </div>
     
    </div>
  </div>
       </div>
    );
};

export default PropertyDetails;