"use client";

import Hero from "../_components/hero";
import WhyUs from "../_components/why-us";
import Testimonials from "../_components/Testimonials";

import { QuestionsAnswers } from "@/components/shared/CustmsCards";
import { ToeflData } from "@/libs/QuestionsAnswers";
import CardRegister from "../_components/card-register";

export default function ToeflPage() {
  const examName = "Toefl"
  return (
    <>
      <Hero examName={examName} />
      <div className="max-w-[95rem] mx-auto">
        <WhyUs examName={examName} />
      </div>
      <Testimonials />
      <QuestionsAnswers questions={ToeflData} />
      <CardRegister />
    </>
  );
}
