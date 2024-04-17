import React from "react";
import { Helmet } from "react-helmet-async";
import { FaLocationArrow, FaPhone,  } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
   <div>
    <Helmet>
      {/* <title>Contact-Dream Land</title> */}
    </Helmet>
     <div className="flex  justify-evenly flex-col lg:flex-row p-4">
      <div  data-aos="fade-right"  data-aos-offset="200"  className="border p-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-poppins font-semibold">
          IT’S EASY TO FIND US
        </h1>
        <div className="divider max-w-[250px] text-yellow-600"></div>
        <div>
          <div className="flex gap-4">
            <div>
              <FaLocationArrow className="text-2xl text-[#0284C7]  "></FaLocationArrow>
            </div>
            <h1 className="text-xl font-poppins">
              Mirpur New Bazar Road, Block-c,Dhaka
            </h1>
          </div>
          <div className="flex gap-4 my-10">
            <div>
              <FaPhone className="text-2xl text-[#0284C7]  "></FaPhone>
            </div>
            <h1 className="text-xl font-poppins">
             01642287450
            </h1>
          </div>
          <div className="flex gap-4 my-10">
            <div>
              <MdOutlineEmail className="text-2xl text-[#0284C7]  "></MdOutlineEmail>
            </div>
            <h1 className="text-xl font-poppins">
            mehebul212@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div data-aos="fade-left"  data-aos-offset="200" className="border rounded-lg shadow-lg p-4 lg:w-1/2">
        <h1 className=" text-3xl font-poppins font-semibold text-center ">Contact Form</h1>
        <div className="divider"></div>
        <div>
            <h1 className="text-xl font-poppins">Your Name*</h1>
            <input type="text" placeholder="Your Name" className="input input-bordered  w-full" />
        </div>
        <div className="my-4">
            <h1 className="text-xl font-poppins">Your Email*</h1>
            <input type="text" placeholder="Your Email" className="input input-bordered  w-full" />
        </div>
        <div>
            <h1 className="text-xl font-poppins">Your Message</h1>
            <textarea rows="6" cols="50" placeholder="Type Your Message....." className="textarea textarea-bordered textarea-lg w-full max-w-2xl" ></textarea>
        </div>
        <div className="text-center block mt-3 ">
            <button className="bg-yellow-600 text-2xl text-white font-semibold px-4 py-2 font-poppins rounded-md">Send Message</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Contact;
