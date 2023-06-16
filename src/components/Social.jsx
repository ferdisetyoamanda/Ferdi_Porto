import React from "react";
import { socials } from "../utils/config";
import { Icon } from "./icons/Icon";

const Social = () => {
  return (
    <>
      <div className="hidden container lg:block w-12 fixed left-5 bottom-0 xl:left-20">
        <ul className="flex flex-col gap-6 justify-center items-center">
          {socials.map(({ link, logo }, index) => (
            <li
              className="transition-all from-neutral-500 hover:-translate-y-1 hover:text-primary"
              key={index}
            >
              <a href={link} target="_blank" rel="noreferrer">
                <Icon logo={logo} />
              </a>
            </li>
          ))}

          <li className="h-28 w-[2px] bg-secondary"></li>
        </ul>
      </div>
      <div className="hidden container lg:block w-12 fixed right-5 bottom-0 xl:right-20">
        <ul className="flex flex-col gap-6 justify-center items-center">
          <li className="rotate-90 -translate-y-24 tracking-widest transition-all duration-500 hover:text-primary hover:-translate-y-[6.3rem]">
            <a
              href="mailto:setyoamanda23@gmail.com"
              className="text-sm font-fira"
            >
              setyoamanda23@gmail.com
            </a>
          </li>
          <li className="h-28 w-[2px] bg-secondary"></li>
        </ul>
      </div>
    </>
  );
};

export default Social;
