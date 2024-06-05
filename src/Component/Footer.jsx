import React from "react";
import { Google } from "../Shared/Google";
import { App } from "../Shared/AppStore";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaYoutubeSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#0B0D17] flex flex-col items-start text-[12px] md:text-[13px] font-[400] gap-4 pt-16 pb-5 w-full h-auto px-4 md:px-12 text-white ">
      <div className="w-full flex items-start md:justify-between md:pr-64 pb-8 gap-4 text-start">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-[16px] font-[500] text-[#F4F5F7]">
            {" "}
            Company
          </a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="#" className="text-[16px] font-[500] text-[#F4F5F7]">
            {" "}
            Support
          </a>
          <a href="#">Help Center</a>
          <a href="#">Safety Center</a>
        </div>

        <div className="flex flex-col gap-3">
          <a href="#" className="text-[16px] font-[500] text-[#F4F5F7]">
            Legal
          </a>
          <a href="#">Cookies Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Dispute resolution</a>
        </div>

        <div className="flex flex-col gap-2">
          <p>Install app</p>
          <Google />
          <App />
        </div>
      </div>
      <div className="w-full border-[0.2px] border-white"></div>

      <div className="pt-10 pl-3 flex items-center justify-between w-[85%]">
        <div>
          <p>© 2021 LILIES, All rights reserved</p>
        </div>
        <div className="flex items-center justify-center space-x-4 text-lg">
          <FaInstagram />
          <SlSocialTwitter />
          <FaYoutubeSquare />
        </div>
      </div>
    </div>
  );
};
