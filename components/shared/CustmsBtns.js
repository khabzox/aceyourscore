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
    <Link href={linkto} className="py-2 px-4 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-accent-Hover">
      {text}
    </Link>
  );
}


export function BtnOfCTA({ text, linkto }) {
  return (
    <Link href={linkto} className="py-2 px-5 font-bold border-2 border-accent rounded-lg pt-2 hover:bg-primary hover:transition w-52 md:mx-auto text-center">
      {text}
    </Link>
  );
}





