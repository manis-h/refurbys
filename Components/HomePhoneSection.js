import React, { useState } from "react";
import Phonetile from "./Phonetile";
import Link from "next/link";
import { useEffect } from "react";
import CustomCarousel from "./CustomCarousel";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const settings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  // infinite: children?.length >= settings?.slidesToShow || children?.length >= 2,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <FaArrowAltCircleRight />,
  prevArrow: <FaArrowAltCircleLeft />,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function HomePhoneSection() {
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch("/api/getproducts?category=mobile");
    setData(await response.json());
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <div className="mx-2 my-5">
        <h1
          className=" text-center"
          style={{
            color: "#56aa49",
            // textShadow:
            //   " -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen",
          }}
        >
          Buy Refurbished Phones
        </h1>
        <p className="text-success text-end px-2 mx-5">View all</p>
      </div>

      <div
      // className="flex flex-1 text-center justify-content-center"
      // style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <Slider {...settings}>
          {data?.data?.map((i, index) => (
            <Phonetile
              category={"mobiles"}
              key={index}
              brand={i?.brand}
              model={i?.model}
              name={`${i?.brand} ${i?.model}`}
              src={i?.images?.[0]}
              price={i?.variants[0]?.discountedPrice}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
