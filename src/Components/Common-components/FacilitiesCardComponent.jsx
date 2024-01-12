import React from 'react'
import BgImg from "../../assets/bg-img/Home-About-BG-Jim-Fahad-Digital.jpg";

import FacilitiesCard from "../../Components/Cards/FacilitiesCard";
import Food from "../../assets/svg/food-svg.svg";
import AC from "../../assets/svg/ac-svg.svg";
import Room from "../../assets/svg/Washroom.svg";
import Water from "../../assets/svg/Water-Supply.svg";
import CCTV from "../../assets/svg/CCTV.svg";
import Wifi from "../../assets/svg/wifi.svg";
import HouseKeeping from "../../assets/svg/house-keeping.svg";
import parking from "../../assets/svg/parking.svg";

function FacilitiesCardComponent() {
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
    <section
        className=" lg:py-28 py-6"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
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
  )
}

export default FacilitiesCardComponent