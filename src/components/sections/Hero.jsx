import React from "react";

function Hero() {
  return (
    <section id="home" className="pt-40 mb-20 md:pt-32 lg:pt-48 lg:mb-32">
      <div className="container px-6 md:px-12 lg:px-40">
        <h3 className="text-base  font-fira text-primary mb-6 md:text-lg">
          Hallo, my name is
        </h3>

        <h3 className="text-light text-4xl font-extrabold leading-tight mb-5 md:text-6xl lg:text-7xl">
          Ferdi Setyo Amanda
          <span className="block text-secondary">I web developer.</span>
        </h3>

        <p className="text-base mb-20 ">
        I am a D4 Informatics Engineering student of Harapan Bersama Polytechnic Tegal.
        </p>

        <a
          href="https://drive.google.com/file/d/1LsvD5J2LH6KL-8qoqSmJgpZzw9ScOrF9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-fira px-6 py-4 rounded border border-primary text-primary hover:bg-primary hover:bg-opacity-10 hover:shadow hover:shadow-teal-500
        "
        >
          Check my resume!
        </a>
      </div>
    </section>
  );
}

export default Hero;
