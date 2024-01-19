import React from "react";
import Phonetile from "./Phonetile";

export default function HomeLaptopSection() {
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
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <Phonetile
          name={"Apple Macbook Pro 2020"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/72de0a25-b95e.jpg?p=es3sq&s=es"
          }
          price={68000}
        />
        <Phonetile
          name={"Apple Macbook Pro 2020"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/72de0a25-b95e.jpg?p=es3sq&s=es"
          }
          price={68000}
        />
        <Phonetile
          name={"Apple Macbook Pro 2020"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/72de0a25-b95e.jpg?p=es3sq&s=es"
          }
          price={68000}
        />
        <Phonetile
          name={"Apple Macbook Pro 2020"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/72de0a25-b95e.jpg?p=es3sq&s=es"
          }
          price={68000}
        />
      </div>
    </div>
  );
}
