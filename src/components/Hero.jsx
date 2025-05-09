import React from "react";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-2 ">
      <div className="flex flex-col space-y-8 px-8 items-start h-screen justify-center">
        <h1 className="text-green-500 text-md font-semibold">
          Start your favorite course
        </h1>
        <p className="text-2xl font-bold max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          veniam aspernatur,
          <span className="text-green-500 border-b-2 border-green-400"> eaque odit a es </span>
        </p>
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          temporibus hic quae ratione quas commodi sint praesentium ex, possimus
          veritatis pariatur animi nisi adipisci distinctio quos fuga, eius,
          facere quasi.
        </p>
        <button className="bg-green-700 rounded-md px-4 py-1 text-white font-semibold">Start a course</button>
      </div>
      <div className="w-full items-center py-5 justify-center h-screen">
        <img className="" src="/graduate.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
