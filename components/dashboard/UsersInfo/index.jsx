import { getUsersPaymentsData } from "./FetchUsersPaymentsData";
import { currentUser } from "@clerk/nextjs/server";

export default async function UsersInfo({ params }) {
  const { id } = params;
  // console.log("Received ID: ", id); // Output: it's working, ID is received

  const ClerkUser = await currentUser();

  // get specific data from clerk about this current user
  const serializedUser = {
    id: ClerkUser.id,
    fullName: ClerkUser.fullName,
    primaryEmailAddress: ClerkUser.primaryEmailAddress?.emailAddress,
  };

  // get data from db
  const userData = await getUsersPaymentsData(id);
  // console.log("Fetched User Data:", userData); // Output: undefined or actual data

  // defualt res for not paid user
  if (!userData || !userData.foundPayments) {
    return (
      <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
        <p className="text-navy-900">Status: FREE</p>
        <p className="text-navy-900">Exam: No Specified</p>
        <p className="text-navy-900">FullName: {serializedUser.fullName}</p>
        <p className="text-navy-900">Email: {serializedUser.primaryEmailAddress}</p>
      </div>
    );
  }

  const user = userData.foundPayments;
  // console.log("Found Payments: ", user); // For debugging

  return (
    <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
      <p className="text-navy-900">
        Status: {user.paymentUser.payment.status}
      </p>
      <p className="text-navy-900">Exam: {user.paymentUser.customer.examName}</p>
      <p className="text-navy-900">FullName: {user.registeredUser.fullName}</p>
      <p className="text-navy-900">
        Email: {user.paymentUser.customer.email}
      </p>
    </div>
  );
}