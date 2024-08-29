import config from "@/config";

export const getTestimonials = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/our-testimonials`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Testimonials");
    }

    const TestimonialsData = res.json()

    return TestimonialsData;
  } catch (error) {
    console.log("Error loading Testimonials: ", error);
  }
};
