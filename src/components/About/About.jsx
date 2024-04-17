import "./About.css";
import doc from "../../assets/doc.jpg";
import { IoMail } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
const About = () => {
  return (
    <div>
      <div id="About Us" className="abt">
        <h1 data-aos="fade-right">
          <span className="spa">About</span> Us
        </h1>
      </div>
      <div className="abt-container">
        <div data-aos="zoom-in" className="leftt">
          <div>
            <img src={doc} alt="" />
          </div>
          <div className="info">
            <h3>Dr. R. Aravind M.B.B.S M.s (Phaco)</h3>
            <p>ophthalmologist</p>
          </div>
          <hr className="hr" />
          <div className="contac">
            <div>
              <p>
              <MdAddIcCall />
              </p>
              <p>+91 9514152671</p>
            </div>
            <div>
              <p>
              <IoMail />
                
              </p>
              <p>aravind193@gmail.com</p>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="rightt">
          <p>
          Welcome to our Eye Hospital, led by Dr. Aravind, an accomplished ophthalmologist with a strong academic background and extensive surgical experience. <br /><br /> Dr. Aravind completed his MBBS Erode Medical College. <br /><br /> MS in Western Regional Institute of Ophthalmology BJMC Ahmedabad. <br /><br /> Phaco Training in Aravind Eye Hospital, Madurai. He has Performed over 7000 Successful Phaco Surgeries. His dedications to education and academies is evidenced by his role as Assistant proffesor at, Dhanalakshmi Srinivasan Medical College , Perambalur. <br /><br />  Dr. Aravind's vast experience and unwavering dedication ensure that our patients receive the highest quality eye care tailored to their individual needs. 
          </p>
        </div>
      </div>

      


    </div>
  );
};

export default About;
