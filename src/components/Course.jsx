import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Course = () => {
  return (
    <div>
      <div className="px-8 w-full flex flex-row justify-between items-center py-8 bg-white">
        <div>
          {" "}
          <h1 className="font-bold text-4xl">
            All <span className="text-green-400">courses</span> of Edule
          </h1>
        </div>
        <div className="relative">
          <input
            placeholder="Search your course"
            className="w-80 py-2 border border-black rounded-md ps-4"
            type="text"
          />
          <div className="absolute right-2 top-2 bg-green-400 px-1 py-1 rounded-md">
            <FaMagnifyingGlass size={20} color="black" />
          </div>
        </div>
      </div>
      <div className="w-full px-8 py-4">
        <div className="flex flex-row items-center bg-green-400  rounded-md grid grid-cols-7 py-4 px-8">
        <div>
          <button className="bg-white rounded-full py-2 px-2">
            <FaArrowLeft size={20} color="black" />
          </button>
        </div>
        <div>
          {" "}
          <button className="border bg-white rounded-md px-2 py-1">
            UI/UxDesign
          </button>
        </div>
        <div>
          {" "}
          <button className="border bg-white rounded-md px-2 py-1">
            Development
          </button>
        </div>
        <div>
          {" "}
          <button className="border bg-white rounded-md px-2 py-1">
            DataScience
          </button>
        </div>
        <div>
          {" "}
          <button className="border bg-white rounded-md px-2 py-1">
            Business
          </button>
        </div>
        <div>
          {" "}
          <button className="border bg-white rounded-md px-2 py-1">
            finance{" "}
          </button>
        </div>
        <div>
          <button className="bg-white rounded-full py-2 px-2">
            <FaArrowRight size={20} color="black" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Course;
