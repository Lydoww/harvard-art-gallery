import React from "react";

const ArtCard = ({ art }) => {
  return (
    <div className="relative group w-full rounded-2xl overflow-hidden cursor-pointer">
      {/* Image toujours visible */}
      <img
        src={art.edmPreview[0]}
        alt={`Image of ${art.title[0]}`}
        className="w-full h-52 object-cover rounded-2xl transition-filter duration-300 delay-100 group-hover:blur-sm"
      />

      {/* Overlay texte caché par défaut */}
      <div
        className="
          absolute inset-0
          p-4
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-80
          text-white
          rounded-b-2xl
          flex flex-col
          h-full
          bg-gray-700
        "
      >
        <h2 className="text-xl font-bold text-center">{art.title[0]}</h2>
        <div className="flex-grow flex flex-col justify-center relative">
          <p>
            <span className="font-semibold text-blue-500 ">Information provided by: </span>
            {art.dataProvider}
          </p>

          <p className="text-sm font-semibold absolute bottom-0 left-0">
            From: {art.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
