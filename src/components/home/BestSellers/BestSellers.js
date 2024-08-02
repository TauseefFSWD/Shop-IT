import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Wide Range Of Printers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="HP Printer Model 2365"
          price="7000"
          color="Blank and White"
          badge={true}
          des="Advanced technology for sharp, vibrant images and text."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="HP Printer Model 2378"
          price="8000"
          color="Gray"
          badge={false}
          des="High-resolution output perfect for professional documents and photos."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="HP Printer Model 2788"
          price="9999"
          color="Mixed"
          badge={true}
          des="Multiple connectivity options: Wi-Fi, Ethernet, USB, and mobile printing."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="HP Printer Model 2972"
          price="11000"
          color="Black"
          badge={false}
          des="Energy-saving modes and certifications for lower electricity bills."
        />
      </div>
    </div>
  );
};

export default BestSellers;
