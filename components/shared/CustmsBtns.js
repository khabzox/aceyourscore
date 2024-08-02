import Link from "next/link";

import { LogIn } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function BtnOfLogIn({ text, linkto }) {
  return (
    <Link
      href={linkto}
      className="flex px-4 py-2 border-4 border-accent rounded-lg gap-2 font-semibold hover:bg-accent-Hover hover:transition"
    >
      <LogIn />
      {text}
    </Link>
  );
}

export function BtnOfHero({ text, linkto }) {
  return (
    <Link
      href={linkto}
      className="flex justify-center gap-2 items-center max-w-xs bg-accent text-primary text-lg py-3 px-6 rounded-lg hover:opacity-95 transition duration-300"
    >
      {text} <ArrowRight />
    </Link>
  );
}

export function BtnOfBlog({ text, linkto }) {
  return (
    <Link
      href={linkto}
      className="py-2 px-4 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-accent-Hover"
    >
      {text}
    </Link>
  );
}

export function BtnOfCTA({ text, linkto }) {
  return (
    <Link
      href={linkto}
      className="py-2 px-5 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-primary hover:transition w-52 md:mx-auto text-center"
    >
      {text}
    </Link>
  );
}

export function BtnOfAbout({ linkto, children }) {
  return (
    <Link
      href={linkto}
      className="flex justify-center items-center max-w-xs bg-accent text-primary text-lg py-3 px-6 rounded-lg hover:opacity-95 transition duration-300"
    >
      {children}
    </Link>
  );
}


export function CardBtnPrimary({ linkTo, textLink }) {

  return (
    <Link
      href={linkTo}
      className={"inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-2 my-4 text-sm font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-4 sm:px-6 sm:py-3 md:text-base md:font-medium"}
      prefetch={true}
    >
      {textLink}
    </Link>
  );
}