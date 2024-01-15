import React from "react";

export const MenuCard = ({ menuDetails }) => {
  return (
    <div className="menu_card flex md:flex-row flex-col gap-5">
      <div className="left md:w-[35%] w-[100%]">
        <img
          src={menuDetails.image}
          loading="lazy"
          decoding="async"
          alt={`${menuDetails.name}-img`}
          className="h-full  w-full"
        />
      </div>
      <div className="right md:w-[80%] w-[100%] px-4 py-2">
        <div className="flex justify-between">
          <h3 className="text-[1.9rem] uppercase font-extrabold text-[#2c87c0d8]">
            {menuDetails.name}
          </h3>
          <p className="text-[1.8rem] font-extrabold text-[#DEB666]">
            ₹ {menuDetails.price}
          </p>{" "}
        </div>
        <p className="text-[1.5rem] text-gray-600 mt-6">{menuDetails.desc}</p>
      </div>
    </div>
  );
};
