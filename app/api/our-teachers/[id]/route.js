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
    const teacherDocRef = doc(db, "our-teachers", id);
    const teacherSnapshot = await getDoc(teacherDocRef);

    // Check if document exists
    if (!teacherSnapshot.exists()) {
      return NextResponse.json(
        { message: "Error: Teacher Not Found" },
        { status: 404 }
      );
    }

    // Document found, return the document data
    const foundTeacher = teacherSnapshot.data();

    return NextResponse.json({ foundTeacher }, { status: 200 });
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

    const teacherRef = doc(db, "our-teachers", id);

    const updateTeacherData = {
      fullName: body.fullName,
      subTitle: body.subTitle,
      image: body.image,
      description: body.description,
      updatedAt: timestamp,
    };

    await updateDoc(teacherRef, updateTeacherData);

    return NextResponse.json(
      { message: "Teacher updated", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating Teacher:", error);
    return NextResponse.json(
      { message: "Failed to update Teacher", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const teacherRef = doc(db, "our-teachers", id);
    await deleteDoc(teacherRef);

    return NextResponse.json(
      { message: "Teacher deleted", id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting Teacher:", error);
    return NextResponse.json(
      { message: "Failed to delete Teacher", error },
      { status: 500 }
    );
  }
}
