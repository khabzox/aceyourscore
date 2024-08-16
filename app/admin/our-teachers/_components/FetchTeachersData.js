import config from "@/config";

export const getTeachers = async () => {
  try {
    const res = await fetch(`${config.domainName}/api/our-teachers`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Teachers");
    }

    const TeachersData = res.json()

    return TeachersData;
  } catch (error) {
    console.log("Error loading Teachers: ", error);
  }
};
