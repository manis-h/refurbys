import React from "react";
import Phonetile from "./Phonetile";

export default function HomePhoneSection() {
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
          Buy Refurbished Phones
        </h1>
        <p className="text-success">View all</p>
      </div>
      <div
        className="flex flex-1 text-center justify-content-center"
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
      >
        <Phonetile
          name={"Xiaomi Redmi 9 power"}
          src={
            "https://s3no.cashify.in/cashify/store/product//49a0b0f237eb4c0ab7393b3ae74f14d9.jpg?p=es5sq&s=es"
          }
          price={9000}
        />
        <Phonetile
          name={"Xiaomi Redmi 9 power"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
          }
          price={9000}
        />
        <Phonetile
          name={"Xiaomi Redmi 9 power"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
          }
          price={9000}
        />
        <Phonetile
          name={"Xiaomi Redmi 9 power"}
          src={
            "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
          }
          price={9000}
        />
      </div>
    </div>
  );
}
