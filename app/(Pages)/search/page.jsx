"use client";

import useSearch from "@/hooks/useSearch";
import Loading from "@/app/loading";

const SearchPage = () => {
  const [results, loading, query] = useSearch();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <a href={`/item/${result.id}`}>{result.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
