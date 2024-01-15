import React from "react";

export const NewEventCard = ({ newsDetails }) => {
  return (
    <div className="news_event_cards bg-gray-100 flex sm:flex-row flex-col items-center gap-6">
      <div className="sm:w-[30%] w-[100%]">
        <img
          src={newsDetails.img}
          loading="lazy"
          decoding="async"
          alt={`${newsDetails.heading}-img`}
        />
      </div>
      <div className="sm:w-[70%] w-[100%] flex flex-col sm:gap-6 gap-2 py-5 sm:px-10 px-3">
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
