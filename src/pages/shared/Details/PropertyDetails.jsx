// import { useParams } from "react-router-dom";

import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
//  const {id,price} =useParams()
    const details = useLoaderData()
   const {id,image,estate_title,description,price,segment_name}=details
  //  console.lo)
    return (
        <div  className="card card-compact border-2  border-gray-300 bg-base-100 shadow-xl">
    
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title font-poppins">estate_title++{id}</h2>
          <p className="font-poppins">
           description
          </p>
        <div className="flex justify-between">
        <h1 className="text-2xl font-semibold font-poppins">price{price}/month</h1>
        <h1 className="bg-[#0284C7] px-3 font-poppins py-2 text-xl text-white rounded-md">Sale</h1>
        </div>
          <div className="space-y-3">
            <h1 className="text-xl font-poppins border-b-2">Facilities</h1>

            <li className="font-poppins">living room</li>
            <li className="font-poppins">swimming pool</li>
            <li className="font-poppins">Kitchen</li>
          </div>
         
        </div>
      </div>
    );
};

export default PropertyDetails;