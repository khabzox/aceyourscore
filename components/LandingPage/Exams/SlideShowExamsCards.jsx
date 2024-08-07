"use client";

import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ExamsCard } from "@/components/shared/CustmsCards";

export default function SlideShowExamsCards() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const t = useTranslations("About.Cards");

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="bg-transparent"
      >
        <CarouselContent>
          <CarouselItem className="">
            <Card>
              <CardContent className="w-[389px] md:w-[470px] h-[501px]">
                <ExamsCard
                  linkTo="#"
                  title="TOEFL"
                  subTitle="Test Your English Language Proficiency"
                  desc="Boost your English skills with interactive practice tests and expert guidance. Perfect for university admissions and more."
                />
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className=" md:basis-1/2 xl:basis-1/3">
            <Card>
              <CardContent className={"w-[389px] md:w-[470px] h-[501px]"}>
                <ExamsCard
                  linkTo={"#"}
                  title={"SAT"}
                  subTitle={"Achieve Top Scores for College Admissions"}
                  desc={
                    "Master SAT strategies with comprehensive practice materials and personalized support to excel in math, reading, and writing."
                  }
                />
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className=" md:basis-1/2 xl:basis-1/3">
            <Card>
              <CardContent className={"w-[389px] md:w-[470px] h-[501px]"}>
                <ExamsCard
                  linkTo={"#"}
                  title={"IELTS"}
                  subTitle={"Improve Your English for Global Success"}
                  desc={
                    "Prepare for the IELTS with targeted exercises and expert feedback to enhance your speaking, listening, reading, and writing skills."
                  }
                />
              </CardContent>
            </Card>
          </CarouselItem>

          <CarouselItem className=" md:basis-1/2 xl:basis-1/3">
            <Card>
              <CardContent className={"w-[389px] md:w-[470px] h-[501px]"}>
                <ExamsCard
                  linkTo={"#"}
                  title={"TOEIC"}
                  subTitle={"Excel in International Business English"}
                  desc={
                    "Advance your career with our TOEIC preparation courses, featuring practical exercises and strategies for the workplace."
                  }
                />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>

        <div className="flex justify-end p-12 gap-2">
          <CarouselPrevious
            size={35}
            variant="CarsoulBtn"
            className="bg-accent h-14 w-14 md:h-16 md:w-16"
          />
          <CarouselNext
            size={35}
            variant="CarsoulBtn"
            className="bg-accent h-14 w-14 md:h-16 md:w-16"
          />
        </div>
      </Carousel>
    </>
  );
}