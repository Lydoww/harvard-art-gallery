import apiClient from "../api/apiClient";

export const fetchGalleries = async () => {
  try {
    const response = await apiClient.get(`/gallery`, {
      params: {
        apikey: import.meta.env.VITE_API_KEY,
        size: 100,
        sortorder: "asc",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching the galleries data:", error);
  }
};
