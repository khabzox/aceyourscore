import Payments from "@/models/payments";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payments = await Payments.find();
    return NextResponse.json({ payments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
