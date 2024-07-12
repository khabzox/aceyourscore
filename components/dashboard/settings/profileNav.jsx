"use client";
import Link from "next/link";
import { profileNavLinks } from "./settingsData/profileNavLinks";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/utils";
export default function ProfileNav() {
  const pathName = usePathname();
  return (
    <>
      <nav
        className="grid gap-4 text-sm text-muted-foreground"
        x-chunk="dashboard-04-chunk-0"
      >
        {profileNavLinks.map((link) => {
          const isActive = pathName === link.LinkTo;
          return (
            <Link
              key={`${link.Link}-${link.LinkTo}`}
              className={cn(
                "text-muted-foreground",
                isActive && "font-semibold text-primary"
              )}
              href={link.LinkTo}
            >
              {link.Link}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
