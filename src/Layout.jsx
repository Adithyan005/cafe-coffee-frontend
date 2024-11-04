import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Service from "./Components/Services/Service";
import Banner from "./Components/Banner/Banner";
import Appstore from "./Components/Appstore/Appstore";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Banner />
      <Appstore />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Layout
