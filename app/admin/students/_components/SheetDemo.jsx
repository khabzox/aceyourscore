import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo({ data }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="viewCus">View Details</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Payment Information</SheetTitle>
          <SheetDescription>
            Here is the detailed payment information. Click unsubscribe if you
            wish to cancel.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="text-start">
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="name" className="text-start font-semibold">
                Name
              </Label>
              <div id="name" className="col-span-3">
                {data?.userFullName || "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="email" className="text-start font-semibold">
                Email
              </Label>
              <div id="email" className="col-span-3">
                {data?.email || "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="examName" className="text-start font-semibold">
                Exam Name
              </Label>
              <div id="examName" className="col-span-3">
                {data?.examName || "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="status" className="text-start font-semibold">
                Status
              </Label>
              <div id="status" className="col-span-3">
                {data?.status || "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="total" className="text-start font-semibold">
                Total Paid
              </Label>
              <div id="total" className="col-span-3">
                {data?.totalFormatted || "N/A"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="total" className="text-start font-semibold">
                Total Refunded
              </Label>
              <div id="refunded" className="col-span-3">
                {data?.refunded ? "Refunded" : "Not Refunded"}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 mb-2">
              <Label htmlFor="total" className="text-start font-semibold">
                Order Number
              </Label>
              <div id="orderNumber" className="col-span-3">
                #{data?.orderNumber || "N/A"}
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          {/* <Button variant="custom">Cencel</Button> */}
          <Link href="https://app.lemonsqueezy.com/orders" target="_blank">
            <Button variant="destructive">Refunded</Button>
          </Link>
          <Button variant="custom">Invoice</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
