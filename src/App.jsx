import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import macbook from "./Images/macbook.png"
import Catagory from "./components/Catagory/Catagory";
import Catagory2 from "./components/Catagory/Catagory2";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  image: macbook,
  title2: "Laptops",
  title3: "Summer Sale",
  bgColor: "#000000",
};

const App = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <Catagory />
      <Products />
      <Banner data={BannerData} />
      <Services />
      <Blogs />
      <Catagory2 />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;