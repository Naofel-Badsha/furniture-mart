import React from "react";
import expriencesImages from "../../assets/expricences.png";
import Button from "./Button";

const Expriences = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4 my-24">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        <div className="md:w-1/2 md:h-[541px] flex-1">
          <img src={expriencesImages} alt="" className="h-full w-full" />
        </div>
        <div className="flex-1 ">
          <h3 className="text-xl text-[#FFA704] font-semibold mb-4">
            EXPERIENCES{" "}
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold">
            We Provide You The Best Experience
          </h1>
          <p className="text-[18px] mt-5 lg:w-2/2">
            You dorit have to wurry utxa the seat bosiusex Се Interiors are moda
            by people who sans protasines in then froids with on ologant and
            lucudous style and with premium quality materia's
          </p>
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
};

export default Expriences;
