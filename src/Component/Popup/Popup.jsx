import React from "react";

const Popup = () => {
  return (
    <div>
      <div className="bg-[rgb(222,205,172)] m-auto inset-0  h-svh">
        <div className=" w-[485px] h-[244px]  bg-[#FEFAF3]  absolute rounded-2xl shadow-xl m-auto inset-0">
          <div className="w-[285px] h-[63px]  bg-[#EBBF53]  absolute m-auto inset-0 ">
            <button className=" fixed m-auto inset-0"> Get Newsletter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
