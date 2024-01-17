import React, { useState } from "react";
import Phonetile from "./Phonetile";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePhoneSection() {
  const [data, setData] = useState();
  const getproducts = async () => {
    const response = await fetch("/api/getproducts");
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
            textShadow:
              " -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen",
          }}
        >
          Buy Refurbished Phones
        </h1>
        <p className="text-success text-end px-2 mx-5">View all</p>
      </div>
      <div
        className="flex flex-1 text-center justify-content-center"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        {data?.data?.map((i) => (
          <Phonetile
            brand={i?.brand}
            model={i?.model}
            name={`${i?.brand} ${i?.model}`}
            src={i?.images?.[0]}
            price={i?.variants[0]?.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
}
