// import { useTranslations } from "next-intl";

import ArticleCardInfo from "./ArticleCardInfo";
import { getArticles } from "./FetchArticlesData";

export default async function OurBlog() {
  //   const t = useTranslations("OurBlog");

  // console.log(await getArticles())
  const data = await getArticles();
  // console.log("Articles here", data)

  // Make sure we have articles needed for production build.
  if (!data?.articles) {
    return <p className="text-center font-bold py-4">No Articles...</p>;
  }

  const articles = data.articles;

  return (
    <section>
      <div className="max-w-[95rem] mx-auto text-center pb-14">
        <div className="text-start pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 px-10">
            {articles.map((article) => (
              <ArticleCardInfo key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
