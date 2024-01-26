import Link from "next/link";
import React from "react";

export default function Phonetile({
  category,
  brand,
  model,
  src,
  name,
  price,
}) {
  return (
    <div
      className="m-2 p-2 justify-content-center shadow-lg text-center rounded rounded-3"
      style={{ minHeight: "373px", minWidth: "357px" }}
    >
      <Link
        style={{ textDecoration: "none" }}
        href={`/${category}/${brand}-${model}`}
      >
        <center>
          <img
            style={{ maxHeight: "288px" }}
            src={src}
            // "https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=ess"
            alt=""
            className="w-75"
          />
        </center>
        <br />
        <p className="text-capitalize">{name}</p>
        <p className="text-danger">Rs {price}</p>
      </Link>
    </div>
  );
}
