import React from "react";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";
const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slider-1">
        <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row">
          <div className="lg:w-full lg:w-50 flex justify-center items-center h-full ">
            <div className="p-10">
              <h2 className="text-2xl text-primary">
                Car parts manufacturer that specializes in automotive seating
              </h2>
              <p>
                Below you will be able to find all Car parts manufacturer that
                specializes in automotive seating.
              </p>
              <button className="btn btn-primary mt-2 font-normal">
                Explore Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-50">
            <img className="h-full" src={banner1} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-2">
        <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row ">
          <div className=" lg:w-full lg:w-50 flex justify-center items-center h-full ">
            <div className="p-10">
              <h2 className="text-2xl text-primary">
                We are manufacturing car parts
              </h2>
              <p>
                We have been manufacturing different types of car spare parts
                for more than 20 years. They are dedicated to supplying quality
                products at competitive prices. Shanghai DoGood Industry has a
                wide range of products including engine system/ starter, auto
                sensors, auto switch, and auto brake system. .
              </p>
              <button className="btn btn-primary mt-2 font-normal">
                Explore Now
              </button>
            </div>
          </div>
          <div className=" w-full lg:w-50">
            <img className="h-full" src={banner2} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider-3">
        <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row">
          <div className=" lg:w-full lg:w-50 flex justify-center items-center h-full ">
            <div className="p-10">
              <h2 className="text-2xl text-primary">
                We are provides our best services
              </h2>
              <p>
                Proper parts is one of the largest promotional products
                suppliers in the world. We understand that your products need to
                fit your brand and promotion.
              </p>
              <button className="btn btn-primary mt-2 font-normal">
                Explore Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-50">
            <img className="h-full" src={banner3} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
