import config from "@/config";

export const getArticlesById = async (id) => {
  try {
    const res = await fetch(
      `${config.domainNameProduction}/en/api/articles/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};
