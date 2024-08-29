import { db } from "@/config/firebase";
import {
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Fetch document from Firestore
    const testimonialDocRef = doc(db, "our-testimonials", id);
    const testimonialSnapshot = await getDoc(testimonialDocRef);

    // Check if document exists
    if (!testimonialSnapshot.exists()) {
      return NextResponse.json(
        { message: "Error: Testimonial Not Found" },
        { status: 404 }
      );
    }

    // Document found, return the document data
    const foundTestimonial = testimonialSnapshot.data();

    return NextResponse.json({ foundTestimonial }, { status: 200 });
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

    const testimonialRef = doc(db, "our-testimonials", id);

    const updateTestimonialData = {
      fullName: body.fullName,
      description: body.description,
      updatedAt: timestamp,
    };

    await updateDoc(testimonialRef, updateTestimonialData);

    return NextResponse.json(
      { message: "Testimonial updated", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating Testimonial:", error);
    return NextResponse.json(
      { message: "Failed to update Testimonial", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const testimonialRef = doc(db, "our-testimonials", id);
    await deleteDoc(testimonialRef);

    return NextResponse.json(
      { message: "Testimonial deleted", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting Testimonial:", error);
    return NextResponse.json(
      { message: "Failed to delete Testimonial", error },
      { status: 500 }
    );
  }
}
