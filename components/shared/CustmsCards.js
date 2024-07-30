import Link from "next/link";
import Image from "next/image";

import PropTypes, { func } from "prop-types";

import { CardBtnPrimary } from "./CustmsBtns";

import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: [
    "latin",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
  ],
  weight: ["300", "400", "500", "700"],
});

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
            <p className="mt-4 text-gray-600 md:text-lg">{desc}</p>
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
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-2xl font-bold mb-8 md:text-3xl lg:text-4xl">
          Questions and Answers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item, index) => (
            <div key={index} className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                {item.question}
              </h3>
              <p className="text-accent/5 opacity-75 md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
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

export function CardRegister({ title, desc, textLink, linkTo }) {
  return (
    <div className="bg-accent text-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h2>
        <p className="mt-4 text-gray-300 md:text-lg">{desc}</p>
        {CardBtnPrimary({ linkTo, textLink })}
      </div>
    </div>
  );
}
