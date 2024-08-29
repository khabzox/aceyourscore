import TestimonialForm from "@/components/admin/testimonials/TestimonialForm";
import config from "@/config";
async function getTestimonialById(id) {
  try {
    const res = await fetch(
      `${config.domainName}/api/our-testimonials/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to get Testimonial.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TestimonialPage({ params }) {
  const testimonialId = params.id
  const EDITMODE = testimonialId == "new" ? false : true;
  let updatetesTimonialData = {};

  if (EDITMODE) {
    updatetesTimonialData = await getTestimonialById(testimonialId);
    updatetesTimonialData = updatetesTimonialData.foundTestimonial;
  } else {
    updatetesTimonialData = {
      id: "new",
    };
  }
  return <TestimonialForm testimonial={updatetesTimonialData} testimonialId={testimonialId} />;
}
