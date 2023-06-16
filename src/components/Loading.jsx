import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-6xl font-fira text-primary font-extrabold relative after:content-[''] after:absolute after:-left-[1.7rem] after:-top-3 after:w-[5.5rem] after:h-[5.5rem] after:border-2 after:shadow-[0_0_220px_10px] after:shadow-teal-300  after:rounded-lg after:border-primary after:animate-[spin_3s_linear_infinite]">
        A
      </h1>
    </div>
  );
};

export default Loading;
