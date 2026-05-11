import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const icon = [
  <FaFacebook />,
  <FaTwitter />,
  <FaSquareInstagram />,
  <FaGoogle />,
];
const pages = ["Home", "About Us", "Contact Us", "Our Team"];

export const Footer = () => {
  return (
    <div className="  bg-[#faf7ff] flex flex-col  shadow-md w-full rounded-3xl">
      <div className="flex flex-col gap-4 p-4 items-center text-xl">
        <div className="flex gap-4 ">
          {icon.map((i) => (
            <span className="p-2 bg-white rounded-full hover:text-purple-700 hover:outline-1 hover:outline-purple-700 hover:scale-75 transition duration-500 ease-in-out">
              {i}
            </span>
          ))}
        </div>
        <div className="flex gap-4 font-semibold text-xs ">
          {pages.map((page) => (
            <span className="hover:text-purple-700 ease-linear hover:scale-110 transition duration-500">
              {page}
            </span>
          ))}
        </div>
      </div>
      {/* <div className=" text-center text-xs  bg-purple-400 py-2  ">
        Copyright@2025;Design By Digipine
      </div> */}
    </div>
  );
};
