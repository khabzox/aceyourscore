"use client";

import {
  PrimaryCardltr,
  PrimaryCardrtl,
  QuestionsAnswers,
} from "@/components/shared/CustmsCards";

import CardRegister from "./_components/CardRegister";

import { ToeflData } from "@/libs/QuestionsAnswers";
import useExamPurchase from "@/hooks/useExamPurchase";
import config from "@/config";

import Hero from "./_components/hero";
import WhyUs from "./_components/WhyUs";
import HowAceYourScoreWorks from "@/components/LandingPage/HowAceYourScoreWorks";
import Testimonials from "./_components/Testimonials";
import OurTeachers from "./_components/our-teachers";

export default function ToeflPage() {
  const EXAM_ID = config.LemonSqueezy.LEMON_SQUEEZY_TOEFL_ID;
  const handleExamPurchase = useExamPurchase(EXAM_ID);

  return (
    <>
      <Hero />
      <div className="max-w-[95rem] mx-auto">
        <WhyUs />
      </div>
      <OurTeachers />
      <div className="max-w-[95rem] mx-auto">
        <HowAceYourScoreWorks />
      </div>
      <Testimonials />
      <CardRegister />
    </>
  );
}
