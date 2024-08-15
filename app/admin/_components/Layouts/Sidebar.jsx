import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LayoutDashboard } from "lucide-react";
import { FileText } from "lucide-react";
import { Info } from "lucide-react";
import {  UsersRound, GraduationCap } from "lucide-react"

export default function Sidebar() {
  return (
    <>
      <div className="text-white h-screen w-14 bg-accent">
        {/* Sidebar content */}
        <Link
          href={"/admin"}
          className="pointer-events-auto mx-auto mt-2 mb-2 flex justify-center"
        >
          <Image
            src={"/logo.png"}
            alt="Logo of AceYourScore"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex flex-col flex-wrap content-center justify-center gap-2 text-primary">
          <Link href={"/admin"}>
            <Button variant="fourth" className="p-2 bg-white/10">
              <LayoutDashboard />
            </Button>
          </Link>
          <Link href={"/admin/articles"}>
            <Button variant="fourth" className="p-2 bg-white/10">
              <FileText />
            </Button>
          </Link>
          <Link href={"/admin/students"}>
            <Button variant="fourth" className="p-2 bg-white/10">
              <UsersRound />
            </Button>
          </Link>
          <Link href={"/admin/our-teachers"}>
            <Button variant="fourth" className="p-2 bg-white/10">
              <GraduationCap />
            </Button>
          </Link>
        </div>
        {/* <div className="absolute w-full bottom-2 pl-2 text-primary">
          <Sheet>
            <SheetTrigger>
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-fourth text-primary-foreground hover:bg-fourth/90 h-10   px-2 py-4">
                <Info />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>More Information</SheetTitle>
                <SheetDescription>
                  This Like Doc for AceYourscore
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div> */}
        {/* <div className="absolute bottom-0 w-full ">
          <Info />
        </div> */}
      </div>
    </>
  );
}
