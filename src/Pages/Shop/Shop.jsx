import React from "react";
import banner from "../../../public/shopBanner-2.webp";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/*---------Banner--------*/}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white "
        style={{ backgroundImage: `url(${banner}` }}
      >
        <h1 className="text-4xl font-bold">Our Shop Product</h1>
      </div>
      <div className="mt-28">
        <Products headline="What's Your Choice" />
      </div>
    </section>
  );
};

export default Shop;
