import apiClientMetAPI from "../api/apiClientMetAPI";

export const fetchObjectIDs = async () => {
  try {
    const response = await apiClientMetAPI.get("/objects");
    return response.data.objectIDs;
  } catch (error) {
    console.error("Error fetching Objects from Met API:", error);
    return [];
  }
};

export const fetchObjectDetail = async (id) => {
  try {
    const response = await apiClientMetAPI.get(`/objects/${id}`, {
      params: {
        isHighlight: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for object ${id}:`, error);
    return null;
  }
};
