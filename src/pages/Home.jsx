import React, { useEffect, useState } from "react";
import { fetchHarvardArtworks } from "../services/harvardService";
import ArtList from "../components/home/ArtList";
import SkeletonItem from "../components/ui/SkeletonItem";

const Home = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const result = await fetchHarvardArtworks();
        setArts(result.records.filter((art) => art.primaryimageurl));
        setLoading(false);
      } catch (error) {
        console.error(error);
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <h1 className="flex justify-center mb-4 text-2xl font-semibold">
            Loading artworks...
          </h1>
          <ul className="grid grid-rows-3 grid-cols-3 gap-6 w-auto">
            {[...Array(9)].map((_, i) => (
              <SkeletonItem key={i} />
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1 className="flex justify-center mb-4 text-2xl font-semibold">
            Welcome to Europenea Art Gallery, surf around to find your favorite
            artwork
          </h1>
          <ArtList arts={arts} />
        </>
      )}
    </div>
  );
};

export default Home;
