import Link from "next/link";
import React from "react";

export default function Phonetile({ brand, model, src, name, price }) {
  return (
    <div className="m-2 shadow-lg">
      <Link
        style={{ textDecoration: "none" }}
        href={`/mobiles/${brand}-${model}`}
      >
        <img
          style={{ maxHeight: "288px" }}
          src={src}
          // "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
          alt=""
          className="w-75"
        />
        <br />
        <p className="text-capitalize">{name}</p>
        <p className="text-danger">Rs {price}</p>
      </Link>
    </div>
  );
}
