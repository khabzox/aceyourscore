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
const teachersCollectionRef = collection(db, "our-teachers");

export async function GET(req) {
  try {
    const querySnapshot = await getDocs(teachersCollectionRef);
    const teachers = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ teachers }, { status: 200 });
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return NextResponse.json(
      { message: "Failed to fetch teachers", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const timestamp = new Date().toISOString();

    const teacherData = {
      fullName: body.fullName,
      subTitle: body.subTitle,
      image: body.image,
      description: body.description,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    // Check if required fields are present
    if (!teacherData.fullName || !teacherData.subTitle || !teacherData.image || !teacherData.description) {
      return NextResponse.json(
        { message: "Error", error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add document to Firestore
    const newTeacherRef = await addDoc(teachersCollectionRef, teacherData);

    return NextResponse.json(
      { message: "Teacher Created", id: newTeacherRef.id },
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
