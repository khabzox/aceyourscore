import Payments from "@/models/payments";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { sessionClaims } = auth();

    if (sessionClaims === null) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else if (sessionClaims?.metadata?.role !== "admin") {
      return NextResponse.json({ message: "You don't have permission to access this resource" }, { status: 403 });
    }

    const payments = await Payments.find();
    return NextResponse.json({ payments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}