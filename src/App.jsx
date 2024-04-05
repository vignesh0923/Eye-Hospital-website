import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landings from "./components/Landingpage/Landings";
import Whychoose from "./components/Whychooseus/Whychoose";
import About from "./components/About/About";
import Apobanner from "./components/Apobanner/Apobanner";
import Testi from "./components/Testimonial/Testi";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Landings />
      <Whychoose />
      <About />
      <Apobanner/>
      <Testi/>
      <Footer/>
    </div>
  );
};

export default App;
