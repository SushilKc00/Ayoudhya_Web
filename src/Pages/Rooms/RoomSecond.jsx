import React from "react";
import { BookForm } from "../../Components/BookForm/BookForm";
import { Header } from "../../Components/Header/Header";
import aboutBackgroundImage from "../../assets/videoimg.jpg";
import roomimg1 from "../../assets/roomimg1.png";

import RoomsSwiper from "../../Components/Swiper/RoomsSwiper";
import { RoomsCards } from "../../Components/Cards/RoomsCards";

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

export const RoomSecond = () => {
  return (
    <div className="rooms_another_section">
      <Header />
      <div
        className="paralax_container"
        style={{
          backgroundImage: `url(${aboutBackgroundImage})`,
        }}
      >
        <div>
          <div>
            <h2 className="text-white sm:text-7xl text-5xl ">Single Room</h2>
          </div>
        </div>
      </div>
      <div className="xl:w-[80%] m-auto flex md:flex-row flex-col xl:px-0 px-5 room_another_container">
        <div className="w-[70%]">
          <RoomsSwiper />
          <div className="swiper_area"></div>
          <div className="about_hotel">
            <h2 className="text-6xl">About Hotel Awadh Vilas</h2>
            <p className="text-gray-600 md:text-3xl text-xl py-8 tracking-[0.2rem] leading-snug">
              Awadh Vilas is a heritage hotel located in Ayodhya, a city in the
              northern Indian state of Uttar Pradesh. The hotel is known for its
              grand architecture and luxurious amenities, offering a unique
              experience to its guests.
            </p>
            <p className="text-gray-600 md:text-3xl text-xl py-8 tracking-[0.2rem] leading-snug">
              The hotel boasts of spacious rooms and suites that are adorned
              with intricate woodwork and traditional artwork, reflecting the
              rich cultural heritage of Ayodhya. The rooms are equipped with
              modern amenities, such as air-conditioning, flat-screen TVs, and
              high-speed internet, ensuring a comfortable stay for guests.
            </p>
            <p className="text-gray-600 md:text-3xl text-xl py-8 tracking-[0.2rem] leading-snug">
              Awadh Vilas also has a multi-cuisine restaurant that serves a
              range of Indian and international delicacies. The restaurant is
              known for its delectable Awadhi cuisine, which is a popular
              culinary style of the region. Guests can enjoy their meals in the
              elegant dining hall or in the outdoor seating area that overlooks
              the hotel's lush gardens.
            </p>
            <p className="text-gray-600 md:text-3xl text-xl py-8 tracking-[0.2rem] leading-snug">
              In addition to its luxurious accommodations and fine dining, Awadh
              Vilas also offers various recreational activities for guests
              providing a complete experience of relaxation and rejuvenation.
            </p>
          </div>
          <div className="room_services mt-24 ">
            <h2 className="text-6xl">Room Services</h2>
            <div className="grid grid-cols-3 mt-20 gap-y-5">
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
              <p className="text-2xl">Double Bed</p>
            </div>
          </div>
          <div className="similar_rooms mt-32">
            <h2 className="text-6xl uppercase">Similar Rooms</h2>
            <div className="flex gap-5 mt-20">
              {roomImages.map((d) => (
                <RoomsCards roomDetails={d} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <BookForm />
        </div>
      </div>
    </div>
  );
};
