import Payments from "@/models/Payments";
import { NextResponse } from "next/server";
import clientPromise from "@/utils/mongodb";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const client = await clientPromise; // Ensure MongoDB connection is established
    const db = client.db();

    const foundPayments = await db.collection('payments').findOne({ "clerkUser.userID": id });

    if (!foundPayments) {
      return NextResponse.json(
        { message: "Error: Payments Information Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ foundPayments }, { status: 200 });
  } catch (error) {
    console.error("Error fetching payment data:", error); // Improved error logging
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}


// import Payments from "@/models/Payments";
// import { NextResponse } from "next/server";

// export async function GET(req, { params }) {
//   const { id } = params;

//   // Ensure you have a valid MongoDB connection established

//   try {
//     const foundPayments = await Payments.findOne({ "clerkUser.userID": id });

//     if (!foundPayments) {
//       return NextResponse.json(
//         { message: "Error: Payments Information Not Found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ foundPayments }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Server Error", error: error.message },
//       { status: 500 }
//     );
//   }
// }
