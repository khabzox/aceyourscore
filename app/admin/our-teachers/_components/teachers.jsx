import Link from "next/link";
import { cn } from "@/libs/utils";
import TeachersCardInfo from "./TeachersCardInfo";
import { getTeachers } from "./FetchTeachersData";

export default async function OurTeachersCards() {
  const data = await getTeachers();

  // Make sure we have articles needed for production build.
  if (!data?.teachers) {
    return <p className="text-center font-bold py-4">No teachers...</p>;
  }

  const teachers = data.teachers;

  return (
    <section>
      <div className="max-w-6xl mx-auto text-center pb-14">
        <div className="text-start">
          <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 space-x-0 xl:space-y-0 xl:space-x-5">
            {teachers.map((teacher) => (
              <TeachersCardInfo key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
          <div className="mx-auto max-w-80 my-10">
            <CardBtnOurTeachersLoader linkTo={"#"} className={"w-full"}>Load more</CardBtnOurTeachersLoader>
          </div>
      </div>
    </section>
  );
}


export function CardBtnOurTeachersLoader({ linkTo, children, className }) {

  return (
    <Link
      href={linkTo}
      className={cn(`max-w-xs bg-destructive border-4 border-accent text-primary font-semibold text-lg py-3 px-8 rounded-2xl hover:opacity-90 transition duration-300`, className)}
    >
      {children}
    </Link>
  );
}
