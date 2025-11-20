import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination } from "swiper/modules";
import { reviews } from "../../Utils/reviews";
import { Navigation } from 'swiper/modules';
import Rating from "../../Components/Rating";

const Testimonial = () => {
  return (
    <section className="max-w-screen-2xl container mx-auto py-6 px-4 px-8">
      <div className="mb-20">
        <h3 className="text-xl text-center text-[#FFA704] font-semibold mb-4">
          TESTIMONIAL
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Client Reviews
        </h1>
      </div>
      {/*-----------Review-------Slider---------*/}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="md:h-[547px] flex items-center justify-center  mb-4">
              <div className="mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={review.image}
                  className="size-16 absolute -top-8 ring-2 ring-[#FF8904] object-cover rounded-full left-1/2 -translate-x-1/2"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font-semibold dark:text-black">
                    {review.name}
                  </h3>
                  <p className="mb-3 dark:text-black">Verifide Customer</p>
                  <p className="text-gray-500 dark:text-black mb-4">
                    {review.review}
                  </p>
                  <div className="flex items-center justify-center mb-2 w-full m-auto">
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </section>
  );
};

export default Testimonial;
