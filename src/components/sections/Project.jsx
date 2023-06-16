import React from "react";
import { projects } from "../../utils/config";
import CardProject from "./CardProject";

const Project = () => {
  return (
    <section className="pt-32">
      <div className="container px-6 md:px-12 lg:px-40">
        <div className="w-full mb-10 ">
          <h3 className="text-light text-xl font-bold text-center md:text-2xl">
            Other Projects
            <a
              href="https://github.com/ferdisetyoamanda "
              target="_blank"
              rel="noreferrer"
              className="block text-primary font-normal font-fira mt-3 text-sm md:text-base"
            >
              view my current project
            </a>
          </h3>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
          {projects.map((project, index) => (
            <CardProject {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
