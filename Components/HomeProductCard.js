import React from "react";

export default function HomeProductCard({ img, name }) {
  return (
    <div className="mx-4 border-2" style={{ borderColor: "#56aa49" }}>
      <img
        src={img}
        // "https://s3n.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp"
        className="roundedshadow-lg"
        height={100}
        alt=""
      />
      <br />
      {name}
    </div>
  );
}
