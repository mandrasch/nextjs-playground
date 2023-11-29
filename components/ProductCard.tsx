import React from "react";
import ButtonAddToCart from "@/components/ButtonAddToCart";

const ProductCard = () => {
  return (
    <div>
      <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6">
        <img
          className="w-full h-48 object-cover mb-6"
          src="https://picsum.photos/seed/picsum/400"
          alt="Product Image"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
          <p className="text-gray-600 mt-2">Product Description goes here.</p>
          <p className="text-gray-700 font-bold mt-2">€ 19.99</p>
          {/* The button is moved to a client component, therefore the rest of this here is SSR */}
          <ButtonAddToCart></ButtonAddToCart>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
