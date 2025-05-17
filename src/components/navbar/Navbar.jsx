import React from "react";

const navbar = () => {
  return (
    <div className="flex flex-1 text-center items-center h-16">
      <ul className="flex justify-around w-full">
        <li className="w-28 px-4 py-2 rounded-3xl bg-sky-500 hover:bg-sky-700 hover:cursor-pointer text-white">
          <a href="#">Home</a>
        </li>

        <li className="w-28 px-4 py-2 rounded-3xl bg-sky-500 hover:bg-sky-700 text-white hover:cursor-pointer">
          <a href="#">Contact</a>
        </li>
        <li className="w-28 px-4 py-2 rounded-3xl bg-sky-500 hover:bg-sky-700 text-white hover:cursor-pointer">
          <a href="#">Properties</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
