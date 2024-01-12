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
import restBackgroundImage from "../../assets/restback.jpg";

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
        name: "Daal Jeera",
        price: "50",
      },
      {
        name: "Daal Fry",
        price: "50",
      },
    ],
  },
  {
    name: "Breakfast",
    subName: [
      {
        name: "Plain Paratha",
        price: "50",
      },
      {
        name: "Paneer Pakoda (8 Piece)",
        price: "50",
      },
      {
        name: "Dahi",
        price: "50",
      },
      {
        name: "Onion Pakoda (10 Piece)",
        price: "50",
      },
      {
        name: "Poori Sabji (6 Piece)",
        price: "50",
      },
      {
        name: "Onion Paratha",
        price: "50",
      },
      {
        name: "Aaloo Paratha",
        price: "50",
      },
      {
        name: "Lachha Paratha",
        price: "50",
      },
      {
        name: "Paneer Paratha",
        price: "50",
      },
      {
        name: "Mix Paratha",
        price: "50",
      },
    ],
  },
  {
    name: "paneer",
    subName: [
      {
        name: "Malai Kofta",
        price: "50",
      },
      {
        name: "Saahi Paneer",
        price: "50",
      },
      {
        name: "Saahi Paneer",
        price: "50",
      },
      {
        name: "Kadahi Paneer",
        price: "50",
      },
      {
        name: "Handi Paneer",
        price: "50",
      },
    ],
  },
  {
    name: "Vegitable",
    subName: [
      {
        name: "Aaloo Dum Masala",
        price: "50",
      },
      {
        name: "Gobhi Matar",
        price: "50",
      },
      {
        name: "Aaloo Zira",
        price: "50",
      },
      {
        name: "Aaloo Parvar",
        price: "50",
      },
      {
        name: "MixVeg",
        price: "50",
      },
    ],
  },
  {
    name: "Mushroom",
    subName: [
      {
        name: "Chilli Mashroom",
        price: "50",
      },
      {
        name: "Mushroom Do Pyaza",
        price: "50",
      },
      {
        name: "Mushroom Masala",
        price: "50",
      },
      {
        name: "Matar Mushroom Masala",
        price: "50",
      },
    ],
  },
  {
    name: "Raita",
    subName: [
      {
        name: "Mix Raita",
        price: "50",
      },
      {
        name: "Boondi Raita",
        price: "50",
      },
      {
        name: "Plain Raita",
        price: "50",
      },
    ],
  },
  {
    name: "Sweet Dish",
    subName: [
      {
        name: "Gulab Jamun",
        price: "50",
      },
      {
        name: "Rasgulla",
        price: "50",
      },
    ],
  },
  {
    name: "Rice",
    subName: [
      {
        name: "Paneer Biryani",
        price: "50",
      },
      {
        name: "Jeera Rice",
        price: "50",
      },
      {
        name: "Matar Pulao",
        price: "50",
      },
      {
        name: "Paneer Pulao",
        price: "50",
      },
      {
        name: "Navratan Pulao",
        price: "50",
      },
    ],
  },
  {
    name: "Roti & Naan",
    subName: [
      {
        name: "Tawa Roti Butter",
        price: "50",
      },
      {
        name: "Laccha Paratha",
        price: "50",
      },
      {
        name: "Tawa Roti Plain",
        price: "50",
      },
      {
        name: "Missi Roti",
        price: "50",
      },
      {
        name: "Daal plain",
        price: "50",
      },
    ],
  },
  {
    name: "Soup",
    subName: [
      {
        name: "Sweet Corn Soup",
        price: "50",
      },
      {
        name: "Veg Soup",
        price: "50",
      },
      {
        name: "Manchow Soup",
        price: "50",
      },
      {
        name: "Veg Hot & Sour",
        price: "50",
      },
    ],
  },
  {
    name: "Papad",
    subName: [
      {
        name: "Papad Fry (1 Piece)",
        price: "50",
      },
      {
        name: "Papad dry (1 Piece)",
        price: "50",
      },
    ],
  },
];

