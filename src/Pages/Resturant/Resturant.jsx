import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import resturant1 from "../../assets/restaurant1.jpg";
import resturant2 from "../../assets/restaurant2.jpg";
import resturant3 from "../../assets/restaurant3.jpg";
import resturant4 from "../../assets/restaurant4.jpg";
import { MenuCard } from "../../Components/Cards/MenuCard";
import menuimg1 from "../../assets/menuimg1.webp";
import menuimg2 from "../../assets/menuimg2.jpg";
import menuimg3 from "../../assets/menuimg3.jpg";
import restBackgroundImage from "../../assets/restbackground.png";

import useScrollTop from "../../Components/useScrollTop";

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
];
const allMenus = [
  {
    name: "Soft Drinks",
    subName: [
      {
        name: "Cold Drink",
        price: "50",
      },
      {
        name: "Hot Milk",
        price: "50",
      },
      {
        name: "Can Soft Drink",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Daal",
    subName: [
      {
        name: "Daal Tadka",
        price: "50",
      },
      {
        name: "Dal Makani",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
];

export const Resturant = () => {
  // useScrollTop();
  return (
    <div className="resturant_section">
      {/* <Header Color={"black"} /> */}
      <div
        className="our_resturant_banner"
        style={{
          backgroundImage: `url(${restBackgroundImage})`,
        }}
      >
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
              Our menu spotlights a delicious food collection of Noodles and
              Soup. Soft Drink, Breakfast, Paneer, Sweet Dish, Thali and a wide
              range of mouth-watering items grace our menu all the time.
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
          <div className="flex lg:flex-row flex-col gap-7 mt-12">
            <div className="flex flex-col lg:w-[50%] gap-10">
              {menuImage.map((d) => {
                return <MenuCard menuDetails={d} />;
              })}
            </div>
            <div className="lg:w-[50%] shadow-lg shadow-gray-500 px-3 py-2">
              <small className="text-lg">
                <span className="text-red-600">*</span> Select Items from Menu
                Below
              </small>
              <div className="drop_down_menu">
                {allMenus.map((m) => (
                  <DropDown m={m} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DropDown = ({ m }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className="drop_menu_items"
      onClick={() => {
        setShowContent(!showContent);
      }}
    >
      <h4 className="flex gap-3 items-center">
        {showContent ? <IoIosArrowUp /> : <IoIosArrowDown />}
        {m.name}
      </h4>
      <div
        className="menu_content mt-2 bg-white text-black"
        style={{
          maxHeight: showContent ? "5555px" : "0",
        }}
      >
        {m.subName.map((s) => (
          <div className="menu_items">
            <div>
              <h5>{s.name}</h5>
              <span>{s.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
