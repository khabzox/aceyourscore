"use client";

import { useTranslations } from "next-intl";

import axios from "axios";

import config from "@/config";

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

import { ubuntu } from "@/libs/font";

export default function Pricing() {
  const t = useTranslations("Pricing");

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
    <section id="prep">
      <div className="flex flex-col justify-center max-w-6xl mx-auto mt-16">
        <h1
          className={`${ubuntu.className} text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-accent mb-6 `}
        >
          {t("title")}
        </h1>
        <div className="px-2 sm:px-5 md:px-10 py-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="mb-4">
                <h5
                  className={`${ubuntu.className} font-bold text-xl uppercase`}
                >
                  {t("card1.title")}
                </h5>
                {/* <p>Prepare effectively for the TOEFL exam with our comprehensive course. Improve your reading, listening, speaking, and writing skills with tailored lessons and practice tests.</p> */}
              </div>
              <div className="flex flex-col justify-between text-center gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">1,500 MAD</span>
                  <span className=" text-accent">/30h</span>
                </div>

                <div className="pt-2 pb-4 pl-2 text-md text-start">
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card1.f1")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card1.f2")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card1.f3")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card1.f4")}</p>
                  </div>
                </div>
                <BtnOfPay
                  text={t("payBtn")}
                  py={3}
                  examId={config.LemonSqueezy.LEMON_SQUEEZY_TOEFL_ID}
                  handleExamPurchase={handleExamPurchase}
                />
              </div>
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="mb-4">
                <h5
                  className={`${ubuntu.className} font-bold text-xl uppercase`}
                >
                  {t("card2.title")}
                </h5>
              </div>
              <div className="flex flex-col justify-between text-center gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">1,600 MAD</span>
                  <span className=" text-accent">/30h</span>
                </div>

                <div className="pt-2 pb-4 pl-2 text-md text-start">
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card2.f1")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card2.f2")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card2.f3")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card2.f4")}</p>
                  </div>
                </div>
                <BtnOfPay
                  text={t("payBtn")}
                  py={3}
                  examId={config.LemonSqueezy.LEMON_SQUEEZY_TOEIC_ID}
                  handleExamPurchase={handleExamPurchase}
                />
              </div>
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="mb-4">
                <h5
                  className={`${ubuntu.className} font-bold text-xl uppercase`}
                >
                  {t("card3.title")}
                </h5>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
              </div>
              <div className="flex flex-col justify-between text-center gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">3,500 MAD</span>
                  <span className=" text-accent">/30h</span>
                </div>

                <div className="pt-2 pb-4 pl-2 text-md text-start">
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card3.f1")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card3.f2")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card3.f3")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card3.f4")}</p>
                  </div>
                </div>
                <BtnOfPay
                  text={t("payBtn")}
                  py={3}
                  examId={config.LemonSqueezy.LEMON_SQUEEZY_SAT_ID}
                  handleExamPurchase={handleExamPurchase}
                />
              </div>
            </div>

            <div className="bg-transparent border-2 border-accent text-accent rounded-lg p-6 max-w-full md:max-w-sm">
              <div className="mb-4">
                <h5
                  className={`${ubuntu.className} font-bold text-xl uppercase`}
                >
                  {t("card4.title")}
                </h5>
                {/* <p>Lorem ipsum dolor sit amet.</p> */}
              </div>
              <div className="flex flex-col justify-between text-center gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">1,800 MAD</span>
                  <span className=" text-accent">/30h</span>
                </div>

                <div className="pt-2 pb-4 pl-2 text-md text-start">
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card4.f1")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card4.f2")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card4.f3")}</p>
                  </div>
                  <div className="flex gap-2 py-1 font-normal">
                    <SquareCheckBig />
                    <p>{t("card4.f4")}</p>
                  </div>
                </div>
                <BtnOfPay
                  text={t("payBtn")}
                  py={3}
                  examId={config.LemonSqueezy.LEMON_SQUEEZY_IELTS_ID}
                  handleExamPurchase={handleExamPurchase}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
