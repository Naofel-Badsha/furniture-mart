import React from "react";
import Herobanner from "../../../public/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipeButton from "../../Components/TooltipeButton";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Herobanner})`,
      }}
    >
      <div className="md:pt-48 px-2 pt-24 text-center space-y-5 text-white md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">
          Make your interior more minimalistic & modern
        </h1>

        <p className="text-2xl font-normal lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/*----------------Search--------*/}
        <div className="relative inline-block z-30 animate-pulse">
          <input
            type="search"
            placeholder="Search Furniture"
            className="w-full md:w-80 py-2 px-6 bg-white/25 rounded-full border placeholder:text-white border-gray-200 focus-none outline-none"
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-[#E58411] rounded-full">
            <FaSearch className="" />
          </div>
        </div>
      </div>
      {/*------Blur----Effict--------------*/}
      <div className="absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/*----------Hovrt--------Button----- TooTipe-----------*/}
      <div className="hidden xl:block absolute bottom-40 left-24">
        <TooltipeButton position="bottom"></TooltipeButton>
      </div>
    </section>
  );
};

export default Hero;
