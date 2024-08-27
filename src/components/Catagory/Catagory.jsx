import React from 'react';
import Img1 from '/src/Images/gaming.png';
import Img2 from '/src/Images/headphone.png';
import Img3 from '/src/Images/macbook.png';

const Catagory = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='sm:grid-cols-[repeat(3,1fr)] gap-8 grid grid-cols-1'>
                {/*first col */}
                <div className='py-10 pl-5 bg-[#E5E7EB] text-black rounded-3xl relative h-[320px] flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='text-2xl font-semibold mb-[2px] font-poppins'>Gaming</p>
                            <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Explore</button>
                        </div>
                    </div>
                    <img src={Img1} alt="" className='sm:w-[200px] w-[170px] absolute top-1/2 -translate-y-1/2 right-1' />
                </div>
                {/*second col */}
                <div className='py-10 pl-5 text-black rounded-3xl relative h-[320px] flex items-end bg-[#E5E7EB]'>
                    <div>
                        <div className='mb-4'>
                            <p className='text-2xl font-semibold mb-[2px] font-poppins'>Headphones</p>
                            <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Explore</button>
                        </div>
                    </div>
                    <img src={Img2} alt="" className='sm:w-[200px] w-[170px] absolute top-1/2 -translate-y-1/2 right-0' />
                </div>
                {/*third col */}
                <div className='py-10 pl-5 text-black rounded-3xl relative h-[320px] flex items-end bg-[#E5E7EB]'>
                    <div>
                        <div className='mb-4'>
                            <p className='text-2xl font-semibold mb-[2px] font-poppins'>Laptops</p>                
                            <button className='bg-primary mt-10 text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 '>Explore</button>
                        </div>
                    </div>
                    <img src={Img3} alt="" className='sm:w-[250px] w-[220px] absolute top-1/2 -translate-y-1/2 right-0' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagory;