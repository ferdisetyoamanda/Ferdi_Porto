import React from "react";
import { Github } from "../icons/Github";
import { portfolios } from "../../utils/config";
import { External } from "../icons/External";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-32">
      <div className="container px-6 md:px-12 lg:px-40">
        <div className="flex items-center justify-start mb-10 ">
          <h3 className="text-light text-xl font-bold w-2/5 md:w-1/4 md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-primary font-fira text-base md:text-xl lg:text-2xl xl:text-3xl">
             
            </span>{" "}
            Portfolio
          </h3>
          <span className="block w-3/5 md:w-3/4 h-[.8px] bg-slate-600"></span>
        </div>
        <div>
          {portfolios.map((portfolio, index) =>
            index !== 1 ? (
              <div
                key={index}
                className="w-full py-9 px-7 rounded shadow-lg shadow-slate-900 bg-slate-700 bg-opacity-20 mb-7 md:mb-12 lg:mb-24 lg:bg-transparent lg:shadow-none lg:relative group"
              >
                <div className="hidden max-w-lg h-[19rem] brightness-75 blur-[4px] rounded overflow-hidden shadow-xl shadow-slate-800 lg:absolute lg:block lg:-z-10 lg:right-8 transition-all duration-500 ease-in-out group-hover:blur-0 group-hover:brightness-100">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:w-3/4 xl:w-[60%]">
                  <div className="mb-7">
                    <p className="text-primary text-sm font-fira mb-1">
                      {portfolio.featured ? "Featured Project" : ""}
                    </p>
                    <h4 className="text-light text-xl font-bold lg:text-2xl">
                      <a
                        href={portfolio.site}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {portfolio.title}
                      </a>
                    </h4>
                  </div>
                  <p className="text-secondary text-base mb-7 lg:bg-slate-800 lg:bg-opacity-90 lg:p-5 lg:rounded">
                    {portfolio.description}
                  </p>
                  <div className="mb-7">
                    <ul className="flex gap-1 font-fira text-sm flex-wrap text-slate-500">
                      {portfolio.tech.map((techStack, index) => (
                        <li key={index} className="mr-2">
                          {techStack}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <a
                      href={portfolio.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      <Github />
                    </a>
                    <a
                      href={portfolio.site}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      <External />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="w-full py-9 px-7 rounded shadow-lg shadow-slate-900 bg-slate-700 bg-opacity-20 mb-7 md:mb-12 lg:mb-24 lg:bg-transparent lg:shadow-none lg:relative group"
              >
                <div className="hidden max-w-lg h-[19rem] brightness-75 blur-[4px] rounded overflow-hidden shadow-xl shadow-slate-800 lg:absolute lg:block lg:-z-10 lg:left-8 transition-all duration-500 ease-in-out group-hover:blur-0 group-hover:brightness-100">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="lg:w-full lg:pl-44 lg:text-right lg:flex lg:flex-col lg:items-end ">
                  <div className="mb-7">
                    <p className="text-primary text-sm font-fira mb-1">
                      {portfolio.featured ? "Featured Project" : ""}
                    </p>
                    <h4 className="text-light text-xl font-bold lg:text-2xl">
                      <a
                        href={portfolio.site}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary"
                      >
                        {portfolio.title}
                      </a>
                    </h4>
                  </div>
                  <p className="text-secondary text-base mb-7 lg:bg-slate-800 lg:bg-opacity-90 lg:p-5 lg:rounded  xl:w-[70%]">
                    {portfolio.description}
                  </p>
                  <div className="mb-7">
                    <ul className="flex gap-1 font-fira text-sm flex-wrap text-slate-500">
                      {portfolio.tech.map((techStack, index) => (
                        <li key={index} className="mr-2 ">
                          {techStack}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <a
                      href={portfolio.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      <Github />
                    </a>
                    <a
                      href={portfolio.site}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      <External />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
