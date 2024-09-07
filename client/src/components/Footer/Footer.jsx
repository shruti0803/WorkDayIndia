import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsCurrencyDollar,
  BsCurrencyRupee
} from "react-icons/bs";
import { TbMan } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/data";
import MobileFooter from "./MobileFooter/MobileFooter";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const socialIcons = [
    {
      to: "https://x.com/SIH2024_MIC",
      icon: BsTwitter,
    },
    {
      to: "https://www.facebook.com/mhrdInnovation/",
      icon: BsFacebook,
    },
    {
      to: "https://in.linkedin.com/company/moe-innovation-cell",
      icon: BsLinkedin,
    },
    {
      to: "https://www.instagram.com/mhrd.innovationcell/",
      icon: BsInstagram,
    },
    {
      to: "https://www.pinterest.com/",
      icon: BsPinterest,
    },
  ];
  return (
    <footer className="border-t w-full lg:py-14 lg:pb-5 pb-3">
      <div className="contain">
        <div className="w-full flex flex-col items-start justify-start gap-10">
          <div className="w-full hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-5 items-start justify-start">
            {footerLinks.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-start flex-col w-full gap-5"
              >
                <h2 className="text-base font-semibold text-darkColor">
                  {item.title}
                </h2>
                <div className="flex items-start justify-start flex-col gap-4">
                  {item.links.map((item, i) => (
                    <Link
                      to={item.to}
                      key={i}
                      className="text-gray-500 hover:underline transition-all duration-300 hover:text-darkColor"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <MobileFooter />
          <div className="w-full flex items-center justify-between border-t pt-5 flex-col gap-2 sm:flex-row sm:gap-0">
            <div className="flex items-center justify-start gap-4 flex-col md:flex-row">
              <div className="flex items-end justify-end select-none">
                <h2 className="text-3xl select-none font-black tracking-tighter text-gray-500">
                रोजगार भारत
                </h2>
                <span className="border text-[6px] rounded-full w-3 h-3 flex items-center justify-center">
                  
                </span>
              <p className="text-sm font-medium text-gray-400">
                © 2024-25 Smart India Hackathon. All rights reserved {year}
              </p>
              </div>
            </div>
            <div className="flex items-center justify-end lg:gap-6 flex-col md:flex-row">
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                {socialIcons.map((item, i) => (
                  <a
                    href={item.to}
                    target="_blank"
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>
                    <TfiWorld />
                  </span>
                  हिन्दी
                </div>
                <span className="flex items-center gap-2 cursor-pointer">
                  <span>
                    <BsCurrencyRupee />
                  </span>
                  INR
                </span>
                <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center hover:text-darkColor hover:border-none hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                  <TbMan size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
