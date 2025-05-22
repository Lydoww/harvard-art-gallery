import React, { useEffect, useState } from "react";
import { fetchHarvardArtworks } from "../services/harvardService";
import ArtList from "../components/home/ArtList";
import SkeletonItem from "../components/ui/SkeletonItem";

const Home = () => {
  const [arts, setArts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const totalImages = arts.length;
  const allImagesLoaded = imagesLoaded === totalImages && !loadingData;

  const isReady = !loadingData && imagesLoaded === arts.length;

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchHarvardArtworks();
        const filtered = result.records.filter((art) => art.primaryimageurl);
        setArts(filtered);
        setLoadingData(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoadingData(false);
      }
    }

    fetchData();
  }, []);



  return (
    <div>
      {/* Always render the ArtList so <img onLoad> can fire */}
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

      {/* Render ArtList always, hide visually if not ready */}
      <div className={allImagesLoaded ? "block" : "hidden"}>
        <ArtList arts={arts} onImageLoad={handleImageLoad} isReady={isReady} />
      </div>
    </div>
  );
};

export default Home;
