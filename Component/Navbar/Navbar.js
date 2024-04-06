import React from "react";

const Navbar = () => {
  return (
    <nav
      className="w-full h-16 px-[10%] bg-opacity-10 bg-white border-opacity-8 flex justify-center items-center"
      style={{ backgroundColor: "#261E2B" }}
    >
      <a className="shade-h1 text-lg font-bold">Bikinioff.ai</a>
      <div className="flex flex-1 justify-end items-center gap-5">
        <div className="btn">
          <div className="btn2">
            <button className="btn3">Pricing</button>
          </div>
        </div>
        <div className="btn">
          <div className="btn2">
            <button className="btn3">Login</button>
          </div>
        </div>
        <div className="btn">
          <button className="btn3">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
