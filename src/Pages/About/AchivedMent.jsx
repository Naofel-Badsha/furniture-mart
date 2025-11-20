import { TbBrandSuperhuman } from "react-icons/tb";

const AchivedMent = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto md:py-18 px-4 my-24">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/*----------------Card--------1-------------*/}
        <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
          <div className="bg-[#FFA704] w-fit p-3 rounded-full m-auto ">
            <TbBrandSuperhuman className="text-4xl text-white" />
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mt-8 text-center">
              5000+ Happy customer
            </h3>
            <p className="text-[18px] mt-3 text-center">
              Absolutely delighted with the service! The team was professional
              and delivered beyond my expectations. Highly recommend!
            </p>
          </div>
        </div>
        {/*----------------Card--------2-------------*/}
        <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
          <div className="bg-[#FFA704] w-fit p-3 rounded-full m-auto">
            <TbBrandSuperhuman className="text-4xl text-white" />
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mt-8 text-center">
              29+ Awards won
            </h3>
            <p className="text-[18px] mt-3 text-center">
              Our company has been honored with the Outstanding Achievement
              Award and Best Industry Leader accolades in recent years.
            </p>
          </div>
        </div>
        {/*----------------Card--------3-------------*/}
        <div className="bg-[#FAFAFA] border-[#FAFAFA] hover:border-[#FFA704] border-[1px] py-10 px-10 rounded-xl">
          <div className="bg-[#FFA704] w-fit p-3 rounded-full m-auto">
            <TbBrandSuperhuman className="text-4xl text-white" />
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold mt-8 text-center">
              10+ years of experiences
            </h3>
            <p className="text-[18px] mt-3 text-center">
              With over all years of combined experience in the industry, our
              team excels in delivering top-notch solutions and services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchivedMent;
