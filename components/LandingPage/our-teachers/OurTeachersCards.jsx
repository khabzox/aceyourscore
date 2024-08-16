"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/libs/utils";

import { ArrowRight } from "lucide-react";

import { getTeachers } from "./getTeachers";
import { ubuntu } from "@/libs/font";

export function CardBtnOurTeachers({ children, className }) {
  return (
    <div
      className={cn(
        "flex justify-center gap-2 items-center max-w-xs bg-destructive border-4 text-primary font-semibold text-lg py-3 px-8 rounded-2xl hover:opacity-90 transition duration-300",
        className
      )}
    >
      {children} <ArrowRight />
    </div>
  );
}

export function CardLinkOurTeachers({ children, link, className }) {
  return (
    <Link
      href={link}
      className={cn(
        "flex justify-center gap-2 items-center max-w-xs bg-destructive border-4 text-primary font-semibold text-lg py-3 px-8 rounded-2xl hover:opacity-90 transition duration-300",
        className
      )}
    >
      {children} <ArrowRight />
    </Link>
  );
}

const TeacherDialogContent = ({ name, experience, image, bio }) => (
  <DialogContent className="max-w-4xl bg-accent-Hover rounded-xl max-h-[90vh] overflow-y-auto">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-10">
      {/* Image Section */}
      <div className="relative w-52 h-72 md:w-72 md:h-96 overflow-hidden rounded-[40px] border border-accent">
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[40px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-accent text-center md:text-left">
            {name}
          </DialogTitle>
          <DialogDescription className="text-lg text-accent-TextHover font-medium mt-2 text-center md:text-left">
            {experience}
          </DialogDescription>
        </DialogHeader>
        <p className="text-lg text-accent font-semibold mt-4">{bio}</p>
      </div>
    </div>
  </DialogContent>
);

export default function OurTeachersCards() {
  const [teachers, setTeachers] = useState([]);
  const [openDialog, setOpenDialog] = useState(null);

  // Fetch teachers data
  const fetchTeachersData = async () => {
    try {
      const data = await getTeachers();
      if (data?.teachers) {
        // Sort teachers by their order before setting the state
        const sortedTeachers = data.teachers.sort((a, b) => a.order - b.order);
        setTeachers(sortedTeachers);
      }
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchTeachersData();
  }, []);

  // Handle dialog open/close
  const handleDialogToggle = (id) => {
    setOpenDialog(openDialog === id ? null : id);
  };

  return (
    <>
      <div className="py-28 flex flex-col xl:flex-row justify-center items-center xl:justify-between w-full space-y-20 xl:space-y-0 space-x-0 xl:space-x-5">
        {teachers.map(({ fullName, subTitle, image, description, id }) => (
          <div
            className="w-full sm:w-[31rem] xl:w-1/3 p-2 rounded-3xl"
            key={id}
          >
            <div className="relative w-full h-[22rem] md:h-[33rem] overflow-hidden rounded-[40px] border border-accent">
              <Image
                src={image}
                alt={`Our Teacher ${fullName} (Profile Image)`}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-[40px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center pt-6">
              <h3
                className={`${ubuntu.className} text-center text-primary text-3xl font-semibold uppercase`}
              >
                {fullName}
              </h3>
              <p className="text-accent-TextHoverDark text-center text-2xl py-4">
                {subTitle}
              </p>
              <Dialog
                open={openDialog === id}
                onOpenChange={() =>
                  setOpenDialog(openDialog === id ? null : id)
                }
              >
                <DialogTrigger className="pb-5">
                  <CardBtnOurTeachers>See More</CardBtnOurTeachers>
                </DialogTrigger>
                <TeacherDialogContent
                  name={fullName}
                  experience={subTitle}
                  image={image}
                  bio={description}
                />
              </Dialog>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-80 mt-10">
        <CardLinkOurTeachers link={"/our-teachers"} className={"w-full"}>
          See More Teachers
        </CardLinkOurTeachers>
      </div>
    </>
  );
}
