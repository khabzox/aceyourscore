import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";
import { auth } from "@clerk/nextjs/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const { sessionClaims } = auth();

    if (sessionClaims === null) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else if (sessionClaims?.metadata?.role !== "admin") {
      return NextResponse.json({ message: "You don't have permission to access this resource" }, { status: 403 });
    }

    const client = await clientPromise; // Ensure MongoDB connection is established
    const db = client.db();

    const foundPayments = await db
      .collection("payments")
      .findOne({ "registeredUser.id": id });

    // if anything wrong just return 404 status
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

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const { sessionClaims } = auth();

    if (sessionClaims === null) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else if (sessionClaims?.metadata?.role !== "admin") {
      return NextResponse.json({ message: "You don't have permission to access this resource" }, { status: 403 });
    }

    const client = await clientPromise; // Ensure MongoDB connection is established
    const db = client.db();

    // Find and delete the payment record
    const result = await db
      .collection("payments")
      .deleteOne({ "registeredUser.id": id });

    // Check if any document was deleted
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Error: User Payment Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User Payment Deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
