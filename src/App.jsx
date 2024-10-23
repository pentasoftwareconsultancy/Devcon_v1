import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Career from "./pages/Career";
import UsHealthcare from "./pages/UsHealthcare";
import NavBar from "./components/NavBar/NavBar";
import Footer  from "./components/footer/Footer";

// import Card from "./components/NavBar/card/Card";

const App = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
    
      <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/ushealthcare" element={<UsHealthcare />} />
        </Routes>
        
      </div>
      
      <Footer />
      
    </div>
  );
};
export default App;
