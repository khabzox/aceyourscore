"use client";

import React, { useState, useMemo } from "react";
import { GenerateOfferings } from "../exams/_components/generateOfferings";
import FooterPage from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";
import WhyUs from "../exams/_components/why-us";
import Testimonials from "../exams/_components/Testimonials";
import CardRegister from "../exams/_components/card-register";

const examDetails = {
  TOEIC: [
    "Group size: 10 to 12 students",
    "Total hours: 30 hours of instruction",
    "Access to community resources and support",
    "Access to detailed study materials and practice tests",
  ],
  IELTS: [
    "Group size: 10 to 12 students",
    "Total hours: 30 hours of instruction",
    "Access to community resources and support",
    "Access to detailed study materials and practice tests",
  ],
  SAT: [
    "Group size: 10 to 12 students",
    "Total hours: 30 hours of instruction",
    "Access to community resources and support",
    "Access to detailed study materials and practice tests",
  ],
  TOEFL: [
    "Group size: 10 to 12 students",
    "Total hours: 30 hours of instruction",
    "Access to community resources and support",
    "Access to detailed study materials and practice tests",
  ],
};

function getExamPrice(examName) {
  let priceExam;
  switch (examName) {
    case "TOEFL":
      priceExam = "1,500";
      break;
    case "SAT":
      priceExam = "3,500";
      break;
    case "IELTS":
      priceExam = "1,800";
      break;
    case "TOEIC":
      priceExam = "1,600";
      break;
    default:
      priceExam = "N/A";
  }
  return priceExam;
}

function getExamName(examName) {
  let priceName;
  switch (examName) {
    case "TOEFL":
      priceName = "Toefl";
      break;
    case "SAT":
      priceName = "Sat";
      break;
    case "IELTS":
      priceName = "Ielts";
      break;
    case "TOEIC":
      priceName = "Toeic";
      break;
    default:
      priceName = "N/A";
  }
  return priceName;
}

const PricingPage = () => {
  const [examName, setExamName] = useState("");

  // Compute exam offerings data once
  const examOfferings = useMemo(() => {
    return Object.keys(examDetails).map((exam) => ({
      exam,
      title: `${getExamName(exam)} Standard Group`,
      items: examDetails[exam],
      price: getExamPrice(exam),
    }));
  }, []);

  return (
    <>
      <NavBar />
      <main className="pt-16">
        <div className="bg-yellow ">
          <div
            className="max-w-[95rem] mx-auto bg-yellow relative overflow-hidden"
            id="start-now"
          >
            <div className="max-w-[95rem] mx-auto py-20">
              <div className="flex flex-col justify-center items-center text-center space-y-5">
                <p className="py-2 px-4 bg-accent text-primary font-medium rounded-full max-w-sm text-xs sm:text-sm">
                  🚀 New! Cutting-Edge Prep
                </p>
                <h1 className="leading-tight text-2xl sm:text-6xl relative z-10">
                  Ace Your Score Prep: <br />
                  Unlock Your Path to Success
                </h1>
              </div>
              <div className="relative z-10 mt-10 px-5 flex flex-col 2xl:flex-row justify-center items-center gap-8">
                {examOfferings.map(({ exam, title, items, price }) => (
                  <React.Fragment key={exam}>
                    {[Array(4)].map((_, index) => (
                      <GenerateOfferings
                        key={`${exam}-${index}`}
                        title={title}
                        items={items}
                        examName={getExamName(exam)}
                        price={price}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white max-w-[95rem] mx-auto">
          <WhyUs examName={examName} className="space-y-2" />
        </div>
        <Testimonials />
        <CardRegister />
      </main>
      <FooterPage />
    </>
  );
};

export default PricingPage;
