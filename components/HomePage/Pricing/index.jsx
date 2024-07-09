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
import { useRouter } from "next/navigation";

import BtnOfPay from "./PayButton";

import { SquareCheckBig } from "lucide-react";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
  ],
  weight: ["300", "400", "500", "700"],
});

export default function Pricing() {
  const router = useRouter();
  const { user } = useUser();
  const userId = user ? user.id : null;
  const userFullName = user ? user.fullName : null;
  const userEmail = user ? user.emailAddresses[0].emailAddress : null;

  console.log(userEmail);
  console.log(userId);
  console.log(userFullName);

  const handleExamPurchase = async (productId) => {
    if (!userId || !userFullName || !userEmail) {
      router.push("/sign-up");
      return;
    }

    try {
      const response = await axios.post("/en/api/lemonsqueezy", {
        productId: productId,
        userId: userId,
        userFullName: userFullName,
        userEmail: userEmail,
      });
      console.log(response.data);
      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert(`Failed to buy product ${productId}`);
    }
  };
  return (
    <section>
      <div className="flex flex-col justify-center max-w-6xl mx-auto mt-16">
        <h1
          className={`${ubuntu.className} text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent mb-6 `}
        >
          Pricing
        </h1>
        <div className="px-2 sm:px-5 md:px-10 py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <p className={`${ubuntu.className} font-bold text-2xl uppercase`}>
                Prep for TOEFL Exam
              </p>
              <div className="py-4 pl-2">
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <BtnOfPay
                text={"Pay Now"}
                py={3}
                px={10}
                examId={"442338"}
                handleExamPurchase={handleExamPurchase}
              />
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <p className={`${ubuntu.className} font-bold text-2xl uppercase`}>
                Prep for TOEIC Exam
              </p>
              <div className="py-4 pl-2">
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <BtnOfPay
                text={"Pay Now"}
                py={3}
                px={10}
                examId={"443228"}
                handleExamPurchase={handleExamPurchase}
              />
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <p className={`${ubuntu.className} font-bold text-2xl uppercase`}>
                Prep for SAT Exam
              </p>
              <div className="py-4 pl-2">
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <BtnOfPay
                text={"Pay Now"}
                py={3}
                px={10}
                examId={"443229"}
                handleExamPurchase={handleExamPurchase}
              />
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <p className={`${ubuntu.className} font-bold text-2xl uppercase`}>
                Prep for IELTS Exam
              </p>
              <div className="py-4 pl-2">
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="flex gap-2 py-1 font-medium">
                  <SquareCheckBig />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <BtnOfPay
                text={"Pay Now"}
                py={3}
                px={10}
                examId={"443230"}
                handleExamPurchase={handleExamPurchase}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
