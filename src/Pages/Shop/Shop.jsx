import React from "react";
import banner from "../../../public/shopBanner-2.webp";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/*---------Banner--------*/}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner}` }}
      >
        <h1 className="text-4xl font-bold ">Our Shop Product</h1>
      </div>
      <Products headline="what's Your Choice"/>
    </section>
  );
};

export default Shop;
