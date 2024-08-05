import ArticleForm from "@/components/admin/ArticleForm";
import config from "@/config";
async function getArticleById(id) {
  try {
    const res = await fetch(
      `${config.domainName}/api/articles/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to get article.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function ArticlePage({ params }) {
  const EDITMODE = params.id == "new" ? false : true;
const articleId = params.id
  let updateArticleData = {};

  if (EDITMODE) {
    updateArticleData = await getArticleById(params.id);
    updateArticleData = updateArticleData.foundArticle;
    // console.log(updateArticleData);
  } else {
    updateArticleData = {
      id: "new",
    };
  }
  console.log(EDITMODE, updateArticleData);
  return <ArticleForm article={updateArticleData} articleId={articleId} />;
}
