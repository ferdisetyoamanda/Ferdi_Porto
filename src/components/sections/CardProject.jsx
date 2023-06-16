import React from "react";
import { Folder } from "../icons/Folder";
import { Github } from "../icons/Github";

const CardProject = ({ title, description, tech, repository }) => {
  return (
    <div className="w-full py-9 px-7 rounded shadow-lg shadow-slate-900 bg-slate-700 bg-opacity-20 mb-7 transition-all duration-500 ease-in-out hover:-translate-y-2 md:mb-0 md:h-[22rem] lg:h-[23rem]">
      <a href={repository} target="_blank" rel="noreferrer">
        <div className="flex justify-between items-center mb-8">
          <div className="text-primary">
            <Folder />
          </div>
          <div>
            <Github />
          </div>
        </div>
        <div className="mb-3">
          <h3 className="text-light hover:text-primary text-xl font-bold lg:text-lg">
            {title}
          </h3>
        </div>
        <div className="mb-5">
          <p className="text-base text-secondary card-description">
            {description}
          </p>
        </div>
        <div className="">
          <ul className="flex flex-wrap items-center justify-start text-sm font-fira text-slate-500 gap-2">
            {tech.map((techStack, index) => (
              <li key={index} className="mr-2">
                {techStack}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default CardProject;
