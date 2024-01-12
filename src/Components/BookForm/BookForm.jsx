import React from "react";

export const BookForm = () => {
  return (
    <div className="shadow-2xl rounded-lg">
      <form action="" className="bg-white flex flex-col gap-5 pb-8 rounded-lg">
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
              Double Room
            </option>
            <option value="" className="text-gray-400 text-2xl mt-5">
              Deluxe Room
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
            type="text"
            className="w-full p-4 text-xl border border-gray-300 outline-none"
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
            name=""
            id=""
            className="w-full p-4 text-xl border border-gray-300 outline-none"
            value="Check in"
          />

          <input
            type="date"
            name=""
            id=""
            className="w-full p-4 text-xl border border-gray-300 outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-[#B69854] text-white text-3xl w-[90%] py-4 hover:bg-[#d5b872] transition-all">
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
