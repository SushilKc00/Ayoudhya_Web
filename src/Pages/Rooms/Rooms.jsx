import React from "react";
import { Header } from "../../Components/Header/Header";
import { Link } from "react-router-dom";
// import BannerImg from "../../assets/ayodhya.png";
import BannerImg from "../../assets/jesse-gardner.jpg";
import Room1 from "../../assets/singleroom1.png";
import Room2 from "../../assets/singleroom2.jpg";
import Room3 from "../../assets/singleroom3.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";

import { GiCoffeeCup } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

export const Rooms = () => {
  // -------banner img--------- //
  const imgurl = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const roomCardData = [
    {
      url: Room1,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [
        { icon: <GiCoffeeCup /> },
        { icon: <GiForkKnifeSpoon /> },
        { icon: <FaWifi /> },
        { icon: <FaDesktop /> },
      ],
      price: "189,00",
      time: "per night",
    },
    {
      url: Room2,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [
        { icon: <GiCoffeeCup /> },
        { icon: <GiForkKnifeSpoon /> },
        { icon: <FaWifi /> },
        { icon: <FaDesktop /> },
      ],
      price: "219,00",
      time: "per night",
    },
    {
      url: Room3,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [
        { icon: <GiCoffeeCup /> },
        { icon: <GiForkKnifeSpoon /> },
        { icon: <FaWifi /> },
        { icon: <FaDesktop /> },
      ],
      price: "219,00",
      time: "per night",
    },
  ];

  return (
    <div>
      <section className="">
        <div>
          <Header />
          <div className="w-[100%] h-[100%]" style={imgurl}>
            <div
              className="w-[100%] h-[100%] py-10"
              style={{
                background: `linear-gradient(95deg, rgba(147, 0, 17, 0.50) 0%, rgba(86, 20, 147, 0.50) 100%)`,
              }}
            >
              <div className="max-w-[1320px] m-auto flex flex-col justify-center items-start px-4">
                <div className="py-5">
                  <h1 className="capitalize text-slate-50 font-normal lg:text-6xl md:text-5xl text-3xl">
                    Rooms view
                  </h1>
                </div>
                <div className="py-4">
                  <p className="text-2xl font-normal text-slate-50  capitalize whitespace-pre">
                    <Link to="/" className=" text-2xl">
                      Home
                    </Link>
                    {"  "}/ <span className="text-yellow-400">rooms view</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------room card------ */}
      <section className="w-[100%] py-12">
        {roomCardData.map((item, i) => (
          <Link to={`/roomdetails/${i}`}>
            <div
              className="max-w-[1320px] h-max m-auto lg:flex mb-4 shadow-lg px-4"
              key={i}
            >
              <div className="overflow-hidden lg:pb-3 lg:pe-3 lg:w-[40%] md:w-[100%]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="hover:scale-110 duration-1000"
                />
              </div>
              <div className="lg:flex md:flex">
                <div className="flex flex-col items-start justify-start lg:w-[75%] md:w-[75%] gap-3 px-2 py-4">
                  <div className="lg:mb-16 md:mb-12">
                    <h3 className="lg:text-6xl md:text-5xl text-3xl text-clr-gray font-normal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-2xl text-gray-400 font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    {item.icons.map((item, i) => (
                      <div
                        className="service-Icon btn_bg_color text-4xl py-2 px-4 text-white rounded-md"
                        key={i}
                      >
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:w-[25%] md:w-[25%]">
                  <p className="room-price text-4xl text-slate-800 mb-3 flex">
                    <span className="sr-only">room price</span>
                    <MdOutlineCurrencyRupee /> {item.price}
                  </p>
                  <p className="uppercase text-3xl mb-3">{item.time}</p>
                  <br />
                  <div>
                    <Link
                      to="#"
                      className="uppercase py-2 px-10 text-3xl btn_bg_color text-white active:scale-90 hover:bg-yellow-600"
                    >
                      book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
