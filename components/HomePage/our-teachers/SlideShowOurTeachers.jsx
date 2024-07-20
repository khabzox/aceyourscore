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

import { Star } from "lucide-react";

import Image from "next/image";

import dynamic from "next/dynamic";

export default function SlideShowOurTeachers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const t = useTranslations("About.Cards");

  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/Home/our-teachers/abdelkabir.jpg"
              alt="Teacher Name"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 object-cover "
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold">Abdelkabir Rahim</h3>
                <p className="text-sm text-muted-foreground">
                I am an experienced EFL, TAFL, and TOEFL instructor with over 20
                years of experience. Throughout my career, I have had the
                privilege of teaching local and international students as well
                as offering on-site and online classes. My extensive experience
                has equipped me with the skills and knowledge to effectively
                teach and engage students from diverse backgrounds.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/placeholder.jpg"
              alt="Teacher Name"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Mathematics</p>
              <p className="text-sm text-muted-foreground">
                John has been teaching mathematics for over 10 years and is
                passionate about helping students develop a strong foundation in
                the subject.
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/placeholder.jpg"
              alt="Teacher Name"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Mathematics</p>
              <p className="text-sm text-muted-foreground">
                John has been teaching mathematics for over 10 years and is
                passionate about helping students develop a strong foundation in
                the subject.
              </p>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/placeholder.jpg"
              alt="Teacher Name"
              width={200}
              height={200}
              className="rounded-full w-32 h-32 object-cover"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Mathematics</p>
              <p className="text-sm text-muted-foreground">
                John has been teaching mathematics for over 10 years and is
                passionate about helping students develop a strong foundation in
                the subject.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <div className="m-8">
        <CarouselPrevious className="bg-destructive hover:bg-destructive hover:opacity-95 text-primary hover:text-primary" />
        <CarouselNext className="bg-destructive hover:bg-destructive hover:opacity-95 text-primary hover:text-primary" />
      </div>
    </Carousel>
  );
}
