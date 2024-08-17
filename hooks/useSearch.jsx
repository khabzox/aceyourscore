// useSearch.js

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `/api/search?q=${encodeURIComponent(query)}`
          );
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error("Failed to fetch search results:", error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return [results, loading, query];
};

export default useSearch;
