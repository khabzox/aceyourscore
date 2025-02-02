import config from "@/config";
import { auth } from "@clerk/nextjs/server";

// Fetch Articles and return the array directly.
export const getArticles = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/articles`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await res.json();
    // Assuming your API returns { articles: [...] }
    return data.articles || [];
  } catch (error) {
    console.error("Error loading articles: ", error);
    return [];
  }
};

// Fetch Teachers and return the array directly.
export const getTeachers = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/our-teachers`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Teachers");
    }

    const data = await res.json();
    // Assuming your API returns { teachers: [...] }
    return data.teachers || [];
  } catch (error) {
    console.error("Error loading Teachers: ", error);
    return [];
  }
};

// Fetch Testimonials and return the array directly.
export const getTestimonials = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/our-testimonials`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Testimonials");
    }

    const data = await res.json();
    // Assuming your API returns { testimonials: [...] }
    return data.testimonials || [];
  } catch (error) {
    console.error("Error loading Testimonials: ", error);
    return [];
  }
};

// Fetch Students (or payments) from MongoDB (unchanged)
export const fetchDataUsersList = async () => {
  try {
    const { getToken } = auth();
    const token = await getToken();

    if (!token) {
      throw new Error("Failed to obtain authentication token");
    }

    const res = await fetch(`${config.domainName}/api/lemonsqueezy/payments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch payments data: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    console.log("Data fetched from API:", data);

    if (!data.payments || !Array.isArray(data.payments)) {
      throw new Error("Invalid data structure received from API");
    }

    return data.payments;
  } catch (error) {
    console.error("Error loading data: ", error);
    throw error;
  }
};
