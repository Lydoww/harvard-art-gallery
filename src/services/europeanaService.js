import apiClient from "../api/apiClient";

export const fetchHarvardArtworks = async (page = 1, size = 30) => {
  try {
    const response = await apiClient.get("object", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        page,
        size,
        hasimage: 1, // Pour s'assurer qu'on a bien une image à afficher
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Harvard artworks:", error);
    throw error;
  }
};
