// import { useTranslations } from "next-intl";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
  ],
  weight: ["300", "400", "500", "700"],
});

import ArticleCardInfo from "./ArticleCardInfo";
import { getArticles } from "./FetchArticlesData";

export default async function OurBlog() {
  //   const t = useTranslations("OurBlog");

  const data = await getArticles();

  // Make sure we have articles needed for production build.
  if (!data?.articles) {
    return <p className="text-center font-bold py-4">No Articles...</p>;
  }

  const articles = data.articles;

  return (
    <section>
      <div className="max-w-7xl mx-auto text-center pb-14">
        <div className="text-start pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 px-10">
            {articles.map((article) => (
              <ArticleCardInfo key={article._id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
