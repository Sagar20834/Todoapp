import React from "react";

const NavwithHambarger = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-5">
          Hamburger<span className="text-[#48A300]">Menu</span>
        </h1>
        <div className="flex justify-center items-center gap-9 font-semibold p-2">
          <a href="/">Home</a>
          <a href="/">Recipe</a>
          <a href="/">Add Recipe</a>
          <a href="/">Blog</a>
          <a href="/">Home</a>
          <a href="/">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default NavwithHambarger;
