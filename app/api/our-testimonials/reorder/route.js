import { db } from "@/config/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const { reorderedTestimonials } = await req.json();

    await Promise.all(
      reorderedTestimonials.map((testimonial, index) => {
        const testimonialRef = doc(db, "our-testimonials", testimonial.id);
        return setDoc(testimonialRef, { order: index }, { merge: true });
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
