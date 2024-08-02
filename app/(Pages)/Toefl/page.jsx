"use client";

import {
  PrimaryCardltr,
  PrimaryCardrtl,
  QuestionsAnswers,
  CardRegister,
} from "@/components/shared/CustmsCards";
import { ToeflData } from "@/libs/QuestionsAnswers";
import useExamPurchase from "@/hooks/useExamPurchase";
import config from "@/config";

export default function ToeflPage() {
  const EXAM_ID = config.LemonSqueezy.LEMON_SQUEEZY_TOEFL_ID;
  const handleExamPurchase = useExamPurchase(EXAM_ID);

  return (
    <section className="flex flex-col min-h-screen">
      <PrimaryCardltr
        title="Unlock Your Global Potential with the TOEFL Exam"
        desc="The TOEFL exam is the world's most widely accepted English language proficiency test, trusted by over 11,000 universities, colleges, and agencies in more than 150 countries."
        imgSrc="/images/Home/Hero/Students-Study-Online.jpg"
        imgAlt="Students studying online"
      />
      <PrimaryCardrtl
        title="Understand the TOEFL Exam Structure"
        desc="The TOEFL exam consists of four sections: Reading, Listening, Speaking, and Writing. Each section is designed to assess your English language proficiency in different areas. Learn more about the exam structure, scoring, and preparation tips to ensure your success."
        imgSrc="/images/Home/Hero/Students-Study-Online.jpg"
        imgAlt="Illustration of exam structure"
        textLink="Explore Exam Structure"
        linkTo="/blog"
      />
      <QuestionsAnswers questions={ToeflData} />
      <CardRegister
        title="Ready to Take the TOEFL Exam?"
        desc="Register now and start your journey towards global opportunities."
        linkTo="/"
        textLink="Register for the TOEFL Exam"
        examId={EXAM_ID}
        handleExamPurchase={handleExamPurchase}
      />
    </section>
  );
}
