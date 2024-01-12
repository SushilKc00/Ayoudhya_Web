import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BookForm } from "../../Components/BookForm/BookForm";
import { Header } from "../../Components/Header/Header";
import roomDetailBackgroundImage from "../../assets/roomdetailimgback.webp";
import roomimg1 from "../../assets/roomimg1.png";
import singleroom1 from "../../assets/singleroom1.png";
import singleroom2 from "../../assets/singleroom2.jpg";
import singleroom3 from "../../assets/singleroom3.jpg";

import RoomsSwiper from "../../Components/Swiper/RoomsSwiper";
import { RoomsCards } from "../../Components/Cards/RoomsCards";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const roomImages = [
  {
    img: roomimg1,
    roomType: "Single Room",
  },
  {
    img: roomimg1,
    roomType: "Double Room",
  },
  {
    img: roomimg1,
    roomType: "Single Room",
  },
];

const roomPreviewImages = [
  singleroom1,
  singleroom2,
  singleroom3,
  singleroom1,
  singleroom3,
  singleroom2,
  singleroom3,
];

const roomServicesData = [
  {
    name: "Double Bed",
    isAvailable: true,
  },
  {
    name: "free wifi",
    isAvailable: true,
  },
  {
    name: "Flat screen tv",
    isAvailable: false,
  },
  {
    name: "Breakfast include",
    isAvailable: true,
  },
  {
    name: "Free Newspaper",
    isAvailable: false,
  },
  {
    name: "full ac",
    isAvailable: true,
  },
];

export const RoomSecond = () => {
  return (
    <div className="rooms_another_section">
      <Header />

      <div
        className="paralax_container"
        style={{
          backgroundImage: `url(${roomDetailBackgroundImage})`,
        }}
      >
        <div>
          <div>
            <h2 className="text-white sm:text-7xl text-5xl ">Single Room</h2>
            <p className="mt-8 text-2xl text-white">
              Home / Rooms / <span className="text-[#DEB666]">Single Room</span>
            </p>
          </div>
        </div>
      </div>

      <div className="xl:w-[80%] m-auto flex md:flex-row flex-col xl:px-0 px-5 room_another_container gap-6">
        <div className="xl:w-[70%]">
          <div className="swiper_area">
            <RoomsSwiper images={roomPreviewImages} />
            {/* <div className="flex gap-10 my-8">
              {roomImages.map((i) => (
                <div>
                  <img
                    src={i.img}
                    alt=""
                    style={{
                      height: "80px",
                    }}
                  />
                </div>
              ))}
            </div> */}
          </div>
          <div className="about_hotel mt-24">
            <h2 className="text-6xl">About Hotel Awadh Vilas</h2>
            <p className="text-gray-600 md:text-[1.5rem] mt-8 text-xl py-2 text-justify">
              Awadh Vilas is a heritage hotel located in Ayodhya, a city in the
              northern Indian state of Uttar Pradesh. The hotel is known for its
              grand architecture and luxurious amenities, offering a unique
              experience to its guests.
            </p>
            <p className="text-gray-600 md:text-[1.5rem] mt-8 text-xl py-2 text-justify">
              The hotel boasts of spacious rooms and suites that are adorned
              with intricate woodwork and traditional artwork, reflecting the
              rich cultural heritage of Ayodhya. The rooms are equipped with
              modern amenities, such as air-conditioning, flat-screen TVs, and
              high-speed internet, ensuring a comfortable stay for guests.
            </p>
            <p className="text-gray-600 md:text-[1.5rem] mt-8 text-xl py-2 text-justify">
              Awadh Vilas also has a multi-cuisine restaurant that serves a
              range of Indian and international delicacies. The restaurant is
              known for its delectable Awadhi cuisine, which is a popular
              culinary style of the region. Guests can enjoy their meals in the
              elegant dining hall or in the outdoor seating area that overlooks
              the hotel's lush gardens.
            </p>
            <p className="text-gray-600 md:text-[1.5rem] mt-8 text-xl py-2 text-justify">
              In addition to its luxurious accommodations and fine dining, Awadh
              Vilas also offers various recreational activities for guests
              providing a complete experience of relaxation and rejuvenation.
            </p>
          </div>

          <div className="room_services mt-24">
            <h2 className="text-5xl tracking-[0.1rem] uppercase font-semibold">
              Room Services
            </h2>
            <div className="grid grid-cols-3 mt-20 gap-y-5 ">
              {roomServicesData.map((s) => (
                <p className="md:text-xl text-lg font-semibold flex gap-2 items-center capitalize">
                  {s.isAvailable ? (
                    <IoCheckmark size={17} className="text-green-700" />
                  ) : (
                    <RxCross2 size={17} className="text-red-700" />
                  )}

                  {s.name}
                </p>
              ))}
            </div>
          </div>

          <div className="similar_rooms mt-44">
            <h2 className="text-5xl tracking-[0.1rem] uppercase font-semibold">
              Similar Rooms
            </h2>
            <div className="flex lg:flex-row flex-col gap-5 mt-20">
              {roomImages.map((d) => (
                <RoomsCards roomDetails={d} />
              ))}
            </div>
          </div>
        </div>

        <div className="xl:w-[30%]">
          <BookForm />
          <div className="mt-12 need_help">
            <h3 className="flex gap-5 items-center">
              <span className="bg-blue-300">
                <MdKeyboardArrowRight size={20} />
              </span>{" "}
              NEED HELP?
            </h3>
            <div className="bg-[#edd8a8]">
              <div>
                <p>
                  If you have any question please don't hesitate to contact us
                </p>
                <a href="" className="flex gap-2 items-center">
                  <AiOutlinePhone size={12} /> +917894561230
                </a>
                <a
                  href="mailto:contact@hotelawadhvilasayodhya.com"
                  className="flex gap-2 items-center"
                >
                  <AiOutlineMail size={12} /> contact@hotelawadhvilasayodhya.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
