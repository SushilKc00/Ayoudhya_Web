import React from "react";
import { Link } from "react-router-dom";
import Nav_Links from "../Header/NavLinks";
import logo from "../../assets/HeaderLogo.png";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="upper_footer max-w-[1320px] m-auto py-4 px-2">
        <div>
          <img
            src={logo}
            loading="lazy"
            decoding="async"
            alt="footer_logo"
            width={100}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            repudiandae quisquam veritatis labore obcaecati in. Aliquam hic
            repellendus illo, unde autem saepe. Molestias nulla dolor in,
            veritatis at asperiores quas.
          </p>
        </div>
        <div className="mt-10">
          <h3>Latest News</h3>
          <ul>
            <li>
              <Link to="#">Live your myth</Link>
              <p>August 12</p>
            </li>
            <li>
              <Link to="#">Live your myth</Link>
              <p>August 12</p>
            </li>{" "}
            <li>
              <Link to="#">Live your myth</Link>
              <p>August 12</p>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3>Useful links</h3>
          <ul>
            {Nav_Links.map((links, index) => {
              return (
                <li className="flex items-center gap-3" key={index}>
                  <Link to={links.src}>{links.linkName}</Link>
                  {/* <IoIosArrowDown size={12} /> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-10">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="">25,Ayuoghya</a>
            </li>
            <li>
              <a href="">Phone: 7894561230</a>
            </li>
            <li>
              <a href="mailto:contact@hotelawadhvilasayodhya.com">
                Email:contact@hotelawadhvilasayodhya.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lower_container">
        <div className="lower_footer max-w-[1320px] m-auto py-4 px-2">
          <div className="md:flex justify-between items-center">
            <div>
              <p className="md:text-2xl text-xl text-gray-500">
                Copyright 2021 Hotel Awadh Vilas All Rights Reserved.
              </p>
            </div>
            <div className="flex gap-5 md:mt-0 mt-8">
              <div className="social_icons">
                <Link to="">{<FaFacebookF size={20} />}</Link>
              </div>
              <div className="social_icons">
                <Link to="">{<AiOutlineTwitter size={20} />}</Link>
              </div>{" "}
              <div className="social_icons">
                <Link to="">{<AiOutlineMail size={20} />}</Link>
              </div>{" "}
              <div className="social_icons">
                <Link to="">{<FaLinkedin size={20} />}</Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
