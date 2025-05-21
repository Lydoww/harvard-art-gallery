import apiClient from "../api/apiClient";

export const fetchHarvardArtworks = async (page = 1, size = 30) => {
  try {
    const response = await apiClient.get("/object", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        page,
        size,
        hasimage: 1,
        sort: "random",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Harvard artworks:", error);
    throw error;
  }
};

export const fetchArtItemById = async (id) => {
  try {
    const response = await apiClient.get(`/object/${id}`, {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the data from this artwork");
    throw error;
  }
};
