import React, { useState } from "react";

export const BookForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userRoomType, setUserRoomType] = useState("");
  const [userCheckInDate, setUserCheckInDate] = useState("");
  const [userCeckOutDate, setUserCheckOutDate] = useState("");

  return (
    <div className="shadow-2xl rounded-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-white flex flex-col gap-5 pb-8 rounded-lg"
      >
        <h2 className="bg-gray-200 text-center p-3 text-4xl font-bold rounded-lg">
          Book Online
        </h2>
        <div className="gap-2 px-8">
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="gap-2 px-8">
          <input
            type="email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            value={userEmail}
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="gap-2 px-8">
          <input
            type="number"
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
            value={userPhone}
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="gap-2 px-8">
          <select
            onChange={(e) => {
              setUserRoomType(e.target.value);
            }}
            value={userRoomType}
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            placeholder="Enter Your Phone Number"
          >
            <option value="Select-room-type" className="text-gray-400 text-2xl">
              Select Room Type
            </option>
            <option value="single-room" className="text-gray-400 text-2xl mt-5">
              Single Room
            </option>
            <option value="double-room" className="text-gray-400 text-2xl mt-5">
              Double Room
            </option>
            <option value="deluxe-room" className="text-gray-400 text-2xl mt-5">
              Deluxe Room
            </option>
          </select>
        </div>
        <div className="flex gap-2 px-8">
          <select
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            onChange={(e) => {
              setUserRoomType(e.target.value);
            }}
            value={userRoomType}
          >
            <option value="" className="text-gray-400 text-2xl">
              Adults
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              1
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              2
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              3
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              4
            </option>
          </select>
          <select
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            onChange={(e) => {
              setUserRoomType(e.target.value);
            }}
            value={userRoomType}
          >
            <option value="" className="text-gray-400 text-2xl">
              Childrens
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              1
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              2
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              3
            </option>
          </select>
        </div>
        <div className="flex gap-2 px-8">
          <input
            type="date"
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            value={userCheckInDate}
            onChange={(e) => {
              setUserCheckInDate(e.target.value);
            }}
          />

          <input
            type="date"
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            value={userCeckOutDate}
            onChange={(e) => {
              setUserCheckOutDate(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-[#B69854] text-white md:text-3xl text-2xl w-[90%] py-4 hover:bg-[#d5b872] transition-all">
            Book A Room Now
          </button>
        </div>
        <p className="text-center text-lg text-gray-400">
          Advance Booking From
        </p>
      </form>
    </div>
  );
};
