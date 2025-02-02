import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { NextResponse } from "next/server";

const articlesCollectionRef = collection(db, "articles");

export async function GET(req) {
  try {
    // Retrieve articles from Firebase
    const querySnapshot = await getDocs(articlesCollectionRef);
    const articles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Get the search query (if any)
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const words = query.toLowerCase().split(/\s+/);

    // Filter the articles using the search words (assuming articles have a 'title' field)
    const results = articles.filter((article) =>
      words.some((word) => article.title?.toLowerCase().includes(word))
    );

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { message: "Failed to fetch articles", error },
      { status: 500 }
    );
  }
}
