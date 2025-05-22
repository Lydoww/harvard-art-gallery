import React, { useEffect, useRef, useState } from "react";
import { fetchHarvardArtworks } from "../services/harvardService";
import ArtList from "../components/home/ArtList";
import SkeletonItem from "../components/ui/SkeletonItem";

const Home = () => {
  const [arts, setArts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [page, setPage] = useState(1); // Nouvel état pour la pagination
  const initialized = useRef(false); // Pour éviter le double appel initial

  const totalImages = arts.length;
  const allImagesLoaded = imagesLoaded === totalImages && !loadingData;
  const isReady = !loadingData && imagesLoaded === totalImages;

  const size = 15;
  const maxPages = 3; // Limite de pages à charger

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const loadArtworks = async (isInitial = false) => {
    if (isInitial) setLoadingData(true);
    else setLoadingMore(true);

    try {
      const result = await fetchHarvardArtworks(size, page); // On passe la page
      const filtered = result.records.filter((art) => art.primaryimageurl);

      setArts((prev) => {
        // Évite les doublons avec un Set
        const existingIds = new Set(prev.map((art) => art.id));
        const newArts = filtered.filter((art) => !existingIds.has(art.id));
        return [...prev, ...newArts];
      });

      setImagesLoaded(0);
      if (!isInitial) setPage((prev) => prev + 1);
    } finally {
      if (isInitial) setLoadingData(false);
      else setLoadingMore(false);
    }
  };

  // Premier chargement
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      loadArtworks(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      if (nearBottom && !loadingMore && page <= maxPages) {
        loadArtworks(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore, page]);

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

      {loadingMore && (
        <div className="flex justify-center mt-4 text-purple-600">
          Loading more artworks...
        </div>
      )}
    </div>
  );
};

export default Home;
