import React from "react";

export const NewEventCard = ({ newsDetails }) => {
  return (
    <div className="news_event_cards bg-gray-100 flex items-center gap-6">
      <img src={newsDetails.img} alt="" />
      <div className="flex flex-col gap-6 py-5 px-10">
        <h3 className="text-3xl">{newsDetails.heading}</h3>
        <p className="md:text-2xl text-lg text-gray-500">{newsDetails.para}</p>
        <div className="flex gap-5 text-[0.9rem] text-gray-500 font-bold uppercase">
          <span>John Doe</span>
          <span>John Doe</span>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
