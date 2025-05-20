import React, { useEffect, useState } from "react";
import { fetchEuropeanaData } from "../services/europeanaService";
import ArtList from "../components/home/ArtList";

const Home = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchEuropeanaData();
        setArts(result.items);
        console.log(result);
      } catch (error) {
        console.error(error);
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center mb-4">Main art</h1>
      <ArtList arts={arts} />
    </div>
  );
};

export default Home;
