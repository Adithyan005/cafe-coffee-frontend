import React from 'react';
import appbg from "../../assets/imgs/20.jpg";
import ios from "../../assets/imgs/14.png";
import playstore from "../../assets/imgs/17.jpg";

const Appstore = () => {
  const backgrd = {
    backgroundImage: `url(${appbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px"
  };

  return (
    <>
      <div style={backgrd} className='py-14'>
        <div className="container px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            <div className='space-y-5 max-w-xl mx-auto text-center sm:text-left'>
              <h1 className='text-2xl sm:text-4xl text-white/90 font-semibold line-clamp-3'>
                Coffee Cafe is available for Android and IOS
              </h1>
              
              <div className='flex flex-wrap justify-center sm:justify-start items-center gap-4'>
                <a href="https://www.apple.com/in/app-store/" target='_blank' rel="noopener noreferrer">
                  <img src={ios} alt="iOS Store" className='max-w-[140px] sm:max-w-[120px] md:max-w-[200px]' />
                </a>
                <a href="https://play.google.com/store/games?device=windows&pli=1" target='_blank' rel="noopener noreferrer">
                  <img src={playstore} alt="Google Play Store" className='max-w-[140px] sm:max-w-[120px] md:max-w-[200px] p-1' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appstore;
