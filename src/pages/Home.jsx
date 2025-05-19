import React, { useEffect, useState } from "react";
import { fetchEuropeanaData } from "../services/europeanaService";

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
      <ul className="grid grid-rows-3 grid-cols-3 gap-10 w-auto">
        {arts.map((art, index) => (
          <li key={index} className="border p-2 shadow-md">
            <h2 className="w-auto h-16">{art.title}</h2>
            <img
              src={art.edmPreview[0]}
              alt="picture of the art piece"
              className="h-48 w-full object-cover "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
