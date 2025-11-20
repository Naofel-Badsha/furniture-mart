import React from 'react';
import { FaClock, FaEnvelope, FaMap, FaPhone, FaTimes } from 'react-icons/fa';


const CallToUs = () => {
    return (
      <section className="max-w-screen-2xl container mx-auto md:py-18 px-4 my-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/*----------------Card--------1-------------*/}
          <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
            <div className="bg-[#FFA704] w-fit p-5 rounded-full m-auto ">
              <FaMap className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-black font-semibold mt-8 text-center">
                Our Location
              </h3>
              <p className="text-[16px] mt-3 text-center font-medium">
                200 12th Ave, New York, NY 10001, USA
              </p>
            </div>
          </div>
          {/*----------------Card--------2-------------*/}
          <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
            <div className="bg-[#FFA704] w-fit p-5 rounded-full m-auto">
              <FaPhone className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-black font-bold mt-8 text-center">
                Call Us
              </h3>
              <p className="text-[16px] mt-3 text-center font-medium">T +1 222 333 4444</p>
              <p className="text-[16px] text-center font-medium">F +1 222 333 5555</p>
            </div>
          </div>
          {/*----------------Card--------3-------------*/}
          <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
            <div className="bg-[#FFA704] w-fit p-5 rounded-full m-auto">
              <FaEnvelope className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-black font-bold mt-8 text-center">
                Our Email
              </h3>
              <p className="text-[16px] mt-3 text-center font-medium">
                furnuturemart@gmail.com
              </p>
            </div>
          </div>
          {/*----------------Card--------4-------------*/}
          <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
            <div className="bg-[#FFA704] w-fit p-3 rounded-full m-auto">
              <FaClock className="text-4xl text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-black font-bold mt-8 text-center">
                Working hours
              </h3>
              <p className="text-[16px] mt-3 text-center font-medium">
                Mon - Sat: 10 am - 6 pm
              </p>
              <p className="text-[16px] text-center font-medium">
                Sun 12pm - 2 pm
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CallToUs;