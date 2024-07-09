import config from "@/config";
export const getArticles = async () => {
  try {
    const res = await fetch(`${config.domainNameProduction}/en/api/Articles`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
