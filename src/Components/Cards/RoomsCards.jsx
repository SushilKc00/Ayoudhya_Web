import React from "react";
import { Link } from "react-router-dom";

export const RoomsCards = ({ roomDetails }) => {
  return (
    <div className="rooms_cards">
      <div className="overflow-hidden">
        <img
          src={roomDetails.img}
          className="hover:scale-110 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center px-5 py-4">
        <h3 className="text-3xl">{roomDetails.roomType}</h3>
        <Link>
          <button className="bg-[#d5b977] text-white text-2xl px-5 py-1">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
