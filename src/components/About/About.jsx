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
            <h3>Dr. R. Aravind</h3>
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
              <p>aravind@gmail.com</p>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in" className="rightt">
          <p>
          Welcome to our Eye Hospital, led by Dr. Aravind, an accomplished ophthalmologist with a strong academic background and extensive surgical expertise. Dr. Aravind completed his MBBS and MS in Ophthalmology from Post Graduation Perundiurai Medical College, graduating in the 2009 batch. He then pursued specialized training in phacoemulsification at Aravind Eye Hospital, Madurai, refining his skills in cataract surgery. Subsequently, he furthered his education at the Western Regional Institute of Ophthalmology, where he completed his post-graduation from 2017 to 2020. Dr. Aravind's commitment to excellence led him to undertake a Phaco Fellowship from 2020 to 2021, during which he performed over 7000 successful phaco surgeries. His dedication to education and academia is evidenced by his role as an Assistant Professor at Dhanalakshmi Srinivasan Medical College from 2021 to 2022. Dr. Aravind's vast experience and unwavering dedication ensure that our patients receive the highest quality eye care tailored to their individual needs.
          </p>
        </div>
      </div>

      


    </div>
  );
};

export default About;
