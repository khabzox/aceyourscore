"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./style.module.css"
import { useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import config from "@/config";

export default function Header() {
  const { user } = useUser();

  const [open, setOpen] = useState(false);
  function boxOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <header className="bg-slate-900 text-white p-7">
        <div className="flex justify-between max-w-screen-xl mx-auto items-center">
          <div className="font-extrabold text-xl">
            <Link href="/">{config.appName}</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 font-medium items-center">
              <li className="hover:underline">
                <a href="/">Home</a>
              </li>
              <li className="hover:underline">
                <a href="/blog/posts">Articles</a>
              </li>
              {user ? (
                <li className="hover:underline">
                  <UserButton afterSignOutUrl="/" />
                </li>
              ) : (
                <li className="hover:underline">
                  <Link href="/sign-in">Login/Signin</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="block md:hidden">
            <button
              className="rounded bg-secndHov p-2 text-white"
              onClick={boxOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {open && (
              <div className={styles.mobileLinks}>
                <ul className="mx-auto mb-2">
                  {user ? (
                    <li className="hover:underline mx-auto mb-4">
                      <UserButton fallbackRedirectUrl="/" />
                    </li>
                  ) : (
                    <li className="hover:underline mb-4">
                      <Link href="/sign-in">Login/Signin</Link>
                    </li>
                  )}
                  <li className="hover:underline mb-4">
                    <a href="/">Home</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/posts">Articles</a>
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
