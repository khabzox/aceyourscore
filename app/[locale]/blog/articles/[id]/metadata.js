import config from "@/config";
import { getArticlesById } from "./getArticlesById";

export async function generateMetadataArticles({ params }, parent) {
  // Read route params
  const { id } = params;

  // Fetch article data
  const article = await getArticlesById(id);

  // Optionally extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const articleInfo = article.foundArticle;

  return {
    title: articleInfo.title,
    description: articleInfo.description, // Ensure to have a fallback
    openGraph: {
      title: articleInfo.title,
      description: articleInfo.description,
      images: [articleInfo.postImg || "/logo.png", ...previousImages],
      url: `${config.domainNameProduction}/articles/${id}`,
    },
  };
}
