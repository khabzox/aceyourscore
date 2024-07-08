import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Hero() {
  return (
    <>
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl text-slate-900 font-bold">
              Discover the latest stories and ideas
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore a world of diverse perspectives and insights on AceYourScore.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Search stories"
                className="flex-1 bg-background rounded"
              />
              <button className="py-2 px-4 bg-slate-900 rounded text-white font-medium">Search</button>
            </div>
          </div>
          <Image
            src="/images/blog/hero/hero-img.png"
            width={600}
            height={400}
            alt="Hero Image"
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  );
}
