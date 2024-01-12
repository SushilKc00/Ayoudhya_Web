import React from "react";
import { Link } from "react-router-dom";

export const RoomsCards = ({ roomDetails }) => {
  return (
    <div className="rooms_cards shadow-lg">
      <div className="overflow-hidden relative">
        <img
          src={roomDetails.img}
          className="hover:scale-110 transition-all duration-500"
          alt=""
        />
        <div className="absolute top-2 right-5 bg-[#D5B977] px-8  text-[1.3rem] py-2 rounded-lg text-white font-semibold">
          <h5 className="flex flex-col items-center">
            <span>₹ 1500</span> Night
          </h5>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 py-8">
        <h3 className="text-[1.7rem]">{roomDetails.roomType}</h3>
        <Link>
          <button className="bg-[#d5b977] text-white text-[1.3rem] px-5 py-2 font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
