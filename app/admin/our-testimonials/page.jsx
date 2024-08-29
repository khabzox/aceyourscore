import Testimonials from "./_components/testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function OurTestimonial() {
  return (
    <>
      <div className="flex flex-row max-w-5xl mx-auto items-center p-2 ">
        <Input
          id="search"
          name="serch"
          type="text"
          placeholder="Search..."
          required={true}
        />
        <Button className="m-4 bg-accent text-white">Search</Button>
        <Card className="flex justify-center bg-accent text-primary h-10 max-w-1xl mx-auto m-2 md:max-w-5xl">
          <Link href={"/admin/our-testimonials/new"}>
            <CardContent className="p-2">
              <PlusCircle />
            </CardContent>
          </Link>
        </Card>
      </div>
      <Testimonials />
    </>
  )
}

export default OurTestimonial
