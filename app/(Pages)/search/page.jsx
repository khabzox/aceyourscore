"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import useSearch from "@/hooks/useSearch"
import Loading from "@/app/loading"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon, XIcon } from "lucide-react"
import NavBar from "@/components/LandingPage/NavBar"
import FooterPage from "@/components/LandingPage/Footer"

const SearchPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [results, loading, query] = useSearch()

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "")
  }, [searchParams])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleClear = () => {
    setSearchQuery("")
    router.push("/search")
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 my-10">
        <h1 className="text-4xl font-bold mb-8 text-primary">Search</h1>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button type="submit" className="bg-accent hover:bg-accent-CardHover text-white mr-2">
              <SearchIcon className="mr-2" size={20} />
              Search
            </Button>
            <Button
              type="button"
              onClick={handleClear}
              className="bg-destructive hover:bg-destructive/90 text-white"
              disabled={!searchQuery && !query}
            >
              <XIcon className="mr-2" size={20} />
              Clear
            </Button>
          </div>
        </form>

        {query && <h2 className="text-2xl font-semibold mb-4 text-accent">Search Results for "{query}"</h2>}

        {results.length === 0 ? (
          <Card className="bg-accent-Card p-6">
            <CardContent>
              <p className="text-center pt-3 text-lg text-white">
                {query ? "No results found." : "Enter a search query to see results."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result) => (
              <Card key={result.id} className="hover:border-accent hover:border duration-200">
                <CardContent className="p-4">
                  <a
                    href={`/item/${result.id}`}
                    className="text-lg font-medium text-accent hover:text-accent-TextHover transition-colors duration-200"
                  >
                    {result.title}
                  </a>
                  {/* Add more details here if available, like description or image */}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <FooterPage />
    </>
  )
}

export default SearchPage

