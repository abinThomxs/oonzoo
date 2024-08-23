import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const ProductDetails = (product) => {
  console.log(product);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center w-full pt-8 lg:pt-16 px-4 lg:px-0 pb-10">
        <div className="lg:w-[70%] bg-white rounded-lg p-5 flex flex-col lg:flex-row justify-around items-center lg:items-start">
          <div className="w-full lg:w-auto flex justify-center">
            <Image
              src={product.product.image}
              alt="product image"
              className="mt-6 w-[80%] lg:w-[300px] object-contain"
              width={300}
              height={500}
            />
          </div>
          <div className="m-4 lg:m-10 p-4 lg:p-8 w-full lg:w-[70%] text-justify">
            <h1 className="font-bold text-2xl sm:text-3xl">
              {product.product.title}
            </h1>
            <h2 className="font-bold text-lg sm:text-lg text-slate-500 my-2">
              {product.product.category}
            </h2>
            <p className="text-sm sm:text-base">
              {product.product.description}
            </p>
            <h3 className="font-extrabold text-lg sm:text-xl text-red-800 my-2">
              {product.product.price} AED
            </h3>
            <div className="flex justify-start mt-4">
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <span className="ml-2 text-sm sm:text-base">
                  {product.product.rating.rate}
                </span>
              </div>
              <div className="flex items-center ml-5">
                <AiFillLike className="text-blue-500" />
                <span className="ml-2 text-sm sm:text-base">
                  {product.product.rating.count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
