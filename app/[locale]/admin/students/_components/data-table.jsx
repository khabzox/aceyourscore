import config from "@/config";

export async function fetchDataUsersList() {
  try {
    const res = await fetch(`${config.domainNameProduction}/en/api/payments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch payments data");
    }

    const data = await res.json();
    return data.payments; // Access the 'payments' array
  } catch (error) {
    console.error("Error loading data: ", error);
    return []; // Return an empty array in case of error
  }
}

export async function getFormattedData() {
  const fetchedData = await fetchDataUsersList();

  if (!fetchedData) {
    console.error("Fetch data Users not working");
    return [];
  }

  const formattedData = fetchedData.map((item) => ({
    id: item.clerkUser.userID,
    examName: item.examName,
    userFullName: item.clerkUser.userFullName,
    customerID: item.lemonsqueezyUser.customerInfo.customerID,
    status: item.lemonsqueezyUser.paymentsInfo.status,
    email: item.lemonsqueezyUser.customerEmail,
    total_formatted: item.lemonsqueezyUser.paymentsInfo.total_formatted,
  }));

  return formattedData;
}
