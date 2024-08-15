"use client";

import { useState } from "react";
import { useDropMenu } from "@/hooks/useDropMenu";
import { useTranslations } from "next-intl";
import { useNav } from "@/hooks/useNav";
import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, ChevronDown, Search } from "lucide-react";
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const { userId } = useAuth();
  const t = useTranslations("Navbar");

  const [toggleDropdown, closeDropdown, isOpen] = useDropMenu();
  const [open, MenuOpen] = useNav();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Perform search action, e.g., redirect to a search results page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-primary z-50 h-16 py-12">
        <div className="flex justify-between max-w-[100rem] mx-auto items-center px-7 h-full">
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
                <li className="relative">
                  <button
                    className="flex items-center"
                    onClick={toggleDropdown}
                  >
                    {t("link1")}
                    <ChevronDown size={20} />
                  </button>
                  {isOpen && (
                    <div className="dropdown-content w-44 p-5 rounded-lg bg-primary border-2 border-accent absolute z-50">
                      <ul className="space-y-3">
                        <li>
                          <Link href={"/exams/toefl"} onClick={closeDropdown}>TOEFL Exam</Link>
                        </li>
                        <li>
                          <Link href={"/exams/sat"} onClick={closeDropdown}>SAT Exam</Link>
                        </li>
                        <li>
                          <Link href={"/exams/ielts"} onClick={closeDropdown}>IELTS Exam</Link>
                        </li>
                        <li>
                          <Link href={"/exams/toeic"} onClick={closeDropdown}>TOEIC Exam</Link>
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
            <div className="hidden md:block">
              <SearchInput
                icon={Search}
                placeholder="Search..."
                className="max-w-56 rounded-3xl text-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Globe size={32} className="text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={""}>
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
