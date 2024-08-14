"use client";

import useExamPurchase from "@/hooks/useExamPurchase";
import config from "@/config";
import Hero from "../_components/hero";
import WhyUs from "../_components/why-us";
import Testimonials from "../_components/Testimonials";

import {
  QuestionsAnswers,
} from "@/components/shared/CustmsCards";
import { IeltsData } from "@/libs/QuestionsAnswers";
import CardRegister from "../_components/card-register";

export default function IeltsPage() {
  const examName = "Ielts"
  return (
    <>
      <Hero examName={examName} />
      <div className="max-w-[95rem] mx-auto">
        <WhyUs examName={examName} />
      </div>
      <Testimonials />
      <QuestionsAnswers questions={IeltsData} />
      <CardRegister/>
    </>
  );
}
