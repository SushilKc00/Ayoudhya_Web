import React from "react";
import "./contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { Header } from "../../Components/Header/Header";
import ContactInfo from "../../Components/contact-info/ContactInfo";
import Call from "../../assets/svg/call-chat-rounded-svgrepo-com.svg";
import Mail from "../../assets/svg/email-svgrepo-com.svg";
import Web from "../../assets/svg/browser-web-internet-network-svgrepo-com.svg";
import Location from "../../assets/svg/map-location-svgrepo-com.svg";
import { Link } from "react-router-dom";
import useScrollTop from "../../Components/useScrollTop";

export const Contact = () => {
  const data = [
    {
      title: `address`,
      description: `PNB Road Near Maniramdas Chhawani Chhoti Chhawani Ayodhya, Uttar Pradesh 224123`,
      icon: Location,
    },
    {
      title: `email`,
      description: `contact@hotelawadhvilasayodhya.com`,
      icon: Mail,
    },
    { title: `web`, description: `hotelawadhvilasayodhya.com`, icon: Web },
    { title: `phone`, description: `+91 9120053008`, icon: Call },
  ];

  const social = [
    { icon: <FaFacebookF />, link: "#", title: "facebook" },
    { icon: <FaInstagram />, link: "#", title: "instagram" },
    { icon: <CiLinkedin />, link: "#", title: "linkedin" },
    { icon: <FaTwitter />, link: "#", title: "twitter" },
  ];
  useScrollTop();
  return (
    <div className="bg-gray-200 contact-page">
      <Header Color="bg-white" />
      <main>
        <section className="map">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56987.86494284062!2d82.12938176192195!3d26.78450689100897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07c51f070563%3A0xd8fde853fd57cbe3!2sAyodhya%20Hotal!5e0!3m2!1sen!2sin!4v1704871639502!5m2!1sen!2sin"
              // width={100}
              height={400}
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section className="conatct-conten lg:py-24 bg-slate-50">
          <div className="lg:flex gap-3 px-3 py-4 xl:w-[77%]  m-auto mt-8">
            <div className="lg:w-[60%] p-3">
              <div className="flex items-start lg:pb-4">
                <h2 className="contact-h2-lg text-clr-gray  ff-ral font-bold uppercase">
                  contact us
                </h2>
              </div>
              <form>
                <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block contact-label text-clr-gray  font-normal  capitalize"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        autoComplete="username"
                        className="block w-full  border-0 py-3.5 px-2.5 outline-none  lg:text-3xl md:text-2xl text-2xl   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                        id="name"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Phone"
                      className="block contact-label text-clr-gray  font-normal  capitalize"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        id="Phone"
                        name="number"
                        placeholder="Phone Number"
                        autoComplete="phone"
                        className="block w-full  border-0 py-3.5 px-2.5 outline-none lg:text-3xl md:text-2xl text-2xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Email"
                      className="block contact-label text-clr-gray  font-normal  capitalize"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        id="Email"
                        name="email"
                        placeholder="Your Email"
                        className="block w-full  border-0 py-3.5 px-2.5 outline-none lg:text-3xl md:text-2xl text-2xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="Subject"
                      className="block contact-label text-clr-gray  font-normal  capitalize"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="Subject"
                        name="Subject"
                        placeholder="Subject"
                        className="block w-full  border-0 py-3.5 px-2.5 outline-none lg:text-3xl md:text-2xl text-2xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block contact-label text-clr-gray font-normal  capitalize"
                    >
                      message
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Your Message..."
                        className="block w-full lg:text-3xl lg:h-60 md:h-52 h-36  border-0 py-3.5 px-2.5 outline-none md:text-2xl text-2xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex lg:justify-end md:justify-start lg:mr-2">
                  <button
                    className="py-3 lg:w-max w-[100%] md:w-max px-6 uppercase text-lg font-semibold bg-yellow-500 text-white active:scale-90 hover:bg-yellow-600 flex items-center gap-2 contect-btn"
                    onClick={() => {
                      event.preventDefault();
                    }}
                  >
                    {" "}
                    send your message
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-[40%] p-3 lg:mt-0 mt-10">
              <div className="flex items-start  lg:pb-4">
                <h2 className="contact-h2-lg text-clr-gray ff-ral font-bold uppercase ">
                  get in touch
                </h2>
              </div>
              {data.map((item, index) => (
                <ContactInfo
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
              <div className="social-icon flex mt-4">
                {social.map((item, i) => (
                  <Link
                    to={item.link}
                    key={i}
                    className="rounded-se-sm flex items-center justify-center text-3xl leading-10 m-1 bg-white border border-solid border-slate-300 h-14 w-14 text-blue-700 hover:text-gray-100 hover:bg-blue-700"
                  >
                    <span className="sr-only">{item.title}</span>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
