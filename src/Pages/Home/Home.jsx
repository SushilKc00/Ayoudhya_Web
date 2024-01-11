import React from "react";
import { Header } from "../../Components/Header/Header";
import { CiStar } from "react-icons/ci";
import { BsCheck2Square } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";

export const Home = () => {
  return (
    <div>
      <section className="welcome_section">
        <div className="welcome_container">
          <Header color="black"/>
          <div className="lg:flex gap-3 px-5 xl:w-[75%] m-auto mt-8">
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
      <section className="service_section">
        <div className="service_container">
          <h2 className="text-5xl text-center font-bold text-gray-600">
            OUR AWESOME SERVICES
          </h2>
          <p className="text-center text-2xl w-[80%] m-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit. Restaurant
          </p>
          <div className="flex gap-8 md:flex-row flex-col">
            <div className="left lg:w-[60%] ">
              <img
                src="https://www.shutterstock.com/image-photo/maldives-islands-ocean-tropical-beach-600nw-1938868960.jpg"
                alt=""
                className="w-full lg:h-[450px] h-[250px]"
              />
            </div>
            <div className="right w-[100%]  md:w-[40%]  flex flex-col gap-11">
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="text-3xl text-gray-700">Resturant</h4>
                  <p className="text-[1.3rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="text-3xl text-gray-700">Resturant</h4>
                  <p className="text-[1.3rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="text-3xl text-gray-700">Resturant</h4>
                  <p className="text-[1.3rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>{" "}
              <div className="flex items-center gap-10 bg-white px-5 py-3">
                <AiOutlineLineChart size={30} />
                <div className="">
                  <h4 className="text-3xl text-gray-700">Resturant</h4>
                  <p className="text-[1.3rem] leading-[2.2rem] text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, ab architecto temporibus quia eos molestias
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
