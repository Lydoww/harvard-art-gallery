import React, { useEffect, useState } from "react";
import { fetchGalleries } from "../services/harvardService";

const Gallery = () => {
  const [galleryArt, setGalleryArt] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadGalleryWork = async () => {
    setLoading(true);
    try {
      const result = await fetchGalleries();
      setGalleryArt(result.records);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("Error rendering gallery data:", error);
    }
  };

  useEffect(() => {
    loadGalleryWork();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center mb-4 text-2xl font-semibold">Brower through various gallery, click to learn more about it.</h1>
      <ul className="grid grid-rows-3 grid-cols-3 gap-6 w-auto">
        {galleryArt.map((gallery) => (
          <li key={gallery.galleryid}>
            <h2>{gallery.name}</h2>
            <p>Donor: {gallery.donorname || "unknown"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
