import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { CiStar } from "react-icons/ci";
import { BsCheck2Square } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RoomsCards } from "../../Components/Cards/RoomsCards";
import { Link } from "react-router-dom";
import { NewEventCard } from "../../Components/Cards/NewEventCard";
import temple1 from "../../assets/temple1.png";
import temple2 from "../../assets/temple2.png";
import temple3 from "../../assets/temple3.png";
import temple4 from "../../assets/temple4.png";
import roomimg1 from "../../assets/roomimg1.png";
import newsimg1 from "../../assets/newsimg1.png";
import { ServiceSwiper } from "../../Components/Swiper/ServiceSwiper";
import { useServiceHook } from "../../Context/ServiceContextProvider";
import useScrollTop from "../../Components/useScrollTop";

const templeImages = [
  {
    name: "Shri Ram Janmbhoomi",
    img: temple1,
  },
  {
    name: "Shri Ram Janmbhoomi",
    img: temple2,
  },
  {
    name: "Shri Ram Janmbhoomi",
    img: temple3,
  },
  {
    name: "Shri Ram Janmbhoomi",
    img: temple4,
  },
];

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

const newsImgages = [
  {
    img: newsimg1,
    heading: "Live your myth in Greece",
    para: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
  },
  {
    img: newsimg1,
    heading: "Live your myth in Greece",
    para: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
  },
  {
    img: newsimg1,
    heading: "Live your myth in Greece",
    para: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
  },
  {
    img: newsimg1,
    heading: "Live your myth in Greece",
    para: "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
  },
];