export const Resturant = () => {
  useScrollTop();
  return (
    <div className="resturant_section">
      <div
        className="our_resturant_banner"
        style={{
          backgroundImage: `url(${restBackgroundImage})`,
        }}
      >
        <Header Color={"white"} />
        <div className=" h-[35vh] flex items-center justify-center">
          <h2>welcome to Hotel Awadh Vilas</h2>
        </div>
      </div>
      <div className="resturant_container max-w-[1320px] m-auto py-[8rem] px-2">
        <div className="our_resturant flex lg:flex-row flex-col gap-10">
          <div className="left xl:w-[60%] lg:w-[50%]">
            <h2 className="sm:text-5xl text-[2rem] font-bold text-gray-600">
              OUR RESTAURANT
            </h2>
            <p
              className="sm:text-2xl text-[1.2rem] sm:mt-10 mt-5 text-gray-600 text-justify"
              style={{
                lineHeight: "2rem",
              }}
            >
              Our menu spotlights a delicious food collection of Noodles and
              Soup. Soft Drink, Breakfast, Paneer, Sweet Dish, Thali and a wide
              range of mouth-watering items grace our menu all the time.
            </p>
            <p className="sm:text-2xl text-[1.2rem] text-gray-600 sm:leading-[2.8rem] leading-[2.4rem] mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo
              laboriosam tempore sint cumque, repellat doloribus officiis
              inventore ducimus earum, iure quam dignissimos, enim doloremque
              aliquam. Consequatur fugit eius perferendis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Porro quo laboriosam tempore
              sint cumque, repellat doloribus officiis inventore ducimus earum,
              iure quam dignissimos, enim doloremque aliquam. Consequatur fugit
              eius perferendis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro quo laboriosam tempore sint cumque,
              repellat doloribus officiis inventore ducimus earum, iure quam
              dignissimos, enim doloremque aliquam. Consequatur fugit eius
              perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Porro quo laboriosam tempore sint cumque, repellat doloribus
              officiis inventore ducimus earum, iure quam dignissimos, enim
              doloremque aliquam. Consequatur fugit eius perferendis.
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

        <div className="our_menu">
          <h2 className="sm:text-5xl text-[2rem] uppercase font-bold text-gray-600">
            Our Menu
          </h2>
          <div className="flex lg:flex-row flex-col gap-7 mt-12">
            <div className="flex flex-col lg:w-[50%] gap-10">
              {menuImage.map((d) => {
                return <MenuCard menuDetails={d} />;
              })}
            </div>
            <div className="lg:w-[50%] shadow-lg shadow-gray-500 px-3 py-12">
              <h2 className="text-center text-4xl mb-5 font-semibold">
                Order Form
              </h2>
              <small className="text-lg">
                <span className="text-red-600">*</span> Select Items from Menu
                Below
              </small>
              <div className="drop_down_menu">
                {allMenus.map((m) => (
                  <DropDown m={m} />
                ))}
              </div>
              <div className="form_container">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="input_area">
                    <label htmlFor="">
                      <span>*</span> Full Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div className="input_area">
                    <label htmlFor="">Eamil Id</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email Address"
                      className="w-full"
                    />
                  </div>
                  <div className="input_area">
                    <label htmlFor="">
                      <span>*</span> Mobile Number
                    </label>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div className="input_area">
                    <label htmlFor="">
                      <span>*</span> Delivery Address
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Delivery Address"
                      className="w-full"
                    />
                  </div>
                  <div className="input_area">
                    <label htmlFor="">Instructions</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Instructions"
                      className="w-full"
                    />
                  </div>
                  <div className="w-[80%] flex gap-10">
                    <button className="bg-[#DEB666] hover:bg-white transition-all duration-300 active:scale-95">
                      Order
                    </button>
                    <button className="bg-white hover:bg-[#DEB666] transition-all duration-300 active:scale-95">
                      Cancel
                    </button>
                  </div>
                </form>
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
          <div className="menu_items flex justify-between">
            <div>
              <h5>{s.name}</h5>
              <span>₹ {s.price}</span>
            </div>
            <div>
              <button className="text-2xl bg-[#7F252A] rounded-md text-white px-10 py-2 mt-5">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
