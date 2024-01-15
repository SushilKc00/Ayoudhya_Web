import React, { useRef, useState } from "react";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function RoomsSwiper({ images }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slideRight = () => {
    if (imgIndex === images.length - 1) return;
    setImgIndex(imgIndex + 1);
  };

  const slideLeft = () => {
    if (imgIndex <= 0) return;
    setImgIndex(imgIndex - 1);
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((i, index) => (
          <SwiperSlide>
            <img
              src={i}
              alt={i}
              loading="lazy"
              decoding="async"
              className="cursor-pointer"
              onClick={() => {
                setPreviewImage(true);
                setImgIndex(index);
                window.document.body.classList.add("bg_salmon");
              }}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {images?.map((i) => (
          <SwiperSlide>
            <img
              src={i}
              loading="lazy"
              decoding="async"
              className="cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {previewImage && (
        <div className="fixed top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-10 flex flex-col justify-center items-center">
          <div className="relative bg-green-500 w-[80%] m-auto">
            <img
              src={images[imgIndex]}
              loading="lazy"
              decoding="async"
              alt=""
            />
            <p
              className="text-4xl text-white bg-slate-900 w-20 h-20 flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-13%] right-[-3%]"
              onClick={() => {
                setPreviewImage(false);
                window.document.body.classList.remove("bg_salmon");
              }}
            >
              X
            </p>
          </div>
          <span
            className="fixed top-[50%] left-[2rem] p-4 bg-[#DEB666] cursor-pointer rounded-lg"
            onClick={() => {
              slideLeft();
            }}
          >
            <IoMdArrowDropleftCircle size={20} />
          </span>
          <span
            className="fixed top-[50%] right-[2rem] p-4 bg-[#DEB666] cursor-pointer rounded-lg"
            onClick={() => {
              slideRight();
            }}
          >
            <IoMdArrowDroprightCircle size={20} />
          </span>
        </div>
      )}
    </>
  );
}
