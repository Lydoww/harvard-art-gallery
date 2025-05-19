import apiClient from "../api/apiClient";

const getRandomKeyword = () => {
  const keywords = [
    "painting",
    "photography",
    "sculpture",
    "architecture",
    "design",
    "Renaissance",
    "Impressionism",
    "Baroque",
    "Surrealism",
    "Ancient",
    "fine arts",
    "masterpieces",
    "art gallery",
  ];

  return keywords[Math.floor(Math.random() * keywords.length)];
};

export const fetchEuropeanaData = async (
  query = getRandomKeyword(),
  language = "en",
  rows = 50
) => {
  try {
    const response = await apiClient.get("", {
      params: {
        wskey: import.meta.env.VITE_API_KEY,
        query,
        qf: "TYPE:IMAGE OR TYPE:VIDEO", // Pour plus de variété
        thumbnail: true,
        media: true,
        profile: "rich",
        rows,
        language,
        sort: "timestamp_created+desc", // Tri par date de création
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Europeana data:", error);
    throw error;
  }
};
