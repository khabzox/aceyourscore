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

export default function SlidCards() {
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
          <div className="p-1">
            <Card>
              <CardContent className="relative flex flex-col aspect-square items-center text-center justify-center p-6 bg-accent text-primary rounded-lg">
                <Image
                  src={"/images/Home/Features/bgTow.png"}
                  alt="Background img"
                  layout="fill"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="gap-3 relative z-10 text-center">
                  <Star size={32} className="mx-auto mb-3" />

                  <span className="text-3xl font-semibold">{t("title1")}</span>
                  <p>{t("desc1")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="relative flex flex-col aspect-square items-center text-center justify-center p-6 bg-accent text-primary rounded-lg">
                <Image
                  src={"/images/Home/Features/bgTow.png"}
                  alt="Background img"
                  layout="fill"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="gap-3 relative z-10 text-center">
                  <Star size={32} className="mx-auto mb-3" />
                  <span className="text-3xl font-semibold">{t("title2")}</span>
                  <p>{t("desc2")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="relative flex flex-col aspect-square items-center text-center justify-center p-6 bg-accent text-primary rounded-lg">
                <Image
                  src={"/images/Home/Features/bgTow.png"}
                  alt="Background img"
                  layout="fill"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="gap-3 relative z-10 text-center">
                  <Star size={32} className="mx-auto mb-3" />
                  <span className="text-3xl font-semibold">{t("title3")}</span>
                  <p>{t("desc3")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="relative flex flex-col aspect-square items-center text-center justify-center p-6 bg-accent text-primary rounded-lg">
                <Image
                  src={"/images/Home/Features/bgTow.png"}
                  alt="Background img"
                  layout="fill"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="gap-3 relative z-10 text-center">
                  <Star size={32} className="mx-auto mb-3" />
                  <span className="text-3xl font-semibold">{t("title4")}</span>
                  <p>{t("desc4")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <div className="m-4">
        <CarouselPrevious className="bg-destructive hover:bg-destructive hover:opacity-95 text-primary hover:text-primary" />
        <CarouselNext className="bg-destructive hover:bg-destructive hover:opacity-95 text-primary hover:text-primary" />
      </div>
    </Carousel>
  );
}
