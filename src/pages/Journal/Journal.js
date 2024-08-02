import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Shop-IT</span>{" "}
          is an innovative e-commerce platform designed to revolutionize the
          online shopping experience. Our goal is to provide a seamless,
          user-friendly interface where customers can find a wide range of
          high-quality products at competitive prices. Shop-IT stands out with
          its commitment to exceptional customer service, fast and reliable
          shipping, and secure payment options. Whether you're looking for the
          latest tech gadgets, stylish apparel, or everyday essentials, Shop-IT
          offers a comprehensive selection to meet all your needs. Our platform
          is optimized for both desktop and mobile devices, ensuring a
          convenient and enjoyable shopping experience anytime, anywhere. Join
          the Shop-IT community today and discover the future of online
          shopping!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
