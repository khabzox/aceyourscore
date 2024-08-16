"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/libs/utils";
import { ArrowRight } from "lucide-react";
import { ubuntu } from "@/libs/font";
import { useState } from "react";

import EditBlock from "@/components/admin/teachers/EditeBlock";
import DeleteTeacherBlock from "@/components/admin/teachers/DeleteBlock";

const TeacherDialogContent = ({ name, experience, image, bio }) => (
  <DialogContent className="max-w-4xl bg-accent-Hover rounded-xl max-h-[90vh] overflow-y-auto">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-10">

      {/* Image Section */}
      <div className="relative w-52 h-72 md:w-72 md:h-96 overflow-hidden rounded-[40px] border border-accent">
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-[40px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-accent text-center md:text-left">{name}</DialogTitle>
          <DialogDescription className="text-lg text-accent-TextHover font-medium mt-2 text-center md:text-left">{experience}</DialogDescription>
        </DialogHeader>
        <p className="text-lg text-accent font-semibold mt-4">{bio}</p>
      </div>
    </div>
  </DialogContent>
);


export function CardBtnOurTeachers({ children, className }) {
  return (
    <div
      className={cn("flex justify-center gap-2 items-center max-w-xs bg-destructive border-4 text-primary font-semibold text-lg py-3 px-8 rounded-2xl hover:opacity-90 transition duration-300", className)}
    >
      {children} <ArrowRight />
    </div>
  );
}

export default function CardTeachers({ teacher, admin }) {
  const [openDialog, setOpenDialog] = useState(null);

  const teacherFullName = teacher.fullName;
  return (
    <div className="max-w-[400px] bg-accent pb-5 pt-2 px-5 rounded-[40px]">
      <div className="flex justify-center pb-2">
        {admin ? (
          <div className="flex justify-end m-2">
            <EditBlock id={teacher.id} />
          </div>
        ) : (
          <div className="pb-6"></div>
        )}
        {admin ? (
          <div className="flex justify-end m-2">
            <DeleteTeacherBlock id={teacher.id} />
          </div>
        ) : (
          <div className="pb-6"></div>
        )}
      </div>
      <div className="relative w-[22.5rem] h-96 overflow-hidden rounded-[40px] border border-accent">
        <Image
          src={teacher.image}
          alt={`Our Teacher ${teacherFullName} (Profile Image)`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-[40px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-10">
        <h3 className={`${ubuntu.className} text-primary text-3xl font-semibold uppercase`}>
          {teacherFullName}
        </h3>
        <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
          {teacher.subTitle}
        </p>
        <Dialog open={openDialog === teacherFullName} onOpenChange={() => setOpenDialog(openDialog === teacherFullName ? null : teacherFullName)}>
          <DialogTrigger>
            <CardBtnOurTeachers>See More</CardBtnOurTeachers>
          </DialogTrigger>
          <TeacherDialogContent
            name={teacherFullName}
            experience={teacher.subTitle}
            image={teacher.image}
            bio={teacher.description}
          />
        </Dialog>
      </div>
    </div>
  );
}

