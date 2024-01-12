import React from "react";
import { Header } from "../../Components/Header/Header";
import { Link } from "react-router-dom";
// import BannerImg from "../../assets/ayodhya.png";
import BannerImg from "../../assets/jesse-gardner.jpg";
import Room1 from "../../assets/singleroom1.png";
import Room2 from "../../assets/singleroom2.jpg";
import Room3 from "../../assets/singleroom3.jpg";

export const Rooms = () => {
  // -------banner img--------- //
  const imgurl = {
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const roomCardData = [
    {
      url: Room1,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [{ icon: "" }, { icon: "" }, { icon: "" }, { icon: "" }],
      price: "189,00",
      time: "per night",
    },
    {
      url: Room2,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [{ icon: "" }, { icon: "" }, { icon: "" }, { icon: "" }],
      price: "219,00",
      time: "per night",
    },
    {
      url: Room3,
      title: "Room",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      icons: [{ icon: "" }, { icon: "" }, { icon: "" }, { icon: "" }],
      price: "219,00",
      time: "per night",
    },
  ];

  return (
    <div>
      <section className="">
        <div>
          <Header />
          <div className="w-[100%] h-[100%]" style={imgurl}>
            <div
              className="w-[100%] h-[100%] py-10"
              style={{
                background: `linear-gradient(95deg, rgba(147, 0, 17, 0.50) 0%, rgba(86, 20, 147, 0.50) 100%)`,
              }}
            >
              <div className="max-w-[1320px] m-auto flex flex-col justify-center items-start">
                <div className="py-5">
                  <h1 className="capitalize text-slate-50 font-normal lg:text-6xl md:text-5xl text-3xl">
                    Rooms view
                  </h1>
                </div>
                <div className="py-4">
                  <p className="text-2xl font-normal text-slate-50  capitalize whitespace-pre">
                    <Link to="/" className=" text-2xl">
                      Home
                    </Link>
                    {"  "}/ <span className="text-yellow-400">rooms view</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------room card------ */}
      <section className="w-[100%] py-12">
        {roomCardData.map((item, i) => (
          <Link to="/room-Details">
            <div className="max-w-[1320px] m-auto lg:flex shadow-sm" key={i}>
              <div className="overflow-hidden lg:pb-3 lg:pe-3">
                <img
                  src={item.url}
                  alt={item.title}
                  className="hover:scale-110"
                />
              </div>
              <div className="lg:flex md:flex">
                <div className="flex flex-col items-start justify-start gap-3">
                  <div>
                    <h3 className="lg:text-6xl md:text-5xl text-3xl text-clr-gray font-normal">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                  {item.icons.map((item, i) => {
                    <div
                      className="service-Icon flex items-center justify-center py-2 px-4"
                      key={i}
                    >
                      {item.icon}
                    </div>;
                  })}
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <div>
                    <span className="sr-only">room price</span>
                    <span className="room-price text-3xl">{item.price}</span>
                  </div>
                  <span>{item.time}</span>
                  <br />
                  <div>
                    <Link to="#" className="uppercase py-2 px-10">
                      book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
