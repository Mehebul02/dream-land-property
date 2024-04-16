import { Link } from "react-router-dom";

<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
const FeaturedProperties = ({propertyCard}) => {
     const {id,image,estate_title,segment_name,description,price,facilities,status} = propertyCard
  // console.log(propertyCard)

 

  return (
    <div>
   
      <div   data-aos="fade-up" className="card card-compact border-2 border-gray-300 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className=" absolute top-0 rounded-md px-6 py-1 bg-red-600 ">
          <h1 className="text-xl text-white font-poppins">{status}</h1>
        </div>
        <div className="card-body">
          <h2 className="card-title font-poppins">{estate_title}</h2>
          <p className="font-poppins">
           {description}
          </p>
          <h1 className="text-2xl font-semibold font-poppins">{price}/month</h1>
          <div className="space-y-3">
            <h1 className="text-xl font-poppins border-b-2">Facilities</h1>
            {
              facilities.map((li,idx) => <li key={idx}  className="font-poppins">{li}</li>)
            }

          </div>
          <div className="card-actions justify-center mt-4">
           <Link to={`/details/${id}`}>
           <button className="bg-[#0284C7] px-4 py-2  rounded-lg text-xl text-white font-poppins font-semibold">
              View Property
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
// FeaturedProperties.PropTypes={
//     properties:PropTypes.node
// }