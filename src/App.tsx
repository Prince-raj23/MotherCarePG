import { Routes, Route, } from "react-router-dom";

import Home from "./component/PageHome";
import Pricing from "./component/Price";
import FitnessDashboard from "./component/Fetness";
import RoomAvailability from "./component/Room";
import MessMenu from "./component/Menu";
import PGPolicy from "./component/Rule";
import ContactUs from "./component/CtontactPage";
import AboutUs from "./component/About";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/fitness" element={<FitnessDashboard />} /> 
        <Route path="/rooms" element={<RoomAvailability />} />   
        <Route path="/menu" element={<MessMenu />} /> 
        <Route path="/rules" element={<PGPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;