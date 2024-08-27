import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About Us",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white text-black duration-200 relative z-40 shadow-md">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl font-poppins"
            >
              TechZap
            </a>
            {/* Menu Items */}
            <div className="lg:block hidden md:flex">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    {data.name === 'Shop' ? (
                      <div className="relative cursor-pointer group">
                        <a href={data.link} className="inline-block px-4 text-black hover:text-primary duration-200 font-poppins font-normal">
                          {data.name}
                        </a>
                        {/* Dropdown Links for Shop */}
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md p-2 text-black">
                          <ul className="space-y-2">
                            {DropdownLinks.map((data, index) => (
                              <li key={index}>
                                <a className="text-black hover:text-primary duration-200 inline-block p-2 font-poppins font-normal" href={data.link}>
                                  {data.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <a href={data.link} className="inline-block px-4 text-black hover:text-primary duration-200 font-poppins font-normal">
                        {data.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200"/>
            </div>
            {/* Order Button section */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-black hover:text-primary duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;