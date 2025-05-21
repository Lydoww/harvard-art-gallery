import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtItemById } from "../services/harvardService";
import ArtDetail from "../components/home/ArtDetail";

const ArtDetailPage = () => {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const result = await fetchArtItemById(id);
        setArt(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data for the workart:", error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <ArtDetail
            art={art}
            showModal={showModal}
            toggleModal={toggleModal}
          />
        </>
      )}
    </div>
  );
};

export default ArtDetailPage;
