"use client";

import {
  PrimaryCardltr,
  PrimaryCardrtl,
  QuestionsAnswers,
  CardRegister,
} from "@/components/shared/CustmsCards";
import { IeltsData } from "@/libs/QuestionsAnswers";

import useExamPurchase from "@/hooks/useExamPurchase";
import config from "@/config";

export default function IeltsPage() {
  const EXAM_ID = config.LemonSqueezy.LEMON_SQUEEZY_IELTS_ID;
  const handleExamPurchase = useExamPurchase(EXAM_ID);

  return (
    <section className="flex flex-col min-h-screen">
      <PrimaryCardltr
        title={"Unlock Global Opportunities with the IELTS Exam"}
        desc={
          "The IELTS exam is a widely recognized English language proficiency test that measures your ability to use English in an academic or professional setting. Accepted by thousands of institutions worldwide, it is a key step towards studying or working abroad."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students preparing for IELTS"}
      />
      <PrimaryCardrtl
        title={"Understand the IELTS Exam Structure"}
        desc={
          "The IELTS exam consists of four sections: Listening, Reading, Writing, and Speaking. Each section evaluates different aspects of your English language skills. Get familiar with the test format, scoring system, and effective preparation strategies to achieve your best score."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students preparing for IELTS"}
        textLink={"Explore Exam Structure"}
        linkTo={"/blog"}
      />

      <QuestionsAnswers questions={IeltsData} />

      <CardRegister
        title={"Ready to Take the IELTS Exam?"}
        desc={
          "Register now to start your journey towards global education and career opportunities."
        }
        linkTo={"/"}
        textLink={"Register for the IELTS Exam"}
        examId={EXAM_ID}
        handleExamPurchase={handleExamPurchase}
      />
    </section>
  );
}
