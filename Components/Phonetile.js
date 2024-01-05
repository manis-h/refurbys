import React from "react";

export default function Phonetile({ src, name, price }) {
  return (
    <div className="m-2 shadow-lg">
      <img
        style={{ maxHeight: "288px" }}
        src={src}
        // "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
        alt=""
        className="w-75"
      />
      <br />
      <p>{name}</p>
      <p className="text-danger">Rs {price}</p>
    </div>
  );
}
