import Link from "next/link";
import Image from "next/image";

import PropTypes from "prop-types";

import { CardBtnPrimary } from "./CustmsBtns";

import { ChevronRight } from "lucide-react";

import { ubuntu } from "@/libs/font";

export function PrimaryCardltr({ title, desc, imgSrc, imgAlt }) {
  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h1
              className={`${ubuntu.className} text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl`}
            >
              {title}
            </h1>
            <p className="mt-4 text-accent/5 opacity-85 md:text-lg">{desc}</p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={imgSrc}
              alt={imgAlt}
              className="rounded-lg shadow-md"
              width={430}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrimaryCardrtl({
  title,
  desc,
  imgSrc,
  imgAlt,
  textLink,
  linkTo,
}) {
  return (
    <div className="bg-accent text-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <Image
              src={imgSrc}
              alt={imgAlt}
              className="rounded-lg shadow-md"
              width={450}
              height={300}
            />
          </div>
          <div>
            <h2
              className={`${ubuntu.className} text-2xl font-bold md:text-3xl lg:text-4xl`}
            >
              {title}
            </h2>
            <p className="mt-4 text-gray-300 md:text-lg">{desc}</p>
            {CardBtnPrimary({ linkTo, textLink })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuestionsAnswers({ questions }) {
  return (
    <div className="py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-[95rem] mx-auto">
        <h2 className="text-2xl font-bold mb-8 md:text-3xl lg:text-4xl">
          Questions and Answers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item, index) => (
            <div key={index} className="p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {item.question}
              </h3>
              <p className="text-accent-TextHover font-semibold md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

QuestionsAnswers.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export function ExamsCard({ linkTo, title, subTitle, desc }) {
  return (
    <>
      <div className="GradientCard p-8 relative">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
          <p className="text-white my-4 text-xl md:text-2xl">{subTitle}</p>
        </div>
        <hr />
        <p className="text-white mt-4 text-xl md:text-2xl">{desc}</p>
        <Link href={linkTo}>
          <div className="mt-6 p-8 BorderCard flex items-center justify-between absolute left-0 bottom-0 pb-10">
            <h2 className="text-white font-semibold text-xl md:text-2xl">
              Start Your Preparation
            </h2>
            <ChevronRight className="bg-white/20 rounded-full text-white p-3 w-14 h-14 ml-2" />
          </div>
        </Link>
      </div>
    </>
  );
}
