"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './loading';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                setLoading(true);
                // Fetch search results based on the query
                const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                const data = await response.json();
                setResults(data.results);
                setLoading(false);
            };
            fetchData();
        } else {
            // Handle case where query is empty
            setResults([]);
            setLoading(false);
        }
    }, [query]);

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
