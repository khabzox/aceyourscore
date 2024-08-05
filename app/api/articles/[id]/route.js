import { db, storage } from "@/config/firebase";
import {
  getDocs,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";
import { articlesCollectionRef } from "@/config/firebase";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Fetch document from Firestore
    const articleDocRef = doc(db, "articles", id);
    const articleSnapshot = await getDoc(articleDocRef);

    // Check if document exists
    if (!articleSnapshot.exists()) {
      return NextResponse.json(
        { message: "Error: Article Not Found" },
        { status: 404 }
      );
    }

    // Document found, return the document data
    const foundArticle = articleSnapshot.data();

    return NextResponse.json({ foundArticle }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const timestamp = new Date().toISOString();

    const articleRef = doc(db, "articles", id);

    const updateArticleData = {
      title: body.title,
      articleImg: body.articleImg,
      authorProfileImg: body.authorProfileImg,
      authorFullName: body.authorFullName,
      articleDescription: body.articleDescription,
      articleContent: body.articleContent,
      updatedAt: timestamp,
    };

    await updateDoc(articleRef, updateArticleData);

    return NextResponse.json(
      { message: "Article updated", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating article:", error);
    return NextResponse.json(
      { message: "Failed to update article", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const articleRef = doc(db, "articles", id);
    await deleteDoc(articleRef);

    return NextResponse.json(
      { message: "Article deleted", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      { message: "Failed to delete article", error },
      { status: 500 }
    );
  }
}
