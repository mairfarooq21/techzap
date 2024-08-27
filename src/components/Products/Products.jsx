import React from 'react'
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import Img1 from '/src/Images/p-1.jpg';
import Img2 from '/src/Images/p-2.jpg';
import Img3 from '/src/Images/p-3.jpg';
import Img4 from '/src/Images/p-5.jpg';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Headphone',
        price: 29,
        aosdelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: 'Smart Watch',
        price: 60,
        aosdelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: 'Headphone',
        price: 19,
        aosdelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: 'Headphone',
        price: 25,
        aosdelay: "0",
    },
];

const ProductsData2 = [
    {
        id: 1,
        img: Img1,
        title: 'Headphone',
        price: 29,
        aosdelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: 'Smart Watch',
        price: 60,
        aosdelay: "0",
    },
    {
        id: 3,
        img: Img3,
        title: 'Headphone',
        price: 19,
        aosdelay: "0",
    },
    {
        id: 4,
        img: Img4,
        title: 'Headphone',
        price: 25,
        aosdelay: "0",
    },
];

const Products = () => {
  return (
    <div>
        <div className="container pt-8">
            {/*Header section */}
            <Heading title="Our Products" 
            subtitle={<span style={{ fontSize: '1.2rem', color: '#39394f' }}>Explore Our Products</span>} />
            {/*Body section */}
            <ProductCard data= {ProductsData}/>
            <ProductCard data= {ProductsData2}/>
        </div>
    </div>
  );
};

export default Products;