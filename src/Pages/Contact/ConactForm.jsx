import React from "react";

const ConactForm = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto px-4 my-24">
      <div className="bg-[#FAFAFA] w-full px-5">
        <div className=" w-full   m-auto py-28">
          <form action="">
            <fieldset className="">
              <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
                
                <div className="flex-1">
                  <img src="https://i.ibb.co.com/ynGJv5Tg/home-about-img.png" />
                </div>

                <div className="flex-1">
                  {/*-------------Input----------1----------*/}
                  <label className="label label text-[18px] font-medium text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input w-full mt-2 border-[#FFA704] outline-none text-[16px]"
                    placeholder="Full Neme"
                  />

                  {/*-------------Input----------2----------*/}
                  <label className="label mt-5 label text-[18px] font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input w-full mt-2 border-[#FFA704] outline-none text-[16px]"
                    placeholder="Your Email"
                  />

                  {/*-------------Input----------3----------*/}
                  <label className="label mt-5 label text-[18px] font-medium text-black">
                    Phome
                  </label>
                  <input
                    type="number"
                    className="input w-full mt-2 border-[#FFA704] outline-none text-[16px]"
                    placeholder="Your Phone Number"
                  />
                  {/*-------------Input----------4----------*/}
                  <label className="label mt-5 label text-[18px] font-medium text-black">
                    Location
                  </label>
                  <input
                    type="text"
                    className="input w-full mt-2 border-[#FFA704] outline-none text-[16px]"
                    placeholder="Your Lovation"
                  />
                  {/*-------------Input----------1----------*/}
                  <label className="label text-[18px] font-medium text-black ">
                    Messages
                  </label>
                  <textarea
                    type="text"
                    className="input w-full mt-2 h-[200px] border-[#FFA704] outline-none text-[16px]"
                    placeholder="Your Messages"
                  />

                  <button className="btn bg-white border-white text-black hover:bg-[#FFA704] hover:text-white btn-neutral w-full text-xl mt-4 py-6">
                    Submit Now
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConactForm;
