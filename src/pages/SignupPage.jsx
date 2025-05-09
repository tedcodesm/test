import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="w-full h-screen flex items-center bg-lime-400 justify-center ">
      <div className=" flex flex-row grid grid-cols-2 bg-red-400  w-[80%] h-[80%] shadow-xl shadow-black items-center justify-between">
        <div className="flex flex-col px-8 items-start space-y-7">
          <h1 className="font-bold text-6xl text-white">Welcome</h1>
          <hr className="border w-20" />
          <p className="text-white text-md max-w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolores accusantium perspiciatis soluta, voluptatibus odio modi,
            veniam, sed quae quaerat tenetur! Modi, at voluptatem minima ratione
            dolor dicta soluta
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 rounded-md text-white  px-2 py-1 ">
            {" "}
            Learn More
          </button>
        </div>
        <div className="items-center bg-gray-500 bg-opacity-20 py-5 justify-center px-8 flex space-y-6 flex-col">
          <h1 className="text-5xl text-white font-bold">Signin</h1>
          <div className="flex flex-col">
            <label className="text-white" htmlFor="">
              Username
            </label>
            <input type="text" placeholder="username" className="rounded-full text-white ps-4 bg-gray-500 bg-opacity-20" />
          </div>
          <div className="flex flex-col">
            <label className="text-white" htmlFor="">
              password
            </label>
            <input type="text" placeholder="**********" className="rounded-full ps-4 bg-gray-500 bg-opacity-20" />
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 w-40 rounded-full text-white  px-2 py-1 ">
            {" "}
            submit{" "}
          </button>
          <div className="flex flex-row gap-4">
          <FaFacebook size={24} color="white"/>
          <FaInstagram size={24} color="white"/>
          <FaPinterest size={24} color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
