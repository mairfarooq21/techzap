import React from 'react';
import {FaInstagram, FaGithub , FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About Us",
        link: "/#",
    },
    {
        title: "Contact",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    },
];

const FooterLinks2 = [
    {
        title: "Privacy Policy",
        link: "/#",
    },
    {
        title: "Terms & Conditions",
        link: "/#",
    },
    {
        title: "Services",
        link: "/#",
    },
    {
        title: "FAQs",
        link: "/#",
    },
];

const Footer = () => {
  return (
    <div className='bg-white'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/*details */}
                <div className='py-8 px-4'>
                    <a
                    href="#"
                    className="text-black font-semibold tracking-widest text-2xl uppercase sm:text-3xl font-poppins">TechZap</a>
                    <p className='text-black lg:pr-24 pt-3 font-poppins'>TechZap: Elevate Your Tech Experience with Top Brands and Unbeatable Prices.</p>
                    <div className="flex items-center gap-3">
                        <HiOutlineMail className="text-3xl mt-4"/>
                        <p className='text-black mt-4 font-poppins'>mairfarooq21@gmail.com</p>
                    </div>
                </div>
                {/*Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 font-poppins'>Sitemap</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-primary duration-300 font-poppins'>
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*second col links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3 font-poppins'>Information</h1>
                        <ul className='space-y-3'>
                            {FooterLinks2.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:text-primary duration-300 font-poppins'>
                                        {data.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*personal links */}
                    <div className="py-8 px-4 col-span-2 sm:col-auto">
                        <h1 className='text-xl font-bold sm:text-left mb-3 font-poppins'>Personal Links</h1>
                        {/*social links */}
                        <div className="flex items-center gap-3 mt-6">
                            <a href="https://www.instagram.com/maiirfarooq/">
                                <FaInstagram className="text-3xl hover:text-primary durationn-300"/>
                            </a>
                            <a href="https://github.com/mairfarooq21">
                                <FaGithub  className="text-3xl hover:text-primary durationn-300"/>
                            </a>
                            <a href="https://www.linkedin.com/in/syedmair/">
                                <FaLinkedin className="text-3xl hover:text-primary durationn-300"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer