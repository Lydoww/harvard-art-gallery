import apiClient from "../api/apiClient";

export const fetchHarvardArtworks = async (size = 15, page = 1) => {
  try {
    const response = await apiClient.get("/object", {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        size,
        page,
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

export const fetchGalleries = async () => {
  try {
    const response = await apiClient.get(`/gallery`, {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the galleries data:", error);
  }
};
