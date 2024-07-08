import Article from "@/models/Article";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundArticle = await Article.findOne({ _id: id });
  
  if(!foundArticle){
    return NextResponse.json("Error Article Not Found", { status: 404 })
  }

  return NextResponse.json({ foundArticle }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const articleData = body.formData;

    const updateArticleData = await Article.findByIdAndUpdate(id, {
      ...articleData,
    });

    if(!updateArticleData){
      return NextResponse.json("Error Article Not Found", { status: 404 })
    }

    return NextResponse.json({ message: "Article updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    const articleDelete = await Article.findByIdAndDelete(id);

    if(!articleDelete){
      return NextResponse.json("Error Article Not Found", { status: 404 })
    }

    return NextResponse.json({ message: "Article Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
