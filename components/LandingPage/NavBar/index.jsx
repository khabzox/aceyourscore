"use client";

import { useDropMenu } from "@/hooks/useDropMenu";

import { useTranslations } from "next-intl";

import { useNav } from "@/hooks/useNav";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";

import { BtnOfLogIn } from "@/components/shared/CustmsBtns";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

import { SearchInput } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const { userId } = useAuth();
  const t = useTranslations("Navbar");

  const [toggleDropdown, closeDropdown, isOpen] = useDropMenu();
  const [open, MenuOpen] = useNav();

  return (
    <>
      <header>
        <div className="flex justify-between max-w-[100rem] mx-auto items-center p-7">
          <div className="flex gap-4 items-center">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                width={120}
                height={120}
                alt="Logo OF AceYourScore"
                className="hover:opacity-95"
              />
            </Link>
            <div className="hidden xl:block">
              <ul className="flex gap-3 font-semibold">
                <li className="dropdown-container">
                  <Link
                    href={"#prep-exams"}
                    className="flex relative items-center"
                    onClick={toggleDropdown}
                  >
                    {t("link1")}
                    <ChevronDown size={20} />
                  </Link>
                  {isOpen && (
                    <div className="dropdown-content w-44 p-5 rounded-lg bg-primary border-2 border-accent absolute z-50">
                      <ul className="space-y-3">
                        <li>
                          <Link href={"/Toefl"} onClick={closeDropdown}>TOEFL Exam</Link>
                        </li>
                        <li>
                          <Link href={"/Toefl"} onClick={closeDropdown}>SAT Exam</Link>
                        </li>
                        <li>
                          <Link href={"/Toefl"} onClick={closeDropdown}>IELTS Exam</Link>
                        </li>
                        <li>
                          <Link href={"/Toefl"} onClick={closeDropdown}>TOEIC Exam</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <Link href={"/"}>{t("link2")}</Link>
                </li>
                <li>
                  <Link href={"/"}>{t("link3")}</Link>
                </li>
                <li>
                  <Link href={"/blog"}>{t("link4")}</Link>
                </li>
                <li>
                  <Link href={"/blog"}>{t("link5")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <div className="p-4"> */}
            <div className="hidden md:block">

            <SearchInput
              icon={Search} // Pass the Search icon component
              placeholder="Search..."
              className="max-w-56 rounded-3xl text-accent"
              />
              </div>
            {/* </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Globe size={32} className="text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={"/en"}>
                  <DropdownMenuItem>English</DropdownMenuItem>
                </Link>
                {/* <Link href={"/fr"}>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </Link> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="hidden sm:block">
              {userId ? (
                <div className="flex gap-4 items-center border-2 border-accent rounded-full p-[2px]">
                  {/* <Link href='/dashboard'>Dashboard</Link> */}
                  <UserButton />
                </div>
              ) : (
                <>
                  {/* <SignedOut>
                    <SignInButton mode="modal">
                    </SignInButton>
                  </SignedOut> */}
                  <BtnOfLogIn text={t("login")} linkto={"/sign-in"} />
                </>
              )}
            </span>
            <div className="block md:hidden">
              <Menu size={32} onClick={MenuOpen} className="cursor-pointer" />
            </div>
            {open && (
              <div className="absolute right-[25px] mt-56 sm:mt-48 z-30 w-[50%] bg-primary border-2 border-accent rounded-lg block md:hidden">
                <ul className="flex flex-col justify-center gap-3 font-semibold p-4">
                  <li>
                    <Link href={"/#prep"}>{t("link1")}</Link>
                  </li>
                  <li>
                    <Link href={"/"}>{t("link3")}</Link>
                  </li>
                  <li>
                    <Link href={"/blog"}>{t("link4")}</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
