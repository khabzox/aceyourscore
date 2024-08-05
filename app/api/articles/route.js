import { db, storage } from "@/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";

const articlesCollectionRef = collection(db, "articles");

export async function GET(req) {
  try {
    const querySnapshot = await getDocs(articlesCollectionRef);
    const articles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ articles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { message: "Failed to fetch articles", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const timestamp = new Date().toISOString();

    const articleData = {
      title: body.title,
      articleImg: body.articleImg,
      authorProfileImg: body.authorProfileImg,
      authorFullName: body.authorFullName,
      articleDescription: body.articleDescription,
      articleContent: body.articleContent,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    // Add document to Firestore
    const newArticleRef = await addDoc(articlesCollectionRef, articleData);

    return NextResponse.json(
      { message: "Article Created", id: newArticleRef.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: "Error", error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
