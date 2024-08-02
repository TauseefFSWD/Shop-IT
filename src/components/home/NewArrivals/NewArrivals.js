import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Commercial Printers" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Samsung Printer 1567"
            price="14000"
            color="Black"
            badge={true}
            des="Advanced technology for sharp, vibrant images and text."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Samsung Smart Printer 1976"
            price="12500"
            color="Black"
            badge={true}
            des="High-resolution output perfect for professional documents and photos.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Samsung Printer 1827"
            price="8990"
            color="Mixed"
            badge={true}
            des="Energy-saving modes and certifications for lower electricity bills.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Samsung Hyper 7869"
            price="12300"
            color="Mixed"
            badge={false}
            des="Multiple connectivity options: Wi-Fi, Ethernet, USB, and mobile printing."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Samsung Hyper 7864"
            price="9900"
            color="Mixed"
            badge={false}
            des="High-yield cartridges reduce cost per page.."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
