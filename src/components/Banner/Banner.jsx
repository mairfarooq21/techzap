import React from 'react'

const Banner = ({ data }) => {
  return (
    <div className='min-h-[500px] flex justify-center items-center py-12'>
        <div className='container'>
            <div  className='bg-[#121212] grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                {/*first col */}
                <div className='p-6 sm:p-8'>
                    <p className='text-2xl font-poppins'>{data.discount}</p>
                    <h1 className='text-white uppercase text-4xl lg:text-7xl font-bold font-poppins'>{data.title}</h1>
                </div>
                {/*second col */}
                <div className='h-full flex items-center'>
                    <img className='scale-125 w-[250] md:w-[340px] h-[330px] mx-auto drop-shadow-2xl object-cover' src={data.image} alt="" />
                </div>
                {/*third col */}
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p className='font-semibold text-xl font-poppins'>{data.title2}</p>
                    <p className='text-white text-3xl sm:text-5xl font-bold font-poppins'>{data.title3}</p>
                    <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div>
                        <button
                        className='bg-primary text-white py-2 px-8 rounded-full cursor-pointer hover:scale-105 duration-300 font-poppins'>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;