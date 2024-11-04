import React from "react";
import cof from "../../assets/imgs/5.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };

  return (
    <div id="home" className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container px-6 sm:px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1">
            <h1 className="pl-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              We serve the richest
              <span className="text-primary font-cursive tracking-wide"> Coffee</span> in the city
            </h1>
            <button
              className="bg-gradient-to-r from-primary to-secondary rounded-full text-white ml-8 px-3 py-3 mt-3 sm:mt-4 w-[10rem] max-sm:mx-auto transition-transform duration-200 "
              onClick={handleClick}
            >
              Book Appointment
            </button>
          </div>

          <div className="flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={cof}
              alt="coffee"
              className="w-[200px] sm:w-[300px] spin md:w-[400px] mx-auto transition-transform duration-300 mt-3"
            />
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl absolute top-5 left-12 p-2 hidden sm:block">
              <h1 className="text-xs sm:text-sm md:text-base">Hey Coder</h1>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl absolute bottom-4 right-12 p-2 hidden sm:block">
              <h1 className="text-xs sm:text-sm md:text-base">Best Coffee</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
