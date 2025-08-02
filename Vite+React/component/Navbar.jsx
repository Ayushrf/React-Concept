import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Footer from "./Footer";
import "./Footer.css";
const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    
      <nav>
        {/* <ul style={{border: "2px solid green",color: "gray"}}> */}
        <ul>
          <li data-aos="fade-down" data-aos-duration="1500">Home</li>
          <li data-aos="fade-down" data-aos-duration="2000">Contact</li>
          <li data-aos="fade-down" data-aos-duration="2500">About</li>
        </ul>
      </nav>
      <Footer/>
    </>
  )
}
export default Navbar;