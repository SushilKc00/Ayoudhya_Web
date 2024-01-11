import React from "react";
import "./ourservice.css";
import { Header } from "../../Components/Header/Header";
import FacilitiesCard from "../../Components/Hotel-card/FacilitiesCard";

export const OurService = () => {
  return (
    <div className="bg-gray-700 our-service-section">
      <Header />
      <section className="border-yellow-800 border-b-2 bg-slate-100">
        <div className="pt-24 xl:w-[70%] m-auto border-yellow-800 border-b-4">
          <div>
            <h1 className="text-center font-fl-BSC font-extrabold text-7xl  capitalize text-yellow-800">We are awesome</h1>
          </div>
          <div>
            <h2 className="text-center font-fl-lex font-semibold text-8xl capitalize">Hotel facilities</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="xl:w-[80%] m-auto">
          <FacilitiesCard />
        </div>
      </section>

    </div>
  );
};
