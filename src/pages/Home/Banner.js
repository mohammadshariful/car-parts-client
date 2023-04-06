import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/Banner/banner1.jpg";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner3 from "../../assets/Banner/banner3.jpg";

const Banner = () => {
  const bannerSlider = [
    {
      bannerImg: banner1,
      bannerIntro: 'Car parts manufacturer that specializes in automotive seating.',
      bannerDescription: 'Below you will be able to find all Car parts manufacturer that specializes in automotive seating.'
    },
    {
      bannerImg: banner2,
      bannerIntro: 'We are manufacturing car parts.',
      bannerDescription: 'We have been manufacturing different types of car spare parts for more than 20 years. They are dedicated to supplying quality products at competitive prices. Shanghai DoGood Industry has a wide range of products including engine system/ starter, auto sensors, auto switch, and auto brake system.'
    },
    {
      bannerImg: banner3,
      bannerIntro: 'We are provides our best services.',
      bannerDescription: 'Proper parts is one of the largest promotional products suppliers in the world. We understand that your products need to fit your brand and promotion.'
    },
  ]
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
    >
      {
        bannerSlider.map((item, index) => <SwiperSlide key={index}>
          <div className="lg:h-[60vh] flex justify-between  flex-col-reverse lg:flex-row">
            <div className="lg:w-full lg:w-50 flex justify-center items-center h-full ">
              <div className="pt-2 sm:p-10 ">
                <h4 className="text-lg sm:text-xl">{item.bannerIntro}</h4>
                <p className="text-sm text-slate-900">{item.bannerDescription}</p>
                <button
                  className="text-sm border-[1px] border-blue-500 bg-blue-500 px-2 py-1 mt-4 rounded-[4px] text-white hover:bg-transparent hover:text-blue-500"
                >
                  Explore Now
                </button>
              </div>
            </div>
            <div className="w-full lg:w-50">
              <img className="h-full rounded-sm" src={item.bannerImg} alt={item.bannerIntro.slice(0, 10)} />
            </div>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  );
};

export default Banner;
