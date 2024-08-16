import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/libs/utils";
import { ArrowRight } from "lucide-react";
import { ubuntu } from "@/libs/font";
import { useState } from "react";

const TeacherDialogContent = ({ name, experience, image, bio }) => (
  <DialogContent className="max-w-4xl bg-accent-Hover rounded-xl">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-10">

      {/* Image Section */}
      <div className="relative overflow-hidden my-auto">
        <Image
          src={image}
          alt={`${name}'s profile`}
          width={210}
          height={400}
          objectFit="cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-accent">{name}</DialogTitle>
          <DialogDescription className="text-lg text-accent-TextHover font-medium mt-2">{experience}</DialogDescription>
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

export default function CardTeachers() {
  const [openDialog, setOpenDialog] = useState(null); // Use a state to track which dialog is open

  return (
    <div className="py-28 flex flex-col xl:flex-row justify-center items-center xl:justify-between w-full space-y-20 xl:space-y-0 space-x-5">
      {/* Teacher 1 */}
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/sabik.png"}
          width={438}
          height={501}
          alt="Our Teacher Sabik (Profile Image)"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3 className={`${ubuntu.className} text-3xl font-semibold uppercase`}>
            Sabik Youness
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +20 years of experience
          </p>
          <Dialog open={openDialog === 'sabik'} onOpenChange={() => setOpenDialog(openDialog === 'sabik' ? null : 'sabik')}>
            <DialogTrigger>
              <CardBtnOurTeachers>See More</CardBtnOurTeachers>
            </DialogTrigger>
            <TeacherDialogContent
              name="Sabik Youness"
              experience="+20 years of experience"
              image="/images/home/our-teachers/sabik.png"
              bio="I am an experienced EFL, TAFL, TOEFL, and IELTS instructor, having taught English since 2005. With nearly 20 years of experience, I have had the privilege of teaching local and international students, both on-site and online. Additionally, I specialize in teaching business English. My extensive background has equipped me with the skills and knowledge to effectively engage and teach students from diverse backgrounds."
            />
          </Dialog>
        </div>
      </div>

      {/* Teacher 2 */}
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/rahim.png"}
          width={438}
          height={501}
          alt="Our Teacher Rahim (Profile Image)"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3 className={`${ubuntu.className} text-3xl font-semibold uppercase`}>
            Rahim Abdelkabir
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +20 years of experience
          </p>
          <Dialog open={openDialog === 'rahim'} onOpenChange={() => setOpenDialog(openDialog === 'rahim' ? null : 'rahim')}>
            <DialogTrigger>
              <CardBtnOurTeachers>See More</CardBtnOurTeachers>
            </DialogTrigger>
            <TeacherDialogContent
              name="Rahim Abdelkabir"
              experience="+20 years of experience"
              image="/images/home/our-teachers/rahim.png"
              bio="I am an experienced EFL, TAFL, and TOEFL instructor with over 20 years of experience. Throughout my career, I have had the privilege of teaching local and international students as well as offering on-site and online classes. My extensive experience has equipped me with the skills and knowledge to effectively teach and engage students from diverse backgrounds."
            />
          </Dialog>
        </div>
      </div>

      {/* Teacher 3 */}
      <div className="max-w-[438px]">
        <Image
          src={"/images/home/our-teachers/siham.png"}
          width={438}
          height={501}
          alt="Our Teacher Siham (Profile Image)"
        />
        <div className="flex flex-col justify-center items-center pt-10">
          <h3 className={`${ubuntu.className} text-3xl font-semibold uppercase`}>
            Assemmar Sihame
          </h3>
          <p className="text-accent-TextHoverDark text-2xl py-4 pb-8">
            +11 years of experience
          </p>
          <Dialog open={openDialog === 'siham'} onOpenChange={() => setOpenDialog(openDialog === 'siham' ? null : 'siham')}>
            <DialogTrigger>
              <CardBtnOurTeachers>See More</CardBtnOurTeachers>
            </DialogTrigger>
            <TeacherDialogContent
              name="Assemmar Sihame"
              experience="+11 years of experience"
              image="/images/home/our-teachers/siham.png"
              bio="I am a passionate EFL teacher who values the teacher's student rapport. With 11 years of experience, teaching students from different backgrounds and with different objectives, I strongly believe that language acquisition happens through active and repetitive process. Through my teaching journey, I was able to  equip myself with the necessary skills to allow me to help my students reach their goal."
            />
          </Dialog>
        </div>
      </div>
    </div>
  );
}
