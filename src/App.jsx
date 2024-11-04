import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from "./Components/Appointments/Appointments";
import Layout from "./Layout";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/appointment" element={<Appointments/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
