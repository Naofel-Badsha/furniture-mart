import React from "react";
import banner from "../../../public/subBanner2.jpg";
import Mission from "./Mission";
import AchivedMent from "./AchivedMent";
import Testimonial from "../Home/Testimonial";
import ExtraSection from "./ExtraSection";
const About = () => {
  return (
    <section className="min-h-screen">
      {/*---------Banner--------*/}
      <div
        className="w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner}` }}
      >
        <h1 className="text-4xl font-bold ">Our About Us</h1>
      </div>

      <div>
        <Mission />
        <AchivedMent />
        <ExtraSection />
        <Testimonial />
      </div>
    </section>
  );
};

export default About;
