import React from "react";
import "./ourservice.css";
import { Header } from "../../Components/Header/Header";
import FacilitiesCard from "../../Components/Cards/FacilitiesCard";
import Food from "../../assets/svg/food-svg.svg";
import AC from "../../assets/svg/ac-svg.svg";
import Room from "../../assets/svg/Washroom.svg";
import Water from "../../assets/svg/Water-Supply.svg";
import CCTV from "../../assets/svg/CCTV.svg";
import Wifi from "../../assets/svg/wifi.svg";
import HouseKeeping from "../../assets/svg/house-keeping.svg";
import parking from "../../assets/svg/parking.svg";
import BannerImg from "../../assets/ayodhya.png";

export const OurService = () => {
  const imgUrl = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const cardData = [
    {
      title: "supper delicious food",
      description: "Take Healthy and Tasty Food of your choice.",
      icon: Food,
    },
    {
      title: "AC and Non AC room 24x7 Electricity supply",
      description:
        "As your wish we provide Ac and Non AC rooms at fair prices.",
      icon: AC,
    },
    {
      title: "room with attached washroom",
      description: "As per the requirement you can use these facilities.",
      icon: Room,
    },
    {
      title: "hot and cold water 24x7 water supply",
      description:
        "As per the weather requirements we provide hot and cold water.",
      icon: Water,
    },
    {
      title: "full CCTV security",
      description: "CCTV installed for security purposers.",
      icon: CCTV,
    },
    {
      title: "Parging space",
      description: "As per the requirement you can use these facilities.",
      icon: parking,
    },
    {
      title: "24x7 Fiber Wifi",
      description: "Fast 40Mbps speed with limited users provided.",
      icon: Wifi,
    },
    {
      title: "housekeeping",
      description: "Daily cleaning of rooms and verandah",
      icon: HouseKeeping,
    },
  ];
  return (
    <div className="bg-gray-700 our-service-section">
      
      <section
        className="border-yellow-800 border-b-2 bg-slate-100 w-[100%] h-[100%] "
        style={imgUrl}
      >
        <div className="w-[100%] h-[100%] z-0" style={{background:"rgba(252,237,250,.5)"}}>
        <Header />
          <div className="pt-24 max-w-[1320px] m-auto border-yellow-800 border-b-4 z-10 ">
            <div>
              <h1 className="text-center font-fl-BSC font-extrabold lg:text-7xl md:text-6xl text-3xl capitalize text-yellow-800">
                We are awesome
              </h1>
            </div>
            <div>
              <h2 className="text-center font-fl-lex font-semibold lg:text-8xl md:text-7xl text-5xl  capitalize">
                Hotel facilities
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------card section----------------------- */}
      <section className="bg-slate-100 lg:py-28 py-6">
        <div className="m-auto max-w-[1320px] grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:gap-y-12 p-2">
          {cardData.map((item, i) => (
            <FacilitiesCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      {/* --------------------------card section----------------------- */}
    </div>
  );
};
