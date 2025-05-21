import React, { useEffect, useState } from "react";
import { fetchHarvardArtworks } from "../services/harvardService";
import ArtList from "../components/home/ArtList";

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
        console.log(result);
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
        <p>Loading data ...</p>
      ) : (
        <>
          <h1 className="flex justify-center mb-4 text-2xl font-semibold">
            Welcome to Europenea Art Gallery, surf around to find your favorite
            pieces
          </h1>
          <ArtList arts={arts} />
        </>
      )}
    </div>
  );
};

export default Home;
