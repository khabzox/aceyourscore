"use client";

import axios from "axios";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";

export default function Pay() {
  const { user } = useUser();
  const userId = user ? user.id : null;
  const userFullName = user ? user.fullName : null;
  const userEmail = user ? user.emailAddresses[0].emailAddress : null;

  console.log(userEmail);
  console.log(userId);
  console.log(userFullName);

  const handleExamPurchase = async (productId) => {
    try {
      const response = await axios.post("/en/api/lemonsqueezy", {
        productId: productId,
        userId: userId,
        userFullName: userFullName || undefined,
        userEmail: userEmail || undefined,
      });
      console.log(response.data);
      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert(`Failed to buy product ${productId}`);
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <button
        onClick={() => handleExamPurchase("443229")}
        className="p-3 border border-white"
      >
        SATEXAM
      </button>
      <button
        onClick={() => handleExamPurchase("443228")}
        className="p-3 border border-white"
      >
        TOEICEXAM
      </button>
      <button
        onClick={() => handleExamPurchase("443230")}
        className="p-3 border border-white"
      >
        IELTSEXAM
      </button>
      <button
        onClick={() => handleExamPurchase("442338")}
        className="p-3 border border-white"
      >
        TOEFLEXAM
      </button>
    </section>
  );
}
