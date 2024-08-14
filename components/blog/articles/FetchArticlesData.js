import config from "@/config";

export const getArticles = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/articles`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const articlesData = res.json()

    return articlesData;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
