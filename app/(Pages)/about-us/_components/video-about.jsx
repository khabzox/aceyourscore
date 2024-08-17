import { Sparkles, Play, ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { ubuntu } from "@/libs/font";

export default function VideoAboutUS() {
  return (
    <div className="bg-yellow w-full">
      <div className="max-w-[95rem] mx-auto py-32 px-10 3xl:px-0">
        <div>
          <h1 className={` text-4xl sm:text-5xl md:text-6xl font-bold`}>
            Get to Know Us: Our Mission and Vision
          </h1>
          <div className="flex">
            <p className="text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold py-9">
              Watch our video to explore who we are, our mission to support your
              success, and how our expert team and innovative methods make exam
              preparation effective and engaging.
            </p>

            <div className="px-20 pb-10 hidden md:block">
              <Link href={"#"}>
                <div className="relative">
                  <Image
                    src={"/images/home/about/about-link.png"}
                    className="animate-spin-slow"
                    alt="Link"
                    width={200}
                    height={200}
                  />
                  <div className="absolute left-1/2 top-1/2 flex justify-center -translate-x-1/2 -translate-y-1/2 transform">
                    <ArrowUpRight size={70} className="text-primary w-12" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-muted rounded-3xl w-full h-full flex justify-center items-center">
            <div className="bg-accent text-primary w-16 h-16 rounded-full flex justify-center items-center">
              <Play />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
