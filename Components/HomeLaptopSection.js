"use client";
import React, { useEffect, useState } from "react";
import Phonetile from "./Phonetile";
import Slider from "react-slick";
import { settings } from "./HomePhoneSection";

export default function HomeLaptopSection() {
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch(`/api/getproducts?category=laptop`);
    setData(await response.json());
  };

  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      <div className="mx-2 my-5">
        <h1
          className="text-center"
          style={{
            color: "#56aa49",
            // textShadow:
            //   " -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen",
          }}
        >
          Buy Refurbished Laptops
        </h1>
        <p className="text-success text-end mx-5 px-2">View all</p>
      </div>
      <div
        className="flex flex-1 text-center justify-content-center"
        // style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <Slider {...settings}>
          {data?.data?.map((i, index) => (
            <Phonetile
              category={"laptops"}
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
