import React from "react";
import ArtCard from "./ArtCard";

const ArtList = ({ arts, onImageLoad, isReady }) => {
  return (
    <ul className="grid grid-rows-3 grid-cols-3 gap-6 w-auto ">
      {arts.map((art, index) => (
        <li
          key={index}
          className=" rounded-2xl shadow-md bg-white transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
        >
          <ArtCard art={art} onImageLoad={onImageLoad} isReady={isReady} />
        </li>
      ))}
    </ul>
  );
};

export default ArtList;
