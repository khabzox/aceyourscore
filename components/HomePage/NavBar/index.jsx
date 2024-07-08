import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import { Globe } from "lucide-react";
import { Menu } from "lucide-react";

import { BtnOfLogIn } from "@/components/shared/CustmsBtns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  const t = useTranslations("Navbar");
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
                <Link href={"/en"}>
                  <DropdownMenuItem>English</DropdownMenuItem>
                </Link>
                <Link href={"/fr"}>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className=" hidden sm:block">
              <BtnOfLogIn text={t("login")} linkto={"/sign-in"} />
            </span>
            <Menu size={32} className="block md:hidden" />
          </div>
        </div>
      </header>
    </>
  );
}
