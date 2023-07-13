import HeroHeader from "./component/HeroHeader.jsx";
import InfoCard from "./component/InfoCard.jsx";
import FooterBanner from "./component/FooterBanner.jsx";
import CardSlider from "./component/CardSlider.jsx";
import Home from "./routes/Home.js";
import AboutUs from "./routes/AboutUs.js";
import Academics from "./routes/Academics.js";
import ContactUs from "./routes/ContactUs.js";
import Courses from "./routes/Courses.js"

import { Route , Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/academics" element={<Academics/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/courses" element={<Courses/>}/>

    </Routes>
  
    </div>
  );
}

export default App;
