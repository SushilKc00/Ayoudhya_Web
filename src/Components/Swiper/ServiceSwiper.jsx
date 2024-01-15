import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { AiOutlineLineChart } from "react-icons/ai";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import serviceimg1 from "../../assets/serviceimg1.png";
import serviceimg2 from "../../assets/serviceimg2.png";
import serviceimg4 from "../../assets/serviceimg4.png";

const serviceArr = [
  {
    name: "Restaurant",
    img: serviceimg1,
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
  {
    name: "Swimming Pool",
    img: serviceimg2,
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
  {
    name: "Spa - Beauty & Health",
    img: serviceimg4,
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
];

export const ServiceSwiper = ({ i }) => {
  const [slideIndexValue, setSlideIndexValue] = useState(0);
  return (
    <div className="flex items-center gap-8 md:flex-row flex-col">
      <div className="lg:w-[60%] md:w-[50%] w-[100%]">
        <Swiper
          effect={"cube"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[EffectCube, Pagination, Autoplay]}
          onSlideChange={(i) => {
            setSlideIndexValue(i.realIndex);
          }}
        >
          {serviceArr.map((i, index) => (
            <SwiperSlide key={index}>
              <img src={i.img} loading="lazy" decoding="async" alt={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="right lg:w-[40%] md:w-[50%] w-[100%] flex flex-col gap-11 sm:mt-0 mt-8">
        {serviceArr.map((s, index) => (
          <div
            key={index}
            className="flex items-center gap-10 bg-white px-5 py-3"
            style={{
              background: slideIndexValue === index ? "#333333" : "white",
              color: slideIndexValue === index ? "white" : "#606060",
              transition: "all 0.5s ease-in",
            }}
          >
            <AiOutlineLineChart size={30} />
            <div className="">
              <h4 className="lg:text-3xl text-2xl ">{s.name}</h4>
              <p className="lg:text-[1.3rem] text-[1rem] leading-[2.2rem] mt-3">
                {s.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
