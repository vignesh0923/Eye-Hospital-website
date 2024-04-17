import "./Whychoose.css";

const Whychoose = () => {
  return (
    <div>
      <div id="our services" className="why-container">
        <h1  data-aos="fade-right">
          Our <span style={{ color: "#006AFF" }}>Services</span>
        </h1>
        <p  data-aos="fade-right">
          We Provide Top Quality Coustomer Services.We have Got a Award in the
          sector.
        </p>
      </div>

      <div className="why-containers">
      <main className="page-content">
  <div data-aos="flip-up" className="card">
    <div className="content">
      <h2 className="title">Computerised eye check up</h2>
    </div>
  </div>
  <div data-aos="flip-up" className="card">
    <div className="content">
      <h2 className="title"> Refractive eye checkup</h2>
    </div>
  </div>
  <div data-aos="flip-up" className="card">
    <div className="content">
      <h2 className="title">Glaucoma workup eye pressure check up</h2>
    </div>
  </div>
  <div data-aos="flip-up" className="card">
    <div className="content">
      <h2 className="title"> Aravind opticala</h2>
    </div>
  </div>
  <div data-aos="flip-up" className="card">
    <div className="content">
      <h2 className="title">Operation Theatre</h2>
    </div>
  </div>
  </main>

      </div>
    </div>
  );
};

export default Whychoose;
