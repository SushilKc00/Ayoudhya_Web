import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = ({ title, description, icon }) => {
  let element;

  switch (title) {
    case "address":
      element = (
        <address className="contact-fs-15 text-clr-gray-dark font-bold">
          {description}
        </address>
      );
      break;
    case "email":
      element = (
        <Link
          to={`mailto:${description}`}
          className="contact-fs-15 text-clr-gray-dark font-bold"
        >
          {description}
        </Link>
      );
      break;
    case "web":
      element = (
        <Link
          to={`https://${description}`}
          className="contact-fs-15 text-clr-gray-dark font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </Link>
      );
      break;
    case "phone":
      element = (
        <Link
          to={`tel:${description}`}
          className="contact-fs-15 text-clr-gray-dark font-bold"
        >
          {description}
        </Link>
      );
      break;
    default:
      element = (
        <p className="contact-fs-15 text-clr-gray-dark font-bold">
          {description}
        </p>
      );
  }

  return (
    <div className="flex flex-col pt-2 pb-2 gap-3 items-start self-stretch lg:mt-5 md:mt-4 sm:mt-2">
      <div className="flex gap-3 items-center justify-start py-3 ps-0 pe-3">
        <div className="flex items-start bg-yellow-800 px-2 py-2 rounded-full">
          {" "}
          <img
            src={icon}
            width={25}
            height={30}
            alt={title}
            className="text-3xl "
            // style={{
            //   filter: "brightness(0) invert(1)",
            // }}
          />
        </div>
        <div>
          <h4 className="contact-fs-15 text-clr-yellow  uppercase font-black">
            {title}
          </h4>
          {element}
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
