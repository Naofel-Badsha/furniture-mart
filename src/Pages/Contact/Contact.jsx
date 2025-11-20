import React from 'react';
import banner from "../../../public/subBanner3.jpg";
import CallToUs from './CallToUs';
import ConactForm from './ConactForm';
const Contact = () => {
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
         <CallToUs />
         <ConactForm /> 
        </div>
      </section>
    );
};

export default Contact;