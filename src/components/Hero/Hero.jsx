import React from 'react';
import Slider from "react-slick";
import Img1 from '/src/Images/smartwatch2-removebg-preview.png';
import Img2 from '/src/Images/headphone.png';
import Img3 from '/src/Images/gaming.png';
import Img4 from '/src/Images/macbook.png';
import Img5 from '/src/Images/speaker.png';

const HeroData = [
    {
        id: 1,
        img: Img1,
        title: 'Apple',
        title2: 'Smart Watch',
    },
    {
        id: 2,
        img: Img2,
        title: 'Wireless',
        title2: 'Headphones',
    },
    {
        id: 3,
        img: Img3,
        title: 'Sony',
        title2: 'Play Station 4',
    },
    {
        id: 4,
        img: Img4,
        title: 'Apple',
        title2: 'Macbook',
    },
    {
        id: 5,
        img: Img5,
        title: 'Wireless',
        title2: 'Speaker',
    },
]

const Hero = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
    return (
        <div className='container '>
            <div className='overflow-hidden rounded-3xl min-h-[465px] 
            sm:min-h-[565px] bg-[#121212] flex justify-center items-center' style={{ border: '1px solid #black', borderRadius: '3xl' }}>
                <div className='container pb-8 sm:pb-0'>
                {/* Hero Section*/}
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div key={data.id}>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 '>
                                        {/*text conent section */}
                                        <div className='flex flex-col justify-center gap-1 sm:gap-2 pt-12 sm:pt-0 pl-2 sm:pl-4 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins'>{data.title}</h1>
                                            <h1 className='text-4xl uppercase text-white sm:text-[60px] md:text-[80px] xl:text-[100px] leading-[1.2] font-bold font-poppins'>{data.title2}</h1>
                                            <div className='mt-10 pl-1 sm:pl-2'>
                                                <button className='bg-primary text-white font-poppins cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10'>Shop now</button>
                                            </div>
                                        </div>
                                        {/*img section */}
                                        <div className='order-1 sm:order-2'>
                                            <div>
                                                <img src={data.img} alt="" 
                                                className="w-[300px] sm:w-[350px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default Hero;
