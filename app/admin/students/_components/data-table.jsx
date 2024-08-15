import config from "@/config";
import { fetchDataUsersList } from "./fetchDataUsersList";

export async function getFormattedData() {
  const fetchedData = await fetchDataUsersList();

  if (!fetchedData || fetchedData.length === 0) {
    console.error("No data found or fetchDataUsersList not working");
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

  console.log("Formatted data:", formattedData); // Debugging
  return formattedData;
}
