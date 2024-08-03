
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Youtube, AtSign } from "lucide-react";


export default function ContactForm() {
  return (
    <div className="py-10 flex flex-col-reverse items-start md:flex-row gap-20">
      
        <form action="" className="w-full space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <Label className="text-lg text-accent font-medium">Name:</Label>
              <Input className="bg-accent h-14 text-lg text-primary focus-visible:ring-accent" />
            </div>
            <div>
              <Label className="text-lg text-accent font-medium">Phone Number:</Label>
              <Input className="bg-accent h-14 text-lg  text-primary focus-visible:ring-accent" />
            </div>
          </div>
          <div>
            <Label className="text-lg text-accent font-medium">Email Address:</Label>
            <Input className="bg-accent h-14 text-lg text-primary focus-visible:ring-accent" />
          </div>
          <div>
            <Label className="text-lg text-accent font-medium">Message:</Label>
            <Textarea className="bg-accent text-lg text-primary focus-visible:ring-accent" rows={10} />
          </div>

          <div className="flex items-center text-lg gap-2">
            <Checkbox className="bg-accent w-5 h-5" />
            <p className="text-accent font-medium">
              By checking this box, you agree to our
              <span>
                <Link href={"/pr"}>Privacy Policy</Link>
              </span>
              and consent to the use of cookies in your browser.
            </p>
          </div>

          <Button className="w-full text-primary h-14 text-lg">Send Message</Button>
        </form>
     
      <div className="w-1/2">
        <h2>Contact Details:</h2>
        <div className="pl-2 pt-2 text-lg font-medium">
          <h3 className=" text-md sm:text-lg">Email:<br className="block md:hidden" />info@aceyourscore.com</h3>
          <h3 className="w-full">Phone Number:<br className="block md:hidden" />{"+123 456-7890"}</h3>
          {/* <div className="my-6 max-[15rem]:w-72 sm:w-56 md:w-72 border-2 border-accent"></div> */}
          <div className="sm:flex sm:items-center sm:justify-between pt-4">
          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://www.facebook.com/people/Fahd-Ays/pfbid035D2jFXJWYu69WueEzb9NYQDbta89H3JWzLsp2hDVyqwdBfSwogRptXCZwneTjyPil/"
                rel="noreferrer"
                target="_blank"
                className="text-accent transition hover:opacity-75"
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
                className="text-accent transition hover:opacity-75"
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
                className="text-accent transition hover:opacity-75"
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
                className="text-accent transition hover:opacity-75"
              >
                <span className="sr-only">Threads</span>

                <AtSign />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
