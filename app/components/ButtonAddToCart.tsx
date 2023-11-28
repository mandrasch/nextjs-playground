"use client"; // <- not server side rendered, JS actions available
import React from "react";

const ButtonAddToCart = () => {
  return (
    <button
      onClick={() => {
        console.log("click");
      }}
      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full"
    >
      Add to Cart
    </button>
  );
};

export default ButtonAddToCart;
