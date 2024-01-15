import React from "react";
import { Header } from "../../Components/Header/Header";
// import BannerImg from "../../assets/ayodhya.png";
import BannerImg from "../../assets/jesse-gardner.jpg";
import { Link } from "react-router-dom";
import FacilitiesCardComponent from "../../Components/Common-components/FacilitiesCardComponent";
import ChooseUs from "../../Components/Common-components/ChooseUs";
import useScrollTop from "../../Components/useScrollTop";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Temple1 from "../../assets/temple1.png";


export const OurService = () => {
  useScrollTop();

  const email = "Contact@hotelawadhvilasayodhya.com";
  const number = "+91 9120053008";
  const imgUrl = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className=" our-service-section">
      <section
        className="border-yellow-800 border-b-4  w-[100%] h-[100%] "
        style={imgUrl}
      >
        <div
          className="w-[100%] h-[100%]"
          style={{
            background: `linear-gradient(95deg, rgba(147, 0, 17, 0.3) 0%, rgba(86, 20, 147, 0.3) 100%)`,
          }}
          // style={{ background: "rgba(252,237,250,.6)" }}
        >
          <Header Color={"white"} />
          <div className=" max-w-[1320px] m-auto flex flex-col items-center justify-center min-h-[40vh]">
            <div>
              <h1 className="text-center font-fl-BSC font-extrabold lg:text-7xl tracking-widest md:text-6xl text-3xl capitalize text-slate-100">
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
      <ChooseUs Temple1={Temple1}/>
      {/* --------------------------choose-us section----------------------- */}
      {/* --------------------------Hotel Reservation section----------------------- */}
      <section className="lg:py-14 md:py-9 py-4 bg-white ">
        <div className="max-w-[1320px] flex flex-col items-center justify-center m-auto">
          <div className="w-[100%] border-b-4 border-yellow-900 pb-4">
            <h2 className="font-fl-lex font-bold text-[#4B5563] uppercase lg:text-5xl md:text-4xl leading-snug  text-3xl text-center py-6">
              Hotel reservation
            </h2>
          </div>
          <div className="pt-3">
            <h3 className="capitalize font-fl-lex font-semibold lg:text-6xl md:text-5xl text-3xl leading-snug text-center text-[#ACA3AF] py-8">
              Extra Perks When You Book Directly With Us
            </h3>
          </div>
          <div className="mt-3">
            <Link
              to={`mailto:${email}`}
              className="text-white flex items-center justify-center gap-2 lg:text-3xl md:text-2xl text-xl font-medium px-6 py-3 bg-[#deb666] hover:bg-[#B69854] active:scale-95 rounded-xl border-[#deb666] border"
            >
              <AiOutlineMail />
              {email}
            </Link>
          </div>
          <div className="mt-3">
            <Link
              to={`tel:${email}`}
              className="text-white flex items-center justify-center gap-2 lg:text-3xl md:text-2xl text-xl font-medium px-6 py-3 bg-[#deb666] hover:bg-[#B69854] active:scale-95 rounded-xl border-[#deb666] border "
            >
              <AiOutlinePhone />
              {number}
            </Link>
          </div>
        </div>
      </section>
      {/* --------------------------Hotel Reservation section----------------------- */}
      
    </div>
  );
};
