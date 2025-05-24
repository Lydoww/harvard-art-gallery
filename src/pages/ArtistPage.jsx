import React, { useEffect, useState } from "react";
import { fetchObjectIDs, fetchObjectDetail } from "../services/theMetAPI";

const ArtistPage = () => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadObjects = async () => {
    setLoading(true);
    try {
      const ids = await fetchObjectIDs();

      // Supprimer les doublons d'IDs, et prends un peu plus que 10 pour filtrer ensuite
      const uniqueIDs = [...new Set(ids)].slice(0, 50);

      const promises = uniqueIDs.map((id) => fetchObjectDetail(id));
      const details = await Promise.all(promises);

      const validObjects = details.filter(
        (obj) => obj !== null && obj.title && obj.primaryImageSmall
      );

      // Supprimer les doublons par titre uniquement
      const seenTitles = new Set();
      const filteredByTitle = [];

      for (const obj of validObjects) {
        if (!seenTitles.has(obj.title)) {
          seenTitles.add(obj.title);
          filteredByTitle.push(obj);
        }
        if (filteredByTitle.length === 10) break;
      }

      setObjects(filteredByTitle);
    } catch (error) {
      console.error("Error rendering artist data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadObjects();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {objects.map((obj) => (
          <li key={obj.objectID}>
            <h2>{obj.title}</h2>
            <p>{obj.artistDisplayName}</p>
            {obj.primaryImageSmall && (
              <img src={obj.primaryImageSmall} alt={obj.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistPage;
