import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const { reorderedTeachers } = await req.json();

    await Promise.all(
      reorderedTeachers.map((teacher, index) => {
        const teacherRef = doc(db, "our-teachers", teacher.id);
        return setDoc(teacherRef, { order: index }, { merge: true });
      })
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Failed to save the order:", error);
    return new Response(JSON.stringify({ error: "Failed to save the order" }), {
      status: 500,
    });
  }
}
