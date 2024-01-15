import React from "react";
import Nav_Links from "./NavLinks";
import { NavLink } from "react-router-dom";

export const MobileNav = ({ show, setHamMenu }) => {
  return (
    <ul
      className="mobile_nav"
      style={{
        right: show ? "0" : "-100%",
        transition: "all 0.5s",
      }}
    >
      <p
        className="text-5xl text-gray-600"
        onClick={() => {
          setHamMenu(!show);
        }}
      >
        X
      </p>
      <p className="text-center text-4xl text-gray-500">Menu</p>
      {Nav_Links.map((links, index) => {
        return (
          <li  className={`flex items-center ${links.class}`}
           key={index + links}>
            <NavLink
                    to={links.src === "/book now" ? "/contact_us" : links.src}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive  ? "4px solid #DEB666" : "",
                      };
                    }}
                  >
                    {links.linkName}
                  </NavLink>
            {/* <IoIosArrowDown size={12} /> */}
          </li>
        );
      })}
    </ul>
  );
};
