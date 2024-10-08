"use client";
import { useTranslations } from "next-intl";

import { useNav } from "@/hooks/useNav";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";
import { Menu } from "lucide-react";

import { BtnOfLogIn } from "@/components/shared/CustmsBtns";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

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

  const { open, boxOpen } = useNav();

  return (
    <>
      <header>
        <div className="flex justify-between max-w-7xl mx-auto items-center p-7">
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
            <div className="hidden md:block">
              <ul className="flex gap-3 font-semibold">
                <li>
                  <Link href={"/"}>{t("link1")}</Link>
                </li>
                <li>
                  <Link href={"/"}>{t("link3")}</Link>
                </li>
                <li>
                  <Link href={"/blog"}>{t("link4")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Globe size={32} className="text-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={""}>
                  <DropdownMenuItem>English</DropdownMenuItem>
                </Link>
                {/* <Link href={"/fr/blog"}>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </Link> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className=" hidden sm:block">
              {userId ? (
                <div className="flex gap-4 items-center border-2 border-accent rounded-full p-[2px]">
                  {/* <Link href='/dashboard'>Dashboard</Link> */}
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <BtnOfLogIn text={t("login")} linkto={"/sign-in"} />
              )}
            </span>
            <div className="block md:hidden" onClick={boxOpen}>
              <Menu size={32} />
            </div>
            {open && (
              <div className="absolute right-[15px] mt-52 sm:mt-44 w-[50%] bg-primary border-2 border-accent rounded-lg block md:hidden">
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
