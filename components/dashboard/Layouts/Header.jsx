"use client";

import { LayoutDashboard, PenLine, Settings } from "lucide-react";
import { AlignJustify } from "lucide-react";

import { UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Header = () => {
  const { user } = useUser();
  const userFullName = user ? user.fullName : "Loading...";
  // const userImgeUrl = user ? user.imageUrl : "Loading...";
  return (
    <>
      <header className="sticky top-0 z-5 flex h-14 items-center gap-4 border-b bg-accent px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex shrink-0 items-center justify-start gap-2 text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}
              >
                <Image
                  src={"/logo.svg"}
                  alt="Logo of AceYourScore Academy"
                  width={120}
                  height={120}
                />
                <span className="sr-only">AceYourScore Academy</span>
              </Link>
              <Link
                href="/dashboard/quizzes"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-accent"
                prefetch={true}
              >
                <PenLine className="h-5 w-5" />
                Quizzes
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-accent"
                prefetch={true}
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-primary md:text-muted" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-transparent pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full bg-transparent hover:bg-transparent"
        >
          <UserButton afterSignOutUrl="/" />
        </Button>
      </header>
    </>
  );
};

export default Header;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
