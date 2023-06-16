import React from "react";
import { socials } from "../utils/config";
import { Icon } from "./icons/Icon";

const Footer = () => {
  return (
    <div className="pt-32 pb-7">
      <div className="container px-6 md:px-12 lg:px-40">
        <div className="w-full mb-10 lg:hidden">
          <ul className="flex items-center justify-center gap-7">
            {socials.map(({ link, logo }, index) => (
              <li key={index} className="hover:text-primary">
                <a href={link} target="_blank" rel="noreferrer">
                  <Icon logo={logo} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-xs mx-auto">
          <p className="text-center text-sm font-fira">
            Built with Ferdi Setyo Amanda &copy;2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
