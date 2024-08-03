import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Youtube, AtSign } from "lucide-react";

export default function FooterPage() {
  return (
    <footer>
      <div className="max-w-[95rem] mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image
            src={"/logo.svg"}
            alt="Logo of AceYourScore"
            width={150}
            height={90}
          />

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://www.facebook.com/people/Fahd-Ays/pfbid035D2jFXJWYu69WueEzb9NYQDbta89H3JWzLsp2hDVyqwdBfSwogRptXCZwneTjyPil/"
                rel="noreferrer"
                target="_blank"
                className="text-accent-TextHover transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>

                <Facebook />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/fahd.aceyourscore "
                rel="noreferrer"
                target="_blank"
                className="text-accent-TextHover transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>

                <Instagram />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@fahd-je7gb"
                rel="noreferrer"
                target="_blank"
                className="text-accent-TextHover transition hover:opacity-75"
              >
                <span className="sr-only">YouTube</span>

                <Youtube />
              </a>
            </li>

            <li>
              <a
                href="https://www.threads.net/@fahd.aceyourscore"
                rel="noreferrer"
                target="_blank"
                className="text-accent-TextHover transition hover:opacity-75"
              >
                <span className="sr-only">Threads</span>

                <AtSign />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-8 text-lg font-medium border-t border-muted pt-8 lg:pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium text-accent">Quick Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-accent">Exams Pages</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  TOEFL Page
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  SAT Page
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  IELTS Page
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  TOEIC Page
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-accent">Support</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-accent">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-accent-TextHover transition hover:opacity-75"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-muted/10">
          &copy; {new Date().getFullYear()}. AceYourScore. All rights reserved.
          Make with ❤️ from{" "}
          <span>
            <Link href={"https://github.com/khabzox"} className="underline">
              khabzox
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}