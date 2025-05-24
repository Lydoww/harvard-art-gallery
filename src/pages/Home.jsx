import React, { useEffect, useState } from "react";
import { fetchHarvardArtworks } from "../services/harvardArtwork";
import ArtList from "../components/home/ArtList";
import SkeletonItem from "../components/ui/SkeletonItem";

const Home = () => {
  const [arts, setArts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const size = 15;

  const totalImages = arts.length;
  const allImagesLoaded = imagesLoaded === totalImages && !loadingData;
  const isReady = !loadingData && imagesLoaded === totalImages;

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const loadArtworks = async () => {
    setLoadingData(true);

    try {
      const result = await fetchHarvardArtworks(size, 1); // page 1 uniquement
      const filtered = result.records.filter((art) => art.primaryimageurl);
      setArts(filtered);
    } finally {
      setLoadingData(false);
      setImagesLoaded(0); // Réinitialise pour le suivi du chargement
    }
  };

  useEffect(() => {
    loadArtworks();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center mb-4 text-2xl font-semibold">
        {allImagesLoaded
          ? "Welcome to Harvard Art Gallery, surf around to find your favorite artwork"
          : "Loading artworks..."}
      </h1>

      {!isReady && (
        <ul className="grid grid-rows-3 grid-cols-3 gap-6 w-auto">
          {[...Array(9)].map((_, i) => (
            <SkeletonItem key={i} />
          ))}
        </ul>
      )}

      <div className={allImagesLoaded ? "block" : "hidden"}>
        <ArtList arts={arts} onImageLoad={handleImageLoad} isReady={isReady} />
      </div>
    </div>
  );
};

export default Home;
