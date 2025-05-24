import React from "react";
import GalleryCard from "./GalleryCard";

const GalleryList = ({galleryArt}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryArt.map((gallery) => (
        <li
          key={gallery.galleryid}
          className="text-center"
        >
         <GalleryCard gallery={gallery} />
        </li>
      ))}
    </ul>
  );
};

export default GalleryList;
