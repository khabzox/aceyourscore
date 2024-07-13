import { getUsersPaymentsData } from "./UsersInfo/FetchUsersPaymentsData";

import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";

// What We Need to create link that redirect to whatsapp with some info to verfication

// Status: paid //db

// Exam: IELTS //db

// FullName: OUADOUKOU ABDELKABIR //clerk

// Email: abdelkabir.ouadoukou@gmail.com /db

export async function GetLessons({ children }) {
  // Get Data from getUsersPayments
  const data = await getUsersPaymentsData();

  // Ensure currentUser is fetched correctly
  const user = await currentUser();

  if (!user) {
    return "USER NOT FOUND";
  }

  // Extract only the necessary, serializable information
  const serializedUser = {
    id: user.id,
    fullName: user.fullName,
    // primaryEmailAddress: user.primaryEmailAddress?.emailAddress,
  };

  let userStatusPayments = data.payments.find(
    (payment) =>
      payment.clerkUser && payment.clerkUser.userID === serializedUser.id
  );

  if (!userStatusPayments) {
    return "User Not Paid!";
  }

  const status = userStatusPayments.lemonsqueezyUser.paymentsInfo.status;
  const examName = userStatusPayments.examName;
  const userFullName = userStatusPayments.clerkUser.userFullName;
  const userEmail = userStatusPayments.clerkUser.userEmail;

  const sendMessageToWhatsApp = generateWhatsAppUrl(
    status,
    examName,
    userFullName,
    userEmail
  );

  function generateWhatsAppUrl(status, examName, userFullName, userEmail) {
    const baseUrl = "https://wa.me/+212697998010?text=";
    const message = `*This is my information for verification:* \nStatus: ${status}\nExam: ${examName}\nFullName: ${userFullName}\nEmail: ${userEmail}`;
    return baseUrl + encodeURIComponent(message);
  }
  return <Link href={sendMessageToWhatsApp} target="_blank">{children}</Link>;
}
