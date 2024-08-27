import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '/src/Images/blog-1.jpg';
import Img2 from '/src/Images/blog-2.jpg';
import Img3 from '/src/Images/blog-3.jpg';

const BlogData = [
    {
        title: "How to choose the perfect watch",
        subtitle: "Choosing the perfect smartwatch involves considering several key factors to match your needs and lifestyle. Consider compatibility with your smartphone’s operating system, as some watches work better with iOS or Android. Look at battery life, as longer battery life can be crucial for daily wear.",
        published: "jan 20, 2024 by Miranda",
        img: Img1,
    },
    {
        title: "How to choose perfect gadget",
        subtitle: "Choosing the perfect gadget involves assessing your needs, preferences, and budget. Start by defining the gadget’s primary purpose—whether it's for entertainment, productivity, health, or communication.",
        published: "jan 20, 2024 by Miranda",
        img: Img2,
    },
    {
        title: "How to choose perfect VR headset",
        subtitle: "Choosing the perfect VR headset involves several considerations to ensure a great virtual reality experience. Start by assessing the headset’s compatibility with your existing hardware, like PCs or gaming consoles, or if it requires a standalone system.",
        published: "jan 20, 2024 by Miranda",
        img: Img3,
    },
];

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            {/*header section */}
            <Heading title="Recent News" subtitle={<span style={{ fontSize: '1.2rem', color: '#39394f' }}>Explore Our Blogs</span>} />
            {/*blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/*blog card */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white'>
                            {/*image section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={data.img} alt="" />
                            </div>
                            {/*content section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-[#39394f]'>{data.published}</p>
                                <p className='font-bold line-clamp-1 font'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-[#39394f]'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs;