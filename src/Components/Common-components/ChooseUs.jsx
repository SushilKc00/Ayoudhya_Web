import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import BgImg2 from "../../assets/bg-img/rama.webp";
import Temple1 from "../../assets/temple1.png";

function ChooseUs() {

    const destination = [
        {
          destinationName: "Saryu Nadi",
          destinationRange: "500m",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Ram Pairi",
          destinationRange: "400m",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Ramayan Temple",
          destinationRange: "100m",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Hanuman Garhi",
          destinationRange: "1Km",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Kanak Bahwan",
          destinationRange: "1.25Km",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Dashrath Mahal",
          destinationRange: "1.35Km",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Shree Ram Janm Bhoomi",
          destinationRange: "1.5 Km",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Railway Station",
          destinationRange: "1Km Nadi",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Bus Station",
          destinationRange: "1.5 Km",
          icon: <AiOutlineCheck />,
        },
        {
          destinationName: "Airport Will Start Soon",
          destinationRange: "2 Km",
          icon: <AiOutlineCheck />,
        },
      ];
  return (
    <section className="w-[100%] h-[100%]">
        <div
          className="h-[100%] w-[100%]"
          style={{
            backgroundImage: `url(${BgImg2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/70 w-[100%] h-[100%]">
            <div className="lg:py-28">
              <div className="max-w-[1320px] m-auto p-2 flex flex-col items-center justify-center ">
                <div className="">
                  <h2 className="text-center lg:text-7xl md:text-6xl text-5xl capitalize text-yellow-800 font-semibold font-fl-BSC">
                    why choose us
                  </h2>
                </div>
                <div className="max-w-[60%]">
                  <p className="text-center lg:text-8xl md:text-5xl text-4xl font-semibold capitalize font-fl-lex text-slate-100">
                    closest from Famous Places In Ayodha ji
                  </p>
                </div>
                <div className="boder-b-4 border-yellow-500 h-5 mt-3"></div>
                <div className="mt-7 container lg:flex md:flex block">
                  <div className="bg-white p-5 lg:w-[60%] w-[100%] lg:me-20 h-max">
                    {destination.map((item, i) => (
                      <div className="flex gap-2 border-dotted border-b-2 border-yellow-800 w-[100%] pb-2 mb-3" key={i}>
                        <div className="icon text-3xl text-yellow-800">
                          {item.icon}
                        </div>
                        <div className="">
                          <h3 className="font-normal lg:text-3xl md:text-2xl text-xl  font-fl-lex">
                            {item.destinationName} - {item.destinationRange}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="lg:w-[40%] w-[100%] max-h-[550px] p-3 flex items-center justify-center">
                    <img
                      src={Temple1}
                      alt="temple"
                      className="max-h-[390px] max-w[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ChooseUs