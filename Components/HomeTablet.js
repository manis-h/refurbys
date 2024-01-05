import React from "react";
import Phonetile from "./Phonetile";

export default function HomeTablet() {
  return (
    <div>
      <div className="mx-2 my-5">
        <h1
          className=" "
          style={{
            color: "#56aa49",
            textShadow:
              " -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen, 0 -1px lightgreen",
          }}
        >
          Buy Refurbished tablet
        </h1>
        <p className="text-success">View all</p>
      </div>
      <div
        className="flex flex-1 text-center justify-content-center"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
        <Phonetile
          name={"Ipad Pro 2020"}
          src={
            "https://s3n.cashify.in/cashify/product/img/xhdpi/e8e9a4e5-4197.jpg"
          }
          price={68000}
        />
      </div>
    </div>
  );
}
