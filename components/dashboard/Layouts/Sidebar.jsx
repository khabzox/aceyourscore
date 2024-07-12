"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { LayoutDashboard, FilePenLine, PenLine, Book, Settings } from "lucide-react";

import { cn } from "@/libs/utils";
import { useTranslations } from "next-intl";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Sidebar() {
  const pathName = usePathname();
  const t = useTranslations("dashboard.navigation");
  const SashboardLinks = [
    // {
    //   id: 1,
    //   Link: "Level Test",
    //   LinkMob: "Level Test",
    //   LinkTo: `/leveltest`,
    //   LinkIco: FilePenLine,
    // },
    {
      id: 2,
      Link: "Quizzes",
      LinkMob: "Quizzes",
      LinkTo: `/quizzes`,
      LinkIco: PenLine,
    },
    {
      id: 3,
      Link: "Settings",
      LinkMob: "Settings",
      LinkTo: `/settings`,
      LinkIco: Settings,
    },
  ];
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-accent sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold md:h-8 md:w-8 md:text-base"
                prefetch={false}
              >
                <LayoutDashboard className="h-4 w-4 text-accent transition-all group-hover:scale-110" />
                <span className="sr-only">Student Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Student Dashboard</TooltipContent>
          </Tooltip>
          {SashboardLinks.map((link) => {
            const NavigationLink = t("LinkNav") + link.LinkTo;
            const isActive = pathName === NavigationLink;
            return (
              <>
                <Tooltip key={`${link.Link}-${link.LinkTo}`}>
                  <TooltipTrigger asChild>
                    <Link
                      href={NavigationLink}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 bg-white/10 text-primary",
                        isActive &&
                          "flex h-9 w-9 items-center justify-center rounded-lg md:h-8 md:w-8 bg-primary text-accent"
                      )}
                      prefetch={false}
                    >
                      <link.LinkIco className="h-4 w-4 transition-all hover:scale-110" />
                      <span className="sr-only">{link.Link}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{link.LinkMob}</TooltipContent>
                </Tooltip>
              </>
            );
          })}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
