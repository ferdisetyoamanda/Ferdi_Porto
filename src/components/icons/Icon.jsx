import React from "react";
import { Github } from "./Github";
import { Linkedin } from "./Linkedin";
import { Instagram } from "./Instagram";
import { Facebook } from "./Facebook";

const Icon = ({ logo }) => {
  switch (logo) {
    case "Github":
      return <Github />;
    case "Linkedin":
      return <Linkedin />;
    case "Instagram":
      return <Instagram />;
    case "Facebook":
      return <Facebook />;
    default:
      return;
  }
};

export { Icon };
