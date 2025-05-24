import React, { useEffect, useState } from "react";
import { fetchGalleries } from "../services/harvardGallery";
import GalleryList from "../components/gallery/GalleryList";

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
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        Current gallery exposition at the Harvard museum
      </h1>
      <GalleryList galleryArt={galleryArt} />
    </div>
  );
};

export default Gallery;
