"use client";

import Link from "next/link";
import {
  PrimaryCardltr,
  PrimaryCardrtl,
  QuestionsAnswers,
  CardRegister,
} from "@/components/shared/CustmsCards";
import { ToeicData } from "@/libs/QuestionsAnswers";

import useExamPurchase from "@/hooks/useExamPurchase";
import config from "@/config";

export default function ToeicPage() {
  const EXAM_ID = config.LemonSqueezy.LEMON_SQUEEZY_TOEIC_ID;
  const handleExamPurchase = useExamPurchase(EXAM_ID);

  return (
    <section className="flex flex-col min-h-screen">
      <PrimaryCardltr
        title={"Unlock Your Career Potential with the TOEIC Exam"}
        desc={
          "The TOEIC exam is a globally recognized English language proficiency test that assesses your ability to use English in a professional setting. Trusted by companies and organizations around the world, the TOEIC can help you advance your career."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students studying online"}
      />
      <PrimaryCardrtl
        title={"Understand the TOEIC Exam Structure"}
        desc={
          "The TOEIC exam consists of two main sections: Listening and Reading, each assessing different aspects of your English language skills. Learn more about the exam structure, scoring, and preparation tips to ensure your success."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students studying online"}
        textLink={"Explore Exam Structure"}
        linkTo={"/blog"}
      />

      <QuestionsAnswers questions={ToeicData} />

      <CardRegister
        title={"Ready to Take the TOEIC Exam?"}
        desc={
          "Register now and start your journey towards professional success."
        }
        linkTo={"/"}
        textLink={"Register for the TOEIC Exam"}
        examId={EXAM_ID}
        handleExamPurchase={handleExamPurchase}
      />
    </section>
  );
}
