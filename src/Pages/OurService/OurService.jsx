import React from "react";
import { Header } from "../../Components/Header/Header";
// import BannerImg from "../../assets/ayodhya.png";
import BannerImg from "../../assets/jesse-gardner.jpg";
import { Link } from "react-router-dom";
import FacilitiesCardComponent from "../../Components/Common-components/FacilitiesCardComponent";
import ChooseUs from "../../Components/Common-components/ChooseUs";
import useScrollTop from "../../Components/useScrollTop";


export const OurService = () => {

  useScrollTop();

  const email= "Contact@hotelawadhvilasayodhya.com";
  const number = "+91 9120053008"
  const imgUrl = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  

 

  return (
    <div className="bg-gray-700 our-service-section">
      <section
        className="border-yellow-800 border-b-4 bg-slate-100 w-[100%] h-[100%] "
        style={imgUrl}
      >
        <div
          className="w-[100%] h-[100%] z-0 "
          // style={{ background: `linear-gradient(95deg, rgba(147, 0, 17, 0.50) 0%, rgba(86, 20, 147, 0.50) 100%)` }}
          style={{ background: "rgba(252,237,250,.6)"}}
        >
          <Header />
          <div className=" max-w-[1320px] m-auto flex flex-col items-center justify-center border-yellow-800 border-b-4 z-10 min-h-[40vh]">
            <div>
              <h1 className="text-center font-fl-BSC font-extrabold lg:text-7xl md:text-6xl text-3xl capitalize text-slate-100">
                We are awesome
              </h1>
            </div>
            <div>
              <h2 className="text-center font-fl-lex font-semibold lg:text-8xl md:text-7xl text-5xl  capitalize text-slate-100">
                Hotel facilities
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------card section----------------------- */}
      <FacilitiesCardComponent />
      {/* --------------------------card section----------------------- */}
      {/* --------------------------choose-us section----------------------- */}
      <ChooseUs/>
      {/* --------------------------choose-us section----------------------- */}
      {/* --------------------------Hotel Reservation section----------------------- */}
      <section className="lg:py-14 bg-yellow-700">
        <div className="max-w-[1320px] flex flex-col items-center justify-center m-auto">
          <div className="w-[100%] border-b-4 border-yellow-900 pb-4">
            <h2 className="font-fl-lex font-bold text-yellow-900 lg:text-5xl leading-snug md:text-3xl text-2xl text-center capitalize">
              Hotel reservation
            </h2>
          </div>
          <div className="pt-3">
            <h3 className="capitalize font-fl-lex font-semibold text-6xl leading-snug text-center text-white">
            Extra Perks When You Book Directly With Us
            </h3>
          </div>
          <div className="mt-3">
            <Link to={`mailto:${email}`}
            className="text-white flex items-center justify-center text-3xl font-medium bg-yellow-950 px-6 py-3 hover:text-yellow-900 hover:bg-slate-200 active:scale-90 rounded-xl border-2 border-yellow-950">{email}</Link>
          </div>
          <div className="mt-3">
            <Link to={`tel:${email}`}
            className="text-white flex items-center justify-center text-3xl font-medium bg-yellow-950 px-6 py-3 hover:text-yellow-900 hover:bg-slate-200 active:scale-90 rounded-xl border-2 border-yellow-950">{number}</Link>
          </div>
        </div>
      </section>
      {/* --------------------------Hotel Reservation section----------------------- */}
    </div>
  );
};
