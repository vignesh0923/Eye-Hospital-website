import "./Navbar.css"
import logo from "../../assets/logo.png"
import { SlNote } from "react-icons/sl";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Navbar = () => {

    const [move, setmove] = useState("");

    function movenav(value){
        setmove(value)
      }
    
  return (
    <div>
        <div className="side-nav" style={{marginLeft: move}}>
        <h2 onClick={()=> movenav("-85%")} className="back-icon">
          <ImCross />
        </h2>
        <div className="nav-title">
        <a href="#home"><p>Home</p></a>
                <a href="#our services"><p>Our Services</p></a>
                <a href="#About Us"><p>About Us</p></a>
                <a href="#Contact Us"><p>Contact Us</p></a>
                <a href="#Testimonial"><p>Testimonial</p></a>
            </div>
      </div>
        <div className="nav-menus">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="nav-title">
                <a href="#home"><p>Home</p></a>
                <a href="#our services"><p>Our Services</p></a>
                <a href="#About Us"><p>About Us</p></a>
                <a href="#Contact Us"><p>Contact Us</p></a>
                <a href="#Testimonial"><p>Testimonial</p></a>
            </div>
            <div className="search">
          <span onClick={()=> movenav("0px")}>
            <CiMenuKebab />
          </span>
        </div>
        </div>
     
    </div>
  )
}

export default Navbar