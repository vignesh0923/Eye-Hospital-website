import "./Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div>
            <h1>Eye & Visions</h1>
            <h1>Care</h1>
          </div>
          <div className="cont1">
            <h4>Services</h4>
            <p>Computerised eye check up</p>
            <p>Refractive eye checkup</p>
            <p>Glaucoma workup eye pressure check up</p>
            <p>Aravind opticala</p>
            <p>Operation Theatre</p>
          </div>
          <div className="cont2">
            <h4>Ouick Access</h4>
            <a href="#home"><p><FaAngleRight /> Home</p></a>
                <a href="#our services"><p><FaAngleRight /> Our Services</p></a>
                <a href="#About Us"><p><FaAngleRight /> About Us</p></a>
                <a href="#Contact Us"><p><FaAngleRight /> Contact Us</p></a>
                <a href="#Testimonial"><p><FaAngleRight /> Testimonial</p></a>
          </div>
        </div>
        <hr />
        <div className="copy">
          <AiOutlineCopyrightCircle /><p>copy rights Adhira Eye Hospital All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
