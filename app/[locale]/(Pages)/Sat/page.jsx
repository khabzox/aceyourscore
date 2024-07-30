import React from "react";
import Link from "next/link";
import { MetadataSat } from '@/libs/metadata';
import {
  PrimaryCardltr,
  PrimaryCardrtl,
  QuestionsAnswers,
  CardRegister,
} from "@/components/shared/CustmsCards";
import { SatData } from "@/libs/QuestionsAnswers";

export const metadata = MetadataSat;

export default function SatPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <PrimaryCardltr
        title={"Achieve Your College Dreams with the SAT Exam"}
        desc={
          "The SAT exam is a standardized test used for college admissions in the United States. It assesses your readiness for college through sections on Math, Evidence-Based Reading, and Writing."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students studying for the SAT"}
      />
      <PrimaryCardrtl
        title={"Understand the SAT Exam Structure"}
        desc={
          "The SAT exam consists of three main sections: Evidence-Based Reading and Writing, Math, and an optional Essay. Each section is designed to measure different aspects of your academic skills and knowledge. Learn more about the test format, scoring, and preparation tips."
        }
        imgSrc={"/images/Home/Hero/Students-Study-Online.jpg"}
        imgAlt={"Students studying for the SAT"}
        textLink={"Explore Exam Structure"}
        linkTo={"/blog"}
      />

      <QuestionsAnswers questions={SatData} />

      <CardRegister
        title={"Ready to Take the SAT Exam?"}
        desc={
          "Register now to take the SAT and open doors to higher education opportunities."
        }
        linkTo={"/"}
        textLink={"Register for the SAT Exam"}
      />
    </section>
  );
}
