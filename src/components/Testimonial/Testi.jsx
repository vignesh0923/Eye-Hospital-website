import "./Testi.css";
import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import doc from "../../assets/doc.jpg";

const Testi = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Call initially to set the correct number of slides

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div id="Testimonial" className="tesi-heading">
        <h1  data-aos="fade-right">
          What <span style={{ color: "#006AFF" }}>Our Client</span> Says
        </h1>
        <p  data-aos="fade-right">
          Our clients send us bunch of smilies with our services and we love
          them
        </p>
      </div>

      <div className="test" data-aos="zoom-in-down">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="testimonial"
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
          >
            {/* Testimonial Slide 1 */}
            <SwiperSlide>
              <div className="testi-one">
                <div className="quotes">
                  <p><ImQuotesLeft /></p>
                </div>
                <div className="test-cont">
             
                <p className="name">
                    Vignesh <span>(Manager)</span>
                  </p>
                  <p>
                  Great... fabulous service in all sections. Time consciousness in entire team. Keep it up!. First time witnessing hospital team value patient's time. 100% perfection by all.Dr.Aravind is humble and caring. Listen's to us and explains t... observation simply with almost clarity. Thanks Dr & entire team.
                  </p>
                  <div className="star">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-cont">
                <div className="quotes">
                  <p><ImQuotesLeft /></p>
                </div>
                  <p className="name">
                    Rahul M <span>(UI/UX Developer)</span>
                  </p>
                  <p>
                  Today catract surgery was done by Dr.Aravind to my wife. I wish to share my experience in the hospital.A neat and clean atmosphere. Highly cordial and good service by all staff nurses in the hospital Doctor attending the patient... very informative, knowledgeable and gives lot of tips after surgery for proper vision
No doubts that the services
                  </p>
                  <div className="star">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="quotes">
                  <p><ImQuotesLeft /></p>
                </div>
                <div className="test-cont">
             
                <p className="name">
                    Vignesh <span>(Manager)</span>
                  </p>
                  <p>
                  Great... fabulous service in all sections. Time consciousness in entire team. Keep it up!. First time witnessing hospital team value patient's time. 100% perfection by all.Dr.Aravind is humble and caring. Listen's to us and explains t... observation simply with almost clarity. Thanks Dr & entire team.
                  </p>
                  <div className="star">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-one">
                <div className="test-cont">
                <div className="quotes">
                  <p><ImQuotesLeft /></p>
                </div>
                  <p className="name">
                    Rahul M <span>(UI/UX Developer)</span>
                  </p>
                  <p>
                  Today catract surgery was done by Dr.Aravind to my wife. I wish to share my experience in the hospital.A neat and clean atmosphere. Highly cordial and good service by all staff nurses in the hospital Doctor attending the patient... very informative, knowledgeable and gives lot of tips after surgery for proper vision
No doubts that the services
                  </p>
                  <div className="star">
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testi;
