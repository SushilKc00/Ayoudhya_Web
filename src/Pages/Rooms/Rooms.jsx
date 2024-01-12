import React from "react";
import { Header } from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/bas-van.jpg";
import Room1 from "../../assets/singleroom1.png";
import Room2 from "../../assets/singleroom2.jpg";
import Room3 from "../../assets/singleroom3.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import BgImg from "../../assets/bg-img/Home-About-BG-Jim-Fahad-Digital.jpg";

import { GiCoffeeCup } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import FacilitiesCardComponent from "../../Components/Common-components/FacilitiesCardComponent";
import ChooseUs from "../../Components/Common-components/ChooseUs";
import useScrollTop from "../../Components/useScrollTop";

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

  useScrollTop();
  return (
    <div>
      <section className="w-[100%] h-[100%]" style={imgurl}>
        <div>
          <div
            className="w-[100%] h-[100%]"
            style={{
              background: `linear-gradient(95deg, rgba(147, 0, 17, 0.3) 0%, rgba(86, 20, 147, 0.3) 100%)`,
            }}
          >
            <Header Color={"white"} />
            <div className="max-w-[1320px] m-auto flex flex-col justify-center items-start px-4 min-h-[40vh]">
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
      </section>
      {/* ------room card------ */}
      <section
        className="w-[100%] lg:py-12 md:py-8 py-0"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {roomCardData.map((item, i) => (
          <Link to="#">
            <div
              className="max-w-[1320px] h-max m-auto lg:flex mb-5 shadow-xl px-2  py-2 lg:py-0"
              key={i}
            >
              <div className="overflow-hidden lg:pb-3 lg:pe-3 lg:w-[50%] flex items-center justify-center md:w-[100%]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="hover:scale-110 duration-1000"
                />
              </div>
              <div className="lg:flex md:flex xl:h[47vh]">
                <div className="flex flex-col items-start lg:justify-between h-[100%] lg:w-[75%] md:w-[75%] gap-3 px-2 lg:py-4 md:py-2 py-2">
                  <div className="">
                    <h3 className="lg:text-6xl lg:text-left md:text-center text-center md:text-5xl text-3xl text-slate-600 font-normal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-2xl lg:text-left md:text-center text-center  text-gray-400 font-normal">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center w-[100%] lg:justify-start md:justify-center justify-center gap-5">
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
                <div className="flex flex-col items-center justify-between lg:w-[25%] md:w-[25%] px-2 lg:py-5 md:py-2 py-2 ">
                  <div>
                    <p className="room-price text-4xl text-slate-600 lg:mb-8 md:mb-8 mb-4 flex items-center gap-1 p-2">
                      <span className="sr-only">room price</span>
                      <MdOutlineCurrencyRupee className="text-4xl" />
                      {item.price}
                    </p>
                    <p className="uppercase text-3xl p-3">{item.time}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 md:mt-0">
                    <Link
                      to=""
                      className="uppercase py-2 px-10 text-3xl btn_bg_color text-white active:scale-95 hover:bg-[#d5b872]"
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
      {/* ---------------------------------------------Facilities--------------------------------------------------- */}
      <section>
        <FacilitiesCardComponent />
      </section>
      {/* ---------------------------------------------Facilities--------------------------------------------------- */}
      {/* ---------------------------------------------ChooseUs--------------------------------------------------- */}
      <section>
        <ChooseUs />
      </section>
      {/* ---------------------------------------------ChooseUs--------------------------------------------------- */}
    </div>
  );
};
