import config from "@/config";

export async function getUsersPaymentsData(id) {
  try {
    const res = await fetch(
      `${config.domainNameProduction}/en/api/payments/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch payments data");
    }

    const data = await res.json(); // Await the response
    return data;
  } catch (error) {
    console.error("Error fetching payment data:", error); // Improved error logging
    return null; // Return null in case of error
  }
}