const serviceArr = [
  {
    name: "Restaurant",
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
  {
    name: "Spa - Beauty & Health",
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
  {
    name: "Conference Room",
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
  {
    name: "Swimming Pool",
    detail:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
    icon: "icons",
  },
];

export const Home = () => {
  const [playVideo, SetPlayVideo] = useState(false);
  const { slideIndexValue } = useServiceHook();

  // useScrollTop();

  return (
    <div>
      {/* WELCOME SECTION....... */}
      <section className="welcome_section">
        <div className="welcome_container">
          <Header Color={"white"} />
          <div className="lg:flex gap-3 px-5 xl:w-[75%] m-auto mt-28">
            <div className="lg:w-[80%]">
              <h2 className="sm:text-6xl text-4xl text-white font-semibold leading-snug">
                Welcome to Hotel Awadh Vilas & Restaurant
              </h2>
              <div className="flex gap-4 items-center mt-12">
                <div className="text-white flex gap-2">
                  <CiStar size={30} />
                  <CiStar size={30} />
                  <CiStar size={30} />
                  <CiStar size={30} />
                  <CiStar size={30} />
                </div>
                <p className="sm:text-5xl text-3xl text-white">
                  Star Luxury Hotel
                </p>
              </div>
              <div className="flex flex-col gap-14 mt-12 text-white">
                <p className="sm:text-3xl text-2xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>
                <p className="sm:text-3xl text-2xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>{" "}
                <p className="sm:text-3xl text-2xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>
              </div>
            </div>
            <div className="lg:w-[35%] lg:mt-0 mt-10">
              <form
                action=""
                className="bg-white flex flex-col gap-5 pb-8 rounded-lg"
              >
                <h2 className="bg-gray-200 text-center p-3 text-4xl font-bold rounded-lg">
                  Book Online
                </h2>
                <div className="gap-2 px-8">
                  <input
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="gap-2 px-8">
                  <input
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="gap-2 px-8">
                  <input
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="gap-2 px-8">
                  <select
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                    placeholder="Enter Your Phone Number"
                  >
                    <option value="" className="text-gray-400 text-2xl">
                      Select Room Type
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                  </select>
                </div>
                <div className="flex gap-2 px-8">
                  <select
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                  >
                    <option value="" className="text-gray-400 text-2xl">
                      Adults
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                  </select>
                  <select
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                  >
                    <option value="" className="text-gray-400 text-2xl">
                      Adults
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                  </select>
                </div>
                <div className="flex gap-2 px-8">
                  <select
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                  >
                    <option value="" className="text-gray-400 text-2xl">
                      Adults
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                  </select>
                  <select
                    type="text"
                    className="w-full p-4 text-xl border border-gray-300 outline-none"
                  >
                    <option value="" className="text-gray-400 text-2xl">
                      Adults
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                    <option value="" className="text-gray-400 text-2xl mt-5">
                      Single Room
                    </option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#B69854] text-white text-3xl w-[90%] py-4">
                    Book A Room Now
                  </button>
                </div>
                <p className="text-center text-lg text-gray-400">
                  Advance Booking From
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS SECTION..... */}
      <section className="rooms_section">
        <div className="favorite_rooms">
          <h2 className="md:text-5xl text-3xl text-center font-bold text-gray-600">
            OUR ROOMS
          </h2>
          <p className="text-center md:text-2xl text-xl lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex lg:flex-row flex-col gap-5">
            {roomImages.map((d) => {
              return <RoomsCards roomDetails={d} />;
            })}
          </div>
          <div className="flex justify-center">
            <Link>
              <button className="bg-[#d5b977] text-white text-2xl px-5 py-2">
                View Room List
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION... */}
      <section className="service_section">
        <div className="service_container">
          <h2 className="md:text-5xl text-3xl text-center font-bold text-gray-600">
            OUR AWESOME SERVICES
          </h2>
          <p className="text-center md:text-2xl text-xl lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex items-center gap-8 md:flex-row flex-col">
            <div className="left lg:w-[60%] md:w-[50%] w-[100%]">
              <ServiceSwiper />
            </div>
            <div className="right  lg:w-[40%] md:w-[50%] w-[100%] flex flex-col gap-11">
              {serviceArr.map((s, index) => (
                <div
                  className="flex items-center gap-10 bg-white px-5 py-3"
                  key={s}
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
              {/* <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="lg:text-3xl text-2xl text-gray-700">
                    Resturant
                  </h4>
                  <p className="lg:text-[1.3rem] text-[1rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="lg:text-3xl text-2xl text-gray-700">
                    Resturant
                  </h4>
                  <p className="lg:text-[1.3rem] text-[1rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="lg:text-3xl text-2xl text-gray-700">
                    Resturant
                  </h4>
                  <p className="lg:text-[1.3rem] text-[1rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS & EVENTS.... */}
      <section className="news_section">
        <div className="news_container">
          <h2 className="md:text-5xl text-3xl text-center font-bold text-gray-600">
            LATEST NEWS & EVENTS
          </h2>
          <p className="text-center md:text-2xl text-xl lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="grid lg:grid-cols-2 justify-center gap-y-10">
            {newsImgages.map((d) => {
              return <NewEventCard newsDetails={d} />;
            })}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION.... */}
      <section className="video_section">
        <div className="video_preview">
          <div
            className="cursor-pointer text-gray-200 hover:scale-125 transition-all"
            onClick={() => {
              SetPlayVideo(true);
            }}
          >
            <FaRegCirclePlay size={120} />
          </div>
          {playVideo && (
            <div className="video_container">
              <h2
                className="text-white text-5xl cursor-pointer text-end py-3"
                onClick={() => {
                  SetPlayVideo(false);
                }}
              >
                X
              </h2>
              <div className="h-[100%]">
                <video
                  src="https://hotelawadhvilasayodhya.com/wp-content/uploads/2023/04/hotelawadhvilasayodhya.mp4"
                  autoPlay
                  controls
                ></video>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* VISIT PLACE....... */}
      <section className="visit_place_section">
        <div className="visit_place_container">
          <h2 className="md:text-5xl text-3xl text-center font-bold text-gray-600">
            Must Visit Places In
          </h2>
          <h3 className="md:text-6xl text-3xl text-center font-bold text-[#A94E00] uppercase -tracking-tighter">
            Ayodhya Ji
          </h3>
          <div className="flex  md:flex-row md:flex-nowrap flex-wrap ustify-center gap-5">
            {templeImages.map((i) => {
              return (
                <div className="temple_cards">
                  <div className="w-full h-[230px]">
                    <img src={i.img} alt="" />
                    <div className="shree_ram text-5xl">
                      !! 🚩जय श्री राम🚩 !!
                    </div>
                  </div>
                  <h4 className="text-3xl capitalize text-red-700 font-extrabold py-2 text-center">
                    {i.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION..... */}
      <section className="location_contact_section">
        <div className="contact_container">
          <h2 className="md:text-5xl text-3xl text-center font-bold text-gray-600">
            LOCATION - CONTACT US
          </h2>
          <p className="text-center md:text-2xl text-xl lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex gap-8 lg:flex-row flex-col">
            <div className="left xl:w-[50%] w-[100%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52632082853!2d76.76357549901144!3d28.643684629087268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1704876004704!5m2!1sen!2sin"
                height="370"
                style={{ border: 0, width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="right xl:w-[50%] w-[100%] flex flex-col gap-10">
              <form action="" className="flex flex-col gap-5">
                <div className="flex sm:flex-row flex-col gap-2">
                  <a
                    href=""
                    className="flex items-center text-xl text-white w-full bg-[#debb6c] px-4 py-2"
                  >
                    <CiLocationOn size={18} />
                    Ayodhya
                  </a>
                  <a
                    href=""
                    className="flex items-center text-xl text-white w-full bg-[#debb6c] px-4 py-2"
                  >
                    <GiRotaryPhone size={18} />
                    +7894561230
                  </a>{" "}
                  <a
                    href=""
                    className="flex text-xl text-white w-full bg-[#debb6c] px-4 py-2"
                  >
                    <AiOutlineMail size={18} />
                    contact@hotelawadhvilasayodhya.com
                  </a>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email Address"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    type="text"
                    name=""
                    rows={5}
                    placeholder="Your Name"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>
                <button className="w-full bg-[#debb6c] text-white text-3xl py-6">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
