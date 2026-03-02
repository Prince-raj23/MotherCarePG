import { Routes, Route, } from "react-router-dom";

import Home from "./component/PageHome";
import Pricing from "./component/Price";
import FitnessDashboard from "./component/Fetness";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/fetness" element={<FitnessDashboard />} />       
      </Routes>
    </div>
  );
}

export default App;