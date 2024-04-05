import "./Landings.css"
import { MdAddIcCall } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import landing1 from "../../assets/landing1.jpg"
import landing2 from "../../assets/landing2.jpg"
import landing3 from "../../assets/landing3.jpg"

const Landings = () => {
    const map = "https://maps.app.goo.gl/F9tXc9Y9eduAT7887"
  return (
    <div>
        <div id="home" className="landing-container">
            <div className="right">
           <div data-aos="fade-up-right">
            <h1>Welcome <span style={{color:"#006AFF"}}>To</span> Adhira Aravind</h1><br />
            <h1><span style={{color:"#006AFF"}}>Eye</span> Hospital, <span style={{color:"#006AFF"}}>Pudukkottai</span></h1>
           </div>
           <div data-aos="fade-up-right">
            <p>Discover Exceptional Eye Care At Adhira Aravind Eye Hospital, Where Expertise Meets Compassion. Led By Renowned Ophthalmologist Dr. R. Aravind, We Are Dedicated To Providing Comprehensive Eye Care Services To The Community Of Pudukkottai And Beyond. From Routine Eye Exams To Advanced Surgical Procedures, We Prioritize Your Vision Health With Personalized Care And Cutting-Edge Technology.</p>
           </div>
           <div data-aos="fade-up-right" className="btns">
                <div>
                <button><span><MdAddIcCall /></span><a href="tel:9514152671">+91 9514152671</a></button>
                </div>  
            <div>
            <button><span><FaLocationArrow /></span><a href={map}>Address: North 3rd street, Near Karthick Mahal, Pudukkottai</a></button>
            </div>
            </div>
            </div>
            <div className="left">
                <div data-aos="fade-up">
                    <img src={landing1} alt="" />
                </div>
                <div data-aos="fade-up" className="lef-2">
                    <img src={landing2} alt="" />
                </div>
                <div data-aos="fade-up" className="lef-3">
                    <img src={landing3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landings