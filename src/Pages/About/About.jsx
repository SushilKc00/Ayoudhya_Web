import React from "react";
import { Header } from "../../Components/Header/Header";
import aboutimg1 from "../../assets/aboutimg1.png";
import useScrollTop from "../../Components/useScrollTop";
import aboutBackgroundImage from "../../assets/videoimg.jpg";

export const About = () => {
  useScrollTop();
  return (
    <div className="about_section">
      <Header Color={"black"} />
      <div
        className="paralax_container"
        style={{
          backgroundImage: `url(${aboutBackgroundImage})`,
        }}
      >
        <h2 className="text-white text-5xl">About Awadh Vilas</h2>
      </div>
      <div className="about_content">
        <div className="xl:w-[80%] flex lg:flex-row flex-col m-auto px-4">
          <div className="lg:w-[60%] w-[100%]">
            <h2 className="text-gray-900 text-5xl">
              Hotel Awadh Vilas - Since 1989
            </h2>
            <p className="text-gray-600 md:text-2xl text-xl py-8 tracking-[0.2rem] leading-snug">
              Awadh Vilas is a heritage hotel located in Ayodhya, a city in the
              northern Indian state of Uttar Pradesh. The hotel is known for its
              grand architecture and luxurious amenities, offering a unique
              experience to its guests.
            </p>
            <p className="text-gray-600 md:text-2xl text-xl py-8 tracking-[0.2rem] leading-snug">
              The hotel boasts of spacious rooms and suites that are adorned
              with intricate woodwork and traditional artwork, reflecting the
              rich cultural heritage of Ayodhya. The rooms are equipped with
              modern amenities, such as air-conditioning, flat-screen TVs, and
              high-speed internet, ensuring a comfortable stay for guests.
            </p>
            <p className="text-gray-600 md:text-2xl text-xl py-8 tracking-[0.2rem] leading-snug">
              Awadh Vilas also has a multi-cuisine restaurant that serves a
              range of Indian and international delicacies. The restaurant is
              known for its delectable Awadhi cuisine, which is a popular
              culinary style of the region. Guests can enjoy their meals in the
              elegant dining hall or in the outdoor seating area that overlooks
              the hotel's lush gardens.
            </p>
            <p className="text-gray-600 md:text-2xl text-xl py-8 tracking-[0.2rem] leading-snug">
              In addition to its luxurious accommodations and fine dining, Awadh
              Vilas also offers various recreational activities for guests
              providing a complete experience of relaxation and rejuvenation.
            </p>
          </div>
          <div className="lg:w-[40%]">
            <img src={aboutimg1} alt="" className="w-full" />
            <div className="flex justify-center gap-10 mt-8">
              <div className="detail_card">
                <span>80</span>
                <p>Rooms</p>
              </div>
              <div className="detail_card">
                <span>18</span>
                <p>Resturant</p>
              </div>
              <div className="detail_card">
                <span>20</span>
                <p>Staffs</p>
              </div>
              <div className="detail_card">
                <span>2</span>
                <p>Pools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
