import React from "react";
import { Header } from "../../Components/Header/Header";
import resturant1 from "../../assets/restaurant1.jpg";
import resturant2 from "../../assets/restaurant2.jpg";
import resturant3 from "../../assets/restaurant3.jpg";
import resturant4 from "../../assets/restaurant4.jpg";
import { MenuCard } from "../../Components/Cards/MenuCard";
import menuimg1 from "../../assets/menuimg1.webp";
import menuimg2 from "../../assets/menuimg2.jpg";
import menuimg3 from "../../assets/menuimg3.jpg";

const restaurantImage = [resturant1, resturant2, resturant3, resturant4];
const menuImage = [
  {
    name: "Deluxe Thali",
    price: "600",
    image: menuimg1,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
  {
    name: "Special Thali",
    price: "850",
    image: menuimg2,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
  {
    name: "Chinese",
    price: "300",
    image: menuimg3,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
  {
    name: " SPAGHETTI",
    price: "600",
    image: resturant4,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
  {
    name: "CHICKEN",
    price: "600",
    image: resturant1,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
  {
    name: "MEAT",
    price: "600",
    image: resturant1,
    desc: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
  },
];

export const Resturant = () => {
  return (
    <div className="resturant_section">
      {/* <Header Color={"black"} /> */}
      <div className="our_resturant_banner">
        <Header Color={"white"} />
        <h2>welcome to Hotel Awadh Vilas</h2>
      </div>
      <div className="resturant_container">
        <div className="our_resturant flex lg:flex-row flex-col gap-4">
          <div className="left xl:w-[60%] lg:w-[50%]">
            <h2 className="text-5xl font-bold text-gray-600">OUR RESTAURANT</h2>
            <p
              className="text-2xl mt-10 text-gray-600"
              style={{
                lineHeight: "2.6rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Nam liber tempor cum soluta
              nobis eleifend option congue nihil imperdiet doming id quod mazim
              placerat facer possim assum. Typi non habent claritatem insitam;
              est usus legentis in iis qui facit eorum claritatem.
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus, qui
              sequitur mutationem consuetudium lectorum.
            </p>
          </div>
          <div className="right xl:w-[40%] lg:w-[50%] grid grid-cols-2 gap-4 ">
            {restaurantImage.map((i) => {
              return (
                <div>
                  <img src={i} alt="" className="rounded-lg" />
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-2xl text-gray-600 leading-[2.6rem] mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo
          laboriosam tempore sint cumque, repellat doloribus officiis inventore
          ducimus earum, iure quam dignissimos, enim doloremque aliquam.
          Consequatur fugit eius perferendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro quo laboriosam tempore sint
          cumque, repellat doloribus officiis inventore ducimus earum, iure quam
          dignissimos, enim doloremque aliquam. Consequatur fugit eius
          perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro quo laboriosam tempore sint cumque, repellat doloribus officiis
          inventore ducimus earum, iure quam dignissimos, enim doloremque
          aliquam. Consequatur fugit eius perferendis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Porro quo laboriosam tempore sint
          cumque, repellat doloribus officiis inventore ducimus earum, iure quam
          dignissimos, enim doloremque aliquam. Consequatur fugit eius
          perferendis.
        </p>
        <div className="our_menu">
          <h2 className="text-5xl uppercase font-bold text-gray-600">
            Our Menu
          </h2>
          <div className="grid lg:grid-cols-2 sm:gap-y-24 gap-y-14 gap-x-10 mt-16">
            {menuImage.map((d) => {
              return <MenuCard menuDetails={d} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
