import ArticleForm from "@/components/blog/admin/ArticleForm";
import config from "@/config";
async function getArticleById(id) {
  try {
    const res = await fetch(`${config.domainNameProduction}/en/api/Articles/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get ticket.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function ArticlePage({ params }) {
  const EDITMODE = params.id === "new" ? false : true;
  let updateArticleData = {};

  if (EDITMODE) {
    updateArticleData = await getArticleById(params.id);
    updateArticleData = updateArticleData.foundArticle;
    // console.log(updateArticleData);
  } else {
    updateArticleData = {
      _id: "new",
    };
  }
  console.log(EDITMODE, updateArticleData)
  return <ArticleForm article={updateArticleData} />;
}
