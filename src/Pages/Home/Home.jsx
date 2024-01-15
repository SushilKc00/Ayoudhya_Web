import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { CiStar } from "react-icons/ci";
import { BsCheck2Square } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
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
import useScrollTop from "../../Components/useScrollTop";
import ayodhyaBackgrounImg from "../../assets/ayodhya.png";
import videoImg from "../../assets/videoimg.jpg";
import { BookForm } from "../../Components/BookForm/BookForm";

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

export const Home = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const [playVideo, SetPlayVideo] = useState(false);

  useScrollTop();
  return (
    <div>
      {/* WELCOME SECTION....... */}
      <section className="welcome_section">
        <div
          className="welcome_container"
          style={{
            backgroundImage: `url(${ayodhyaBackgrounImg})`,
          }}
        >
          <Header Color={"white"} />
          <div className="lg:flex gap-3 max-w-[1320px] m-auto lg:pb-[6.2rem] lg:mt-28 mt-2 px-8 py-3">
            <div className="lg:w-[70%]">
              <h1 className="md:text-6xl text-[2rem] lg:text-start text-center text-white font-semibold md:leading-[5rem] leading-[3.5rem]">
                Welcome to Hotel Awadh Vilas & Restaurant
              </h1>
              <div className="flex sm:flex-row flex-col sm:gap-4 gap-1 lg:justify-start justify-center items-center lg:mt-20 md:mt-10 mt-8">
                <div className="text-white flex sm:gap-2 gap-1">
                  <CiStar size={24} />
                  <CiStar size={24} />
                  <CiStar size={24} />
                  <CiStar size={24} />
                  <CiStar size={24} />
                </div>

                <p className="md:text-5xl text-[1.6rem] text-white">
                  Star Luxury Hotel
                </p>
              </div>
              <div className="flex flex-col lg:items-start items-center md:gap-8 gap-4 md:mt-16 mt-8 text-white">
                <p className="md:text-3xl text-xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>
                <p className="md:text-3xl text-xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>{" "}
                <p className="md:text-3xl text-xl flex gap-4">
                  <BsCheck2Square size={20} /> Modern Rooms & Specious Suites
                </p>
              </div>
            </div>
            <div className="lg:w-[40%] lg:mt-0 mt-10 form_wrapper">
              <BookForm />
            </div>
          </div>
        </div>
      </section>

      <div className="book_form px-8 py-3">
        <BookForm />
      </div>

      {/* ROOMS SECTION..... */}
      <section className="rooms_section">
        <div className="favorite_rooms max-w-[1320px] m-auto px-8 md:py-[6rem] py-[2.5rem]">
          <h2 className="md:text-5xl text-[1.7rem] text-center font-bold text-gray-600">
            OUR ROOMS
          </h2>
          <p className="sm:text-center text-justify md:text-2xl text-[1.2rem] lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex lg:flex-row flex-col gap-5 justify-center">
            {roomImages.map((d, index) => {
              return <RoomsCards roomDetails={d} key={index} />;
            })}
          </div>
          <div className="flex justify-center">
            <Link className="bg-[#deb666] hover:bg-[#B69854] active:scale-95 text-white text-2xl px-5 py-2">
              View Room List
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION... */}
      <section className="service_section">
        <div className="service_container max-w-[1320px] m-auto px-8 md:py-[6rem] py-[2.5rem]">
          <h2 className="md:text-5xl text-[1.7rem] text-center font-bold text-gray-600">
            OUR AWESOME SERVICES
          </h2>
          <p className="sm:text-center text-justify md:text-2xl text-[1.2rem] lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>

          <div className="service_swiper_wrapper">
            <ServiceSwiper />
          </div>
          {/* <div className="flex items-center gap-8 md:flex-row flex-col">
            <div className="left lg:w-[60%] md:w-[50%] w-[100%]">
              <ServiceSwiper />
            </div>
            <div className="right  lg:w-[40%] md:w-[50%] w-[100%] flex flex-col gap-11 sm:mt-0 mt-8">
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
          </div> */}
        </div>
      </section>

      {/* NEWS & EVENTS.... */}
      <section className="news_section">
        <div className="news_container max-w-[1320px] m-auto px-8 md:py-[6rem] py-[2.5rem]">
          <h2 className="md:text-5xl text-[1.7rem] text-center font-bold text-gray-600">
            {" "}
            LATEST NEWS & EVENTS
          </h2>
          <p className="sm:text-center text-justify md:text-2xl text-[1.2rem] lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="grid lg:grid-cols-2 justify-center gap-y-10">
            {newsImgages.map((d, index) => {
              return <NewEventCard newsDetails={d} key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION.... */}
      <section className="video_section">
        <div
          className="video_preview"
          style={{
            backgroundImage: `url(${videoImg})`,
          }}
        >
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
        <div className="visit_place_container max-w-[1320px] m-auto px-8 md:py-[6rem] py-[2.5rem]">
          <h2 className="md:text-5xl text-[1.7rem] text-center font-bold text-gray-600">
            Must Visit Places In
          </h2>
          <h3 className="md:text-6xl text-[2rem] text-center font-bold text-[#A94E00] uppercase -tracking-tighter">
            Ayodhya Ji
          </h3>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:flex-row md:flex-nowrap flex-wrap ustify-center gap-5">
            {templeImages.map((i, index) => {
              return (
                <div className="temple_cards" key={index}>
                  <div className="w-full h-[230px]">
                    <img
                      src={i.img}
                      loading="lazy"
                      decoding="async"
                      alt={`${i.name}`}
                    />
                    <div className="shree_ram text-5xl">
                      !! 🚩जय श्री राम🚩 !!
                    </div>
                  </div>
                  <h4 className="text-3xl capitalize text-red-700 font-extrabold py-8 text-center">
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
        <div className="contact_container max-w-[1320px] m-auto px-8 md:py-[6rem] py-[2.5rem]">
          <h2 className="md:text-5xl text-[1.7rem] text-center font-bold text-gray-600">
            LOCATION - CONTACT US
          </h2>
          <p className="sm:text-center text-justify md:text-2xl text-[1.2rem] lg:w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex gap-8 lg:flex-row flex-col">
            <div className="left xl:w-[50%] w-[100%]">
              <iframe
              title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455835.34705558006!2d82.21026!3d26.801325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a0733f0f70f8b%3A0xcaec4df444ccc7f2!2sHotel%20Awadh%20Vilas!5e0!3m2!1sen!2sus!4v1705145338516!5m2!1sen!2sus"
                height="370"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="right xl:w-[50%] w-[100%] flex flex-col gap-10">
              <form
                action=""
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex sm:flex-row flex-col gap-2">
                  <Link
                    to=""
                    className="flex items-center  gap-2 text-xl hover:bg-[#B69854] text-white w-full bg-[#debb6c] px-4 py-2"
                  >
                    <CiLocationOn size={18} />
                    Ayodhya
                  </Link>
                  <Link
                    to=""
                    className="flex items-center gap-2 text-xl hover:bg-[#B69854] text-white w-full bg-[#debb6c] px-4 py-2"
                  >
                    <GiRotaryPhone size={18} />
                    +7894561230
                  </Link>{" "}
                  <Link
                    to=""
                    className="flex text-xl gap-2 text-white hover:bg-[#B69854] w-full bg-[#debb6c] px-4 py-2"
                  >
                    <AiOutlineMail size={18} />
                    contact@hotelawadhvilasayodhya.com
                  </Link>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => {
                      setFormName(e.target.value);
                    }}
                    placeholder="Your Name"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    value={formEmail}
                    onChange={(e) => {
                      setFormEmail(e.target.value);
                    }}
                    placeholder="Your Email Address"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    type="text"
                    value={formMessage}
                    onChange={(e) => {
                      setFormMessage(e.target.value);
                    }}
                    rows={5}
                    placeholder="Your Name"
                    className="w-full outline-none px-4 py-5 text-2xl border-2 border-gray-300"
                  />
                </div>
                <button className="w-full bg-[#debb6c] hover:bg-[#B69854] active:scale-95 text-white text-3xl py-6">
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
