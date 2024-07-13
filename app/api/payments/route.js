import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const payments = await db.collection("payments").find({}).toArray();

    // Add cache control headers to prevent caching
    req.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    req.setHeader("Pragma", "no-cache");
    req.setHeader("Expires", "0");

    return NextResponse.json({ payments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// import clientPromise from "@/utils/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db(process.env.MONGODB_DB);

//     const payments = await db.collection("payments").find({}).toArray();

//     return NextResponse.json({ payments }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error", error }, { status: 500 });
//   }
// }
