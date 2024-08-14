import config from "@/config";

export async function fetchDataUsersList() {
  try {
    const res = await fetch(`${config.domainName}/api/payments`, {
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
    id: item.registeredUser.id,
    examName: item.paymentUser.customer.examName,
    userFullName: item.registeredUser.fullName,
    customerID: item.paymentUser.customer.id,
    status: item.paymentUser.payment.status,
    email: item.paymentUser.customer.email,
    refunded: item.paymentUser.payment.refunded,
    orderNumber: item.paymentUser.payment.orderNumber,
    totalFormatted: item.paymentUser.payment.totalFormatted
  }));

  return formattedData;
}
