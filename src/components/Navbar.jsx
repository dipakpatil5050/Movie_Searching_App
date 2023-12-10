import React from "react";

function Navbar() {
  return (
    <div className=" lg:flex md:flex main flex-wrap justify-between items-center px-3 py-2.5 bg-[#0d0a1e] text-white shadow-md sticky top-0">
      <div className="left flex items-center space-x-3 justify-center">
        <img
          className="w-10 ml-4 "
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="logo"
        />
        <h2 className=" text-white">Entertainment Media</h2>
      </div>

      <div className="right ">
        <ul className="justify-center flex space-x-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
