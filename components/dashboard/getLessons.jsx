import { getUsersPaymentsData } from "./UsersInfo/FetchUsersPaymentsData";

import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";

export async function GetLessons({ params, children }) {
  const { id } = params;
  console.log("Received ID: ", id); // Output: it's working, ID is received

  // Get Data from getUsersPayments
  const data = await getUsersPaymentsData(id);

  if (!data) {
    return (
      <button
        className="py-2 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-[#e1d8c9] hover:transition w-full md:mx-auto text-center"
        disabled
      >
        Pay For It
      </button>
    );
  }

  console.log(data);

  const DataForGenerateLink = data.foundPayments;

  const status = DataForGenerateLink.lemonsqueezyUser.paymentsInfo.status;
  const examName = DataForGenerateLink.examName;
  const userFullName = DataForGenerateLink.clerkUser.userFullName;
  const userEmail = DataForGenerateLink.lemonsqueezyUser.customerEmail;

  const sendMessageToWhatsApp = generateWhatsAppUrl(
    status,
    examName,
    userFullName,
    userEmail
  );

  function generateWhatsAppUrl(status, examName, userFullName, userEmail) {
    const baseUrl = `https://wa.me/${process.env.NEXT_PHONE_NUMBER}?text=`;
    const message = `*This is my information for verification:* \nStatus: ${status}\nExam: ${examName}\nFullName: ${userFullName}\nEmail: ${userEmail}`;
    return baseUrl + encodeURIComponent(message);
  }
  return (
    <Link
      href={sendMessageToWhatsApp}
      target="_blank"
      className="py-2 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-[#e1d8c9] hover:transition w-full md:mx-auto text-center"
    >
      {children}
    </Link>
  );
}
