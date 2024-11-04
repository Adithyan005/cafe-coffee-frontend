import React from 'react';
import ban from "../../assets/imgs/8.png";
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import back from "../../assets/imgs/13.jpg";

const Banner = () => {
    const backgroundstyle = {
        backgroundImage: `url(${back})`,
        backgroundColor: "#270c03",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
    };

    return (
        <>
            <span id="banner"></span>
            <div style={backgroundstyle}>
                <div className="container min-h-[550px] flex justify-center items-center py-8 sm:py-12 px-4 sm:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex justify-center">
                            <img src={ban} alt="coffee" className='w-[550px] sm:max-w-[430px] mx-auto spin drop-shadow-xl' />
                        </div>

                        <div className='flex flex-col justify-center text-center sm:text-left'>
                            <h1 className='text-2xl sm:text-4xl font-bold font-cursive'>Premium Blend Coffee</h1>
                            <p className='text-sm py-4 tracking-wide leading-5 line-clamp-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam dolorem velit, esse dolorum id? Ullam ratione laborum perspiciatis pariatur expedita.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='p-3 space-y-4'>
                                    <div className='flex items-center gap-4'>
                                        <GrSecure className='text-2xl shadow-md rounded-full bg-red-200 h-12 w-12 p-3' />
                                        <span>Premium Coffee</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <IoFastFood className='text-2xl shadow-md rounded-full bg-orange-200 h-12 w-12 p-3' />
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <GiFoodTruck className='text-2xl shadow-md rounded-full bg-yellow-200 h-12 w-12 p-3' />
                                        <span>Cold Coffee</span>
                                    </div>
                                </div>
                                <div className='border-t-2 sm:border-t-0 sm:border-l-4 pl-0 sm:pl-6 pt-4 sm:pt-0 border-primary/70 space-y-3'>
                                    <h1 className='text-xl sm:text-2xl font-semibold font-cursive'>Tea Lover</h1>
                                    <p className='text-sm line-clamp-5'>
                                        Lorem ipsum dolor sit amet consectetur elit. Iste voluptate voluptatum, iure reprehenderit corrupti cum eius necessitatibus tempore magnam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
