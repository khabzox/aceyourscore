import Articles from "@/components/blog/articles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FilePlus2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export default function ArticlesPage() {
  // console.log(EDITMODE, updateTicketData)
  return (
    <>
      {/* <Link href="/admin/articles/new" className="text-white p-10 mt-10">
        <Button>Creat Article</Button>
      </Link>
      <p className="pl-10 mt-2">Note: Click on any article to edit</p> */}
      <div className="flex flex-row max-w-5xl mx-auto items-center p-2 ">
        <Input
          id="search"
          name="serch"
          type="text"
          placeholder="Search..."
          required={true}
          // onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="m-4 text-white">Send</Button>
        <Card className="flex justify-center h-10 max-w-1xl mx-auto m-2 md:max-w-5xl">
          <Link href={"/admin/articles/new"}>
            <CardContent className="p-2">
              <FilePlus2 />
            </CardContent>
          </Link>
        </Card>
      </div>
      <Articles />
    </>
  );
}
