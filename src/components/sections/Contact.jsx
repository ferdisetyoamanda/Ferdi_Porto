import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-10 md:pt-44">
      <div className="container px-6 md:px-20 lg:px-40 xl:px-72">
        <div className="w-full mb-10 ">
          <h3 className="text-light text-3xl font-bold text-center mb-5 md:text-4xl xl:text-5xl">
            <span className="block text-primary font-normal font-fira mb-3 text-base">
              Who's Next?
            </span>
            Get In Touch
          </h3>
          <p className="text-base mb-14 text-center">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:setyoamanda23@gmail.com"
              className="border border-primary rounded text-primary font-fira py-4 px-6 hover:bg-primary hover:bg-opacity-10 hover:shadow hover:shadow-teal-500"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
