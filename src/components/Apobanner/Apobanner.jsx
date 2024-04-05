import "./Apobanner.css";
import scope from "../../assets/scope.png";
import log from "../../assets/logo.png";
import { SlNote } from "react-icons/sl";
const Apobanner = () => {
  return (
    <div>
      <div id="Contact Us"data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="appoint-banner">
        <div>
          <h1>
            Get Started With{" "}
            <span style={{ color: "#006AFF" }}>Eye & Vision</span> Care
          </h1>
          <p>
            At Eye & Vision Care, you will find eye care professionals who
            genuinely care about your<br></br> health and are dedicated to
            providing exceptional personal service to everyone who<br></br>{" "}
            walks through our door
          </p>
        </div>
        <div>
          <button className="banner-btn">
            <span>
              <SlNote />
            </span>
            <a href="tel:9514152671">Appointment</a>  
          </button>
        </div>

        <div className="img-container">
          <div>
            <img className="eye" src={scope} alt="" />
          </div>
          <div>
            <img className="eyee" src={log} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apobanner;
