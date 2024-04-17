import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo-3.png'
const Footer = () => {
   
    
   
    return (
<footer className="footer p-10 bg-[#0284C7] text-base-content rounded-md mt-10">
  <aside>
  <img src={logo} alt="" />
  
  </aside> 
  <nav>
    <h6 className="footer-title text-xl font-poppins text-white">Services</h6> 
    <a className="link link-hover text-xl font-poppins text-white">Branding</a>
    <a className="link link-hover text-xl font-poppins text-white">Design</a>
    <a className="link link-hover text-xl font-poppins text-white">Marketing</a>
    <a className="link link-hover text-xl font-poppins text-white">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-xl font-poppins text-white">Company</h6> 
    <a className="link link-hover text-xl font-poppins text-white">Home</a>
    <a className="link link-hover text-xl font-poppins text-white">Contact</a>
    <a className="link link-hover text-xl font-poppins text-white">About us</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title text-xl font-poppins text-white">Legal</h6> 
    <a className="link link-hover text-xl font-poppins text-white">Terms of use</a>
    <a className="link link-hover text-xl font-poppins text-white">Privacy policy</a>
    <a className="link link-hover text-xl font-poppins text-white">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;