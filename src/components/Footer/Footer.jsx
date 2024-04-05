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
            <p><FaAngleRight /> Home</p>
            <p><FaAngleRight /> About Us</p>
            <p><FaAngleRight /> Services</p>
            <p><FaAngleRight /> Testimonial</p>
            <p><FaAngleRight /> Contact Us</p>
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
