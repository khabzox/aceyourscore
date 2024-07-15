"use server"
import { getUsersPaymentsData } from "./FetchUsersPaymentsData";
import { currentUser } from "@clerk/nextjs/server";

export default async function UsersInfo() {
  try {
    // Get data of user payments
    const data = await getUsersPaymentsData();

    // Get data of the current user from Clerk
    const user = await currentUser();

    if (!user) {
      return (
        <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
          <p className="text-navy-900">Status: User not found</p>
          <p className="text-navy-900">Exam: N/A</p>
          <p className="text-navy-900">FullName: N/A</p>
          <p className="text-navy-900">Email: N/A</p>
        </div>
      );
    }

    // Serialize user data from Clerk
    const serializedUser = {
      id: user.id,
      fullName: user.fullName,
      primaryEmailAddress: user.primaryEmailAddress?.emailAddress,
    };

    // Check if the current user has data in the database by userID
    const userStatusPayments = data.payments.find(
      (payment) => payment.clerkUser?.userID === serializedUser.id
    );

    if (!userStatusPayments) {
      return (
        <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
          <p className="text-navy-900">Status: FREE</p>
          <p className="text-navy-900">Exam: No Specified</p>
          <p className="text-navy-900">FullName: {serializedUser.fullName}</p>
          <p className="text-navy-900">
            Email: {serializedUser.primaryEmailAddress}
          </p>
        </div>
      );
    }

    // If everything is good and the user is found, return his data and show it
    return (
      <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
        <p className="text-navy-900">
          Status: {userStatusPayments.lemonsqueezyUser.paymentsInfo.status}
        </p>
        <p className="text-navy-900">Exam: {userStatusPayments.examName}</p>
        <p className="text-navy-900">
          FullName: {userStatusPayments.clerkUser.userFullName}
        </p>
        <p className="text-navy-900">
          Email: {userStatusPayments.clerkUser.userEmail}
        </p>
      </div>
    );
  } catch (error) {
    console.log("Error loading user payment info: ", error);
    return (
      <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-accent pt-4 sm:pt-0 sm:pl-4">
        <p className="text-navy-900">Status: Error loading data</p>
      </div>
    );
  }
}
