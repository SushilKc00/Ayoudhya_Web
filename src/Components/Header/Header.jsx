import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/HeaderLogo.png";
import Nav_Links from "./NavLinks";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiUpArrow } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { MobileNav } from "./MobileNav";

export const Header = ({ Color }) => {
  const [changeHeaderStyle, setChagneHeaderStyle] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);

  const scrollHeaderStyling = () => {
    if (window.scrollY > 400) {
      setChagneHeaderStyle(true);
    } else {
      setChagneHeaderStyle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeaderStyling);
    return () => window.removeEventListener("scroll", scrollHeaderStyling);
  });

  return (
    <header
      style={{
        background: changeHeaderStyle ? "white" : "",
        position: changeHeaderStyle ? "fixed " : "",
        top: 0,
        color: changeHeaderStyle ? "black" : Color,
      }}
    >
      <nav>
        {!changeHeaderStyle && (
          <div className="upper_div md:flex justify-end gap-10 lg:visible hidden">
            <div className="flex items-center gap-3">
              <AiOutlinePhone size={14} />
              <a href="">7894561230</a>
            </div>
            <div className="flex items-center gap-3">
              <AiOutlineMail size={14} />
              <a href="mailto:contact@hotelawadhvilasayodhya.com">
                contact@hotelawadhvilasayodhya.com
              </a>
            </div>{" "}
          </div>
        )}

        <div className="lower_div">
          <div className="logo">
            <img
              src={headerLogo}
              alt="header_logo"
              style={{ width: "7rem", height: "7rem" }}
            />
          </div>
          <ul>
            {Nav_Links.map((links) => {
              return (
                <>
                  <li
                    className={`flex items-center ${links.class}`}
                    onClick={() => {
                      links.class && alert("Book Now");
                    }}
                  >
                    <NavLink
                      to={links.src}
                      style={({ isActive }) => {
                        return {
                          borderBottom: isActive ? "4px solid #DEB666" : "",
                        };
                      }}
                    >
                      {links.linkName}
                    </NavLink>
                    {/* <IoIosArrowDown size={12} /> */}
                  </li>
                </>
              );
            })}
          </ul>
          <div
            className="ham_burger_menu"
            onClick={() => {
              setHamMenu(!hamMenu);
            }}
          >
            <MdMenu size={30} />
          </div>
        </div>
      </nav>
      <MobileNav show={hamMenu} setHamMenu={setHamMenu} />
      <div
        className="scroll_up flex items-center justify-center"
        style={{
          background: "#DEB666",
          width: "60px",
          height: "60px",
          borderRadius: "4px",
          position: "fixed",
          bottom: "6%",
          right: changeHeaderStyle ? "2%" : "-100%",
          transition: "all 1.2s",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <BiUpArrow size={25} />
      </div>
    </header>
  );
};
