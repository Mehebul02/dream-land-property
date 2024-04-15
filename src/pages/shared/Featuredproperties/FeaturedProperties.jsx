import img from '../../../assets/slide2.jpg'
const FeaturedProperties = () => {
    return (
<div>
    <h1 className='text-3xl text-center font-poppins font-semibold my-10'>Properties</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
<div className="card card-compact border-2 border-gray-300 bg-base-100 shadow-xl">
  <figure><img className="relative" src={img} alt="Shoes" /></figure>
  <div className=" absolute top-0 rounded-md px-6 py-1 bg-red-600 "><h1 className='text-xl text-white font-poppins'>Sale</h1></div>
  <div className="card-body">
    <h2 className="card-title font-poppins">Apartment</h2>
    <p className="font-poppins">If a dog chews shoes whose shoes does he choose?</p>
    <h1 className="text-2xl font-semibold font-poppins">$1500/month</h1>
    <div className='space-y-3'>
        <h1 className='text-xl font-poppins border-b-2'>Facilities</h1>
       
        
            <li className='font-poppins'>living room</li>
            <li className='font-poppins'>swimming pool</li>
            <li className='font-poppins'>Kitchen</li>
        
    </div>
    <div className="card-actions justify-center mt-4">
    <button className="bg-[#0284C7] px-4 py-2 rounded-lg text-xl text-white font-poppins font-semibold">View Property</button>
    </div>
  </div>
</div>
<div className="card card-compact border-2 border-gray-300 bg-base-100 shadow-xl">
  <figure><img className="relative" src={img} alt="Shoes" /></figure>
  <div className=" absolute top-0 rounded-md px-6 py-1 bg-red-600 "><h1 className='text-xl text-white font-poppins'>Sale</h1></div>
  <div className="card-body">
    <h2 className="card-title font-poppins">Apartment</h2>
    <p className="font-poppins">If a dog chews shoes whose shoes does he choose?</p>
    <h1 className="text-2xl font-semibold font-poppins">$1500/month</h1>
    <div className='space-y-3'>
        <h1 className='text-xl font-poppins border-b-2'>Facilities</h1>
       
        
            <li className='font-poppins'>living room</li>
            <li className='font-poppins'>swimming pool</li>
            <li className='font-poppins'>Kitchen</li>
        
    </div>
    <div className="card-actions justify-center mt-4">
    <button className="bg-[#0284C7] px-4 py-2 rounded-lg text-xl text-white font-poppins font-semibold">View Property</button>
    </div>
  </div>
</div>
<div className="card card-compact border-2 border-gray-300 bg-base-100 shadow-xl">
  <figure><img className="relative" src={img} alt="Shoes" /></figure>
  <div className=" absolute top-0 rounded-md px-6 py-1 bg-red-600 "><h1 className='text-xl text-white font-poppins'>Sale</h1></div>
  <div className="card-body">
    <h2 className="card-title font-poppins">Apartment</h2>
    <p className="font-poppins">If a dog chews shoes whose shoes does he choose?</p>
    <h1 className="text-2xl font-semibold font-poppins">$1500/month</h1>
    <div className='space-y-3'>
        <h1 className='text-xl font-poppins border-b-2'>Facilities</h1>
       
        
            <li className='font-poppins'>living room</li>
            <li className='font-poppins'>swimming pool</li>
            <li className='font-poppins'>Kitchen</li>
        
    </div>
    <div className="card-actions justify-center mt-4">
    <button className="bg-[#0284C7] px-4 py-2 rounded-lg text-xl text-white font-poppins font-semibold">View Property</button>
    </div>
  </div>
</div>

</div>
</div>
    );
};

export default FeaturedProperties;