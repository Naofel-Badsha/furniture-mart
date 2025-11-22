import React, { useContext } from "react";
import Herobanner from "../../../public/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipeButton from "../../Components/TooltipeButton";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../Context/ThemeContext";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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

      {/*-----------Night---And----Dark---Color-----Switcher------*/}
      <div className="absolute bottom-28 right-20 z-40">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full cursor-pointer"
        >
          {isDarkMode ? (
            <BsSun className="text-yellow-300" />
          ) : (
            <BsMoon className="text-yellow-300" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
