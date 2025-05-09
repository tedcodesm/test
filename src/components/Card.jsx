import React from "react";
import { FaBook, FaClock, FaStar } from "react-icons/fa";
import { card } from "../constants";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-8 px-8 flex flex-row">
     {
        card.map((card)=>{
            return(
             <div className="border border-black rounded-md py-2 px-2 flex space-y-4 flex-col">
        <img src="/test.jpg" alt="" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={card.image}
              alt=""
            />
            <h1>{card.name}</h1>
          </div>
          <button className="bg-green-400 px-2 py-1 ">science</button>
        </div>
        <p className="font-semibold ">
          Data science an machinelearning with python lore
        </p>
        <div className="flex flex-row justify-between w-full">
          <div className=" flex flex-row space-x-2">
            {" "}
            <FaClock size={20} color="black" />
            <h1> 06hr 15 mins</h1>
          </div>
          <div className=" flex flex-row space-x-2">
            {" "}
            <FaBook size={20} color="black" />
            <h1> 29lectures</h1>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between">
          <div>
            <h1 className="text-green-400 text-lg font-semibold">{card.ammount}</h1>
          </div>
          <div className="flex flex-row items-center">
            <h1>4.9</h1>
            <FaStar size={20} color="yellow" />
            <FaStar size={20} color="yellow" />
            <FaStar size={20} color="yellow" />
            <FaStar size={20} color="yellow" />
            <FaStar size={20} color="gray" />
          </div>
        </div>
      </div>
            )
        })
     }
    </div>
  );
};

export default Card;
