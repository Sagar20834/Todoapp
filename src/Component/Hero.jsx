import React, { useEffect } from "react";
import sun from "../assets/Sun.svg";
import tick from "../assets/tick.svg";
import "../../src/App.css";

const Hero = () => {
  useEffect(() => {
    // Select the input element by id
    const inputElement = document.querySelector(".firstTextbox");
    console.log(inputElement);

    // Do something with the input element
    if (inputElement) {
      inputElement.style.backgroundColor = "lightyellow"; // Example action
    }
  });
  return (
    <div className="bg-[#FBFBFB] items-center ">
      <div className=" pb-8">
        <h1 className="heading font-sans text-[32px] font-bold text-[#48A300] text-center  md:text-[64px]">
          Focus on <span className="text-[#61481C]">Today</span>
        </h1>
        <div className="card max-w-[660px] bg-[#FBFBFB]  m-6	 border-2 shadow-md rounded-lg p-4 md:m-auto ">
          <h1 className="text-[32px] flex gap-2  font-bold">
            Today <img src={sun} alt=" Sun" className=" align-middle" />
          </h1>
          <p className="  text-[#858585]  text-[16px]">
            Raise the bar by completing your goals!
          </p>
          <div className="bar h-6 bg-[#48A3001A] mt-2 rounded-lg mb-4">
            <div className="progress h-full bg-[#48A300] w-1/3 rounded-lg">
              <span className=" flex align-middle text-center pl-3 text-white">
                2/3 completed
              </span>
            </div>
          </div>
          <p className=" error-label text-[#FF5151]">
            Please set all the 3 goals!
          </p>
          <div className="textarea mt-4 h-full  bg-[#FFFFFF] md:h-20 p-3 border-solid border-2 rounded-2xl flex justify-start items-center ">
            <div
              className="circle h-6 w-6  border-solid border-2  border-[#61481C] rounded-full shrink-0 flex justify-center items-center  cursor-pointer  "
              onClick={() => {
                const circle = document.querySelector(".circle");
                circle.style.backgroundColor = "#48A300";
              }}
            >
              <img src={tick} alt="tick" className="tick align-center" />
            </div>
            <input
              type="text"
              name="firstTextbox"
              placeholder="Add new goal... "
              className="h-8  w-full ml-2 outline-none border-none placeholder-gray-400  grow"
            />
          </div>
          <div className="textarea mt-4 h-full  bg-[#FFFFFF] md:h-20 p-3 border-solid border-2 rounded-2xl flex justify-start items-center ">
            <div className="circle h-6 w-6  border-solid border-2  border-[#61481C] rounded-full shrink-0"></div>
            <input
              type="text"
              name=""
              placeholder="Add new goal... "
              className="h-8 w-full  ml-2 outline-none border-none placeholder-gray-400  "
            />
          </div>
          <div className="textarea mt-4 h-full  bg-[#FFFFFF] md:h-20 p-3 border-solid border-2 rounded-2xl flex justify-start items-center ">
            <div className="circle h-6 w-6  border-solid border-2  border-[#61481C] rounded-full shrink-0"></div>
            <input
              type="text"
              name=""
              placeholder="Add new goal... "
              className="h-8 w-full ml-2 outline-none border-none placeholder-gray-400    "
            />
          </div>
          <p className=" quote text-center font-medium mt-8">
            “Keep Going, You’re making great progress!”
          </p>
          <p className="text-center font-normal  mt-16">
            Made with ❤❤ By Sagar Kumar Sah Kanu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
