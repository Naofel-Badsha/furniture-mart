import React from "react";
import { getImgUrl } from "../../Utils/getImageURL";
import Rating from "../../Components/Rating";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <div className="bg-[#fafafa]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-md">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="font-semibold tetx-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-black dark:text-white">
            <sup>$</sup>
            {product.price}
            <span></span>
          </p>
          <button className="bg-black text-white text-2xl hover:rotate-180 cursor-pointer transition duration-300 p-2 rounded-full hover:bg-gray-700">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
