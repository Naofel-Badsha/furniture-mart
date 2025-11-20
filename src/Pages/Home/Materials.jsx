import React from "react";
import Button from "./Button";

const Materials = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4 my-24">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        <div className="flex-1">
          <h3 className="text-xl text-[#FFA704] font-semibold mb-4">
            MATERIALS
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            Very Serious Materials For Making Furniture
          </h1>
          <p className="text-[18px] dark:text-white mt-5 lg:w-1/2">
            Becouse Damp was very serious about ass gring furniture for our
            onvironment using a very experishio ona tomous.coptol but at a
            nutika yloxy groce
          </p>
          <Button text="More Info" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 md:items-end items-center md:w-1/2 ">
          <div>
            <img src="https://i.ibb.co.com/4wkWGm1x/material1.png" alt="" />
            <img src="https://i.ibb.co.com/PvDFfr6N/material2.png" alt="" />
          </div>

          <div className="md:col-span-2 col-span-1">
            <img
              src="https://i.ibb.co.com/5Xvq2YzP/material3.png"
              className="w-full md:h-[541px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
