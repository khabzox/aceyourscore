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
const testimonialsCollectionRef = collection(db, "our-testimonials");

export async function GET(req) {
  try {
    const querySnapshot = await getDocs(testimonialsCollectionRef);
    const testimonials = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { message: "Failed to fetch testimonials", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const timestamp = new Date().toISOString();

    const testimonialData = {
      fullName: body.fullName,
      description: body.description,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    // Check if required fields are present
    if (!testimonialData.fullName || !testimonialData.description) {
      return NextResponse.json(
        { message: "Error", error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add document to Firestore
    const newTestimonialRef = await addDoc(testimonialsCollectionRef, testimonialData);

    return NextResponse.json(
      { message: "Testimonial Created", id: newTestimonialRef.id },
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
