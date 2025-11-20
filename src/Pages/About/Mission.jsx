import React from "react";
import { TbBrandSuperhuman } from "react-icons/tb";
import { SiMitsubishi } from "react-icons/si";
import Button from "../Home/Button";

const Mission = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4 my-24">
      {/*----------------Mission-----------------*/}
      <div className="flex flex-col md:flex-row">
        {/*------------Images--------*/}
        <div className="overflow-hidden md:w-1/2">
          <img
            className="transform hover:scale-125 duration-700 w-full md:h-[600px]"
            src="https://i.ibb.co.com/39KvJhcv/about-us-2.jpg"
            alt=""
          />
        </div>
        {/*------------Content-----------*/}
        <div className="bg-[#FAFAFA] md:w-1/2 flex items-center justify-center">
          <div className="px-5 py-10 md:px-20 md:py-20">
            <div className="bg-[#FFA704] w-fit p-3 rounded-full ">
              <TbBrandSuperhuman className="text-4xl text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-black mt-5">
              Crafting Furniture That Brings Comfort, Beauty, and Durability to
              Every Home
            </h1>
            <p className="mt-5 text-[18px]">
              Our mission is to design and build high-quality furniture that
              blends natural materials, skilled craftsmanship, and modern
              aesthetics. We aim to create pieces that not only enhance your
              living space but also make everyday life more comfortable,
              sustainable, and inspiring.
            </p>

            <button className="btn mt-10 px-8 bg-white hover:bg-[#FFA704] text-black text-[18px] hover:text-white border-[#FFA704]">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/*----------------Vision-----------------*/}
      <div className="flex flex-col md:flex-row">
        {/*------------Content-----------*/}
        <div className="bg-[#FAFAFA] md:w-1/2 flex items-center justify-center">
          <div className="px-5 py-10 md:px-20 md:py-20">
            <div className="bg-[#FFA704] w-fit p-3 rounded-full ">
              <SiMitsubishi className="text-4xl text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-black mt-5">
              To Become the Most Trusted Name in Modern, Sustainable Furniture
            </h1>
            <p className="mt-5 text-[18px]">
              Our vision is to lead the furniture industry with innovative
              designs, eco-friendly production, and exceptional customer
              experience. We aspire to create timeless products that elevate
              lifestyles, support sustainable living, and inspire people to
              build homes they truly love.
            </p>

            <button className="btn mt-10 px-8 bg-white hover:bg-[#FFA704] text-black text-[18px] hover:text-white border-[#FFA704]">
              Read More
            </button>
          </div>
        </div>
        {/*------------Images--------*/}
        <div className="overflow-hidden md:w-1/2">
          <img
            className="transform hover:scale-125 duration-700 w-full md:h-[600px]"
            src="https://i.ibb.co.com/7NTrxckH/about-us-3.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
