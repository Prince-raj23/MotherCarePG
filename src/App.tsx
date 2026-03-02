import { Routes, Route, } from "react-router-dom";

import Home from "./component/PageHome";
import Pricing from "./component/Price";

function App() {
  return (
    <div>
      
      <Routes>
        
        
        <Route path="/home" element={<Home/>} />
        <Route path="/Pricing" element={<Pricing />} />
        
      </Routes>
    </div>
  );
}

export default App;