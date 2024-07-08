import Link from "next/link";
import Image from "next/image";
export default function FeaturedIn() {
  return (
    <>
      <div class="text-center py-[3%]">
        <div class=" max-w-screen-lg mx-auto">
          <h2 class="mb-7">FEATURED IN</h2>
          <div class="flex flex-wrap justify-around items-center">
            <Link href="#">
              <Image
                src={"/images/FeaturedIn/yt.png"}
                alt={"Youtube Logo"}
                width={200}
                height={150}
                className="saturate-0 hover:saturate-100 duration-1000"
              />
            </Link>
            <Link href="#">
              <Image
                src={"/images/FeaturedIn/fac.png"}
                alt={"Youtube Logo"}
                width={200}
                height={150}
                className="saturate-0 hover:saturate-100 duration-1000"
              />
            </Link>
            <Link href="#">
              <Image
                src={"/images/FeaturedIn/insta.png"}
                alt={"Youtube Logo"}
                width={200}
                height={150}
                className="saturate-0 hover:saturate-100 duration-700"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
