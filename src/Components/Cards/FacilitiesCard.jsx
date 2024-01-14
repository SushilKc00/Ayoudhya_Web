import React from "react";

function FacilitiesCard({ icon, title, description }) {
  return (
    <>
      {/* animate-pulse */}
      <div className="flex flex-col items-center self-stretch gap-8 p-3 shadow-md rounded-2xl  bg-[#F5F5F5]">
        <div className="flex items-start p-7 rounded-full border-indigo-700 border-2 overflow-hidden">
          <img
            src={icon}
            alt={`${title}-img`}
            loading="lazy"
            decoding="async"
            className="hover:scale-110 duration-1000"
          />
        </div>
        <div className="card-content-wrap">
          <div className="card-title">
            <h5 className="text-center text-[#606060] font-fl-lex capitalize font-bold sm:text-3xl text-[1.4rem]">
              {title}
            </h5>
          </div>
          <div className="card-description">
            <p className="font-normal text-center text-[#858a99] font-fl-lex sm:text-2xl text-[1.2rem]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitiesCard;
