import apiClient from "../api/apiClient";

const getRandomKeyWord = () => {
  const keywords = [
    "art",
    "nature",
    "history",
    "science",
    "technology",
    "culture",
    "architecture",
    "photography",
    "music",
    "literature",
  ];
  return keywords[Math.floor(Math.random() * keywords.length)];
};

export const fetchEuropeanaData = async (
  query = "art",
  language = "en",
  rows = 50
) => {
  try {
    const response = await apiClient.get("", {
      params: {
        wskey: import.meta.env.VITE_API_KEY,
        query,
        qf: `TYPE:IMAGE`,
        thumbnail: true,
        media: true,
        profile: "rich",
        rows,
        language,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Europeana data:", error);
    throw error;
  }
};
