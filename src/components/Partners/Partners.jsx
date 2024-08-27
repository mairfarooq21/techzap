import React from 'react';
import brand1 from '/src/Images/br-1.png';
import brand2 from '/src/Images/br-2.png';
import brand3 from '/src/Images/br-3.png';
import brand4 from '/src/Images/br-4.png';
import brand5 from '/src/Images/br-5.png';

const Partners = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-[#E5E7EB]'>
        <div className="container">
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                <img src={brand1} alt="brand" className='w-[80px]' />
                <img src={brand2} alt="brand" className='w-[80px]' />
                <img src={brand3} alt="brand" className='w-[80px]' />
                <img src={brand4} alt="brand" className='w-[80px]' />
                <img src={brand5} alt="brand" className='w-[80px]' />
            </div>
        </div>
    </div>
  )
}

export default Partners