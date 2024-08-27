import React from 'react';
import Heading from '../Shared/Heading';
import { TfiSupport } from "react-icons/tfi";
import { BsChatLeftText } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";

const Catagory = () => {
  return (
    <div className='py-8'>
        <div className='container'>
        <Heading title="Need help?" subtitle={<span style={{ fontSize: '1.2rem', color: '#39394f' }}></span>} />
            <div className='sm:grid-cols-[repeat(3,1fr)] gap-8 grid grid-cols-1'>
                {/*first col */}
                <div className='py-10 pl-5 border border-gray-400 text-black rounded-3xl relative h-[240px] sm:h-[280px] flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='text-2xl font-semibold mb-[2px] font-poppins'>Product support</p>
                        <TfiSupport size={30} className='text-black mr-6' />
                    </div>
                    <p className='text-[#646464] lg:pr-24 pt-3 font-poppins'>Find manual, troubleshoot and warranty of your TechVolt product.</p>
                    <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 max-w-[150px]'>Learn More</button>
                </div>
                {/*second col */}
                <div className='py-10 pl-5 border border-gray-400 text-black rounded-3xl relative h-[240px] sm:h-[280px] flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='text-2xl font-semibold mb-[2px] font-poppins'>Order support</p>
                        <CiLocationArrow1 size={35} className='text-black mr-6' />
                    </div>
                    <p className='text-[#646464] lg:pr-24 pt-3 font-poppins'>Track your order and check order FAQ.</p>
                    <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 max-w-[150px]'>Learn More</button>
                </div>
                {/*third col */}
                <div className='py-10 pl-5 border border-gray-400 text-black rounded-3xl relative h-[240px] sm:h-[280px] flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='text-2xl font-semibold mb-[2px] font-poppins'>Quick help</p>
                        <BsChatLeftText size={30} className='text-black mr-6' />
                    </div>
                    <p className='text-[#646464] lg:pr-24 pt-3 font-poppins'>Get instant help on shopping.</p>
                    <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-4 rounded-full relative z-10 max-w-[150px]'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagory;