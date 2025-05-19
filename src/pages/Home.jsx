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
      <ul className="grid grid-rows-3 grid-cols-3 gap-6 w-auto ">
        {arts.map((art, index) => (
          <li
            key={index}
            className="border rounded-2xl shadow-md bg-white transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
          >
            <img
              src={art.edmPreview[0]}
              alt={`Image of ${art.title[0]}`}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-bold text-gray-900 flex justify-center">
                {art.title[0]}
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold text-blue-700">Exposed at:</span>{" "}
                {art.dataProvider}
              </p>
              <p className="text-gray-600 text-sm">From: {art.country}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
