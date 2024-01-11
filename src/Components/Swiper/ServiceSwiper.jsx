import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import serviceimg1 from "../../assets/serviceimg1.png";
import serviceimg2 from "../../assets/serviceimg2.png";
import serviceimg3 from "../../assets/serviceimg3.png";
import serviceimg4 from "../../assets/serviceimg4.png";
import { useServiceHook } from "../../Context/ServiceContextProvider";

const serviceImages = [serviceimg1, serviceimg2, serviceimg3, serviceimg4];

export const ServiceSwiper = ({ i }) => {
  const { setSlideIndexValue } = useServiceHook();
  return (
    <div>
      <Swiper
        effect={"cube"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        onSlideChange={(i) => {
          console.log(i);
          setSlideIndexValue(i.activeIndex);
        }}
      >
        {serviceImages.map((i) => (
          <SwiperSlide>
            <img src={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
