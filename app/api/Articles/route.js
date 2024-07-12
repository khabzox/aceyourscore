import Article from "@/models/Article";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const articles = await Article.find();
    return NextResponse.json({ articles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const articleData = body.formData;

    await Article.create(articleData);

    return NextResponse.json({ message: "Article Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


// import Article from "@/models/Article";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const articles = await Article.find();

//     return NextResponse.json({ articles }, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const articleData = body.formData;

//     await Article.create(articleData);

//     return NextResponse.json({ message: "Article Created" }, { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }
