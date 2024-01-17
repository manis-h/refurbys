"use client";
import React from "react";
import HomeProductCard from "./HomeProductCard";

export default function OurServics() {
  return (
    <div className="">
      <h1
        className="text-center my-5"
        style={{
          color: "#56aa49",
          textShadow:
            " -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen",
        }}
      >
        Our Services
      </h1>
      <div
        className="flex flex-1 text-center justify-content-center"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp"
          }
          name={"Sell Phone"}
        />
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp"
          }
          name={"Buy Phone"}
        />
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp"
          }
          name={"Sell Tablet"}
        />
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp"
          }
          name={"Buy Tablet"}
        />
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/3e1f26febd3f4056a7ac5104a122aa94.webp"
          }
          name={"Buy Laptop"}
        />
        <HomeProductCard
          img={
            "https://s3n.cashify.in/builder/e6ba507509994216936925bdfeb6cfa8.webp"
          }
          name={"Sell Laptop"}
        />
      </div>
    </div>
  );
}
