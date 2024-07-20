import config from "@/config";

export async function FetchDataUsersList() {
  try {
    const res = await fetch(`${config.domainNameProduction}/en/api/payments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch payments data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching payment data:", error);
    return null;
  }
}
