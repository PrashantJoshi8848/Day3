import Image from "next/image";
import React from "react";

const Navabar = () => {
  return (
    <div className=" drop-shadow-lg w-screen bg-black h-10 text-white flex justify-between align-middle ">
      <div className="flex-1 flex align-middle justify-evenly">
        <div className=" rounded-full bg-green-500 h-9 w-9 align-middle flex justify-center relative ">
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeCeJYSA98sY-xP2m3NBUKoY6_SPOUNsRFw&usqp=CAU"
            }
            alt={"logo"}
            layout="fill"
            className={"rounded-full h-20 w-20"}
          />
        </div>
        <span className="mt-2">LogoName</span>
      </div>
      <div className=" flex-1  flex align-middle justify-center">
        <input
          type={"text"}
          placeholder={"Search Anything...."}
          className={"w-4/5 placeholder:px-5 rounded-2xl h-4/5 mt-1"}
        />
      </div>
      <div className=" flex-1">
        <ul className=" flex align-middle justify-evenly ">
          <li className="py-2">Home</li>
          <li className="py-2">Login</li>
          <li className="py-2">Register</li>
          <li className=" rounded-md px-1 py-2 ">
            <div className="bg-cyan-500 h-6 w-50 px-4 rounded-md cursor-pointer">
              Contact Us
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navabar;
