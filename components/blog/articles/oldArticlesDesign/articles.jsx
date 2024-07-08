import ArticleCard from "./ArticleCard";
import { getArticles } from "./FetchData";

export default async function Articles() {
  const data = await getArticles();

  // Make sure we have articles needed for production build.
  if (!data?.articles) {
    return <p className="text-center font-bold py-4">No Articles...</p>;
  }

  const articles = data.articles;
  // console.log(articles)
  return (
    <>
      <section className="py-12 px-4">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
