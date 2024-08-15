"use client";

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ubuntu } from '@/libs/font';
import Image from 'next/image';
import { BtnOfHero } from '@/components/shared/CustmsBtns';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations('Hero');

  useEffect(() => {
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-title',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.hero-description',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-description',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.hero-image',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-image',
          start: 'top 70%',
        },
      }
    );

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-button',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="py-20 mt-16 md:mt-24">
      <div className="flex flex-col xl:flex-row items-center justify-between relative px-10 3xl:px-0">
        <div className="xl:relative z-10">
          <h1
            className={`${ubuntu.className} text-4xl sm:text-5xl md:text-8xl font-bold mb-6 md:mb-8 hero-title`}
          >
            {t('titleP1')}
            <br />
            {t('titleP2')}
            <br />
            {t('titleP3')}
          </h1>
          <p className="md:w-1/2 py-5 text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold mb-8 hero-description">
            {t('description')}
          </p>
          <BtnOfHero
            text={t('GetStartedBtn')}
            linkto="/dashboard"
            className="hero-button"
          />
        </div>
        <div className="mt-10 flex justify-center xl:absolute right-0">
          <Image
            src="/images/home/hero/hero-img.svg"
            alt="Students"
            width={500}
            height={300}
            className="w-full hero-image"
          />
          <div className="absolute inset-0 z-0 bg-transparent"></div>
        </div>
      </div>
    </section>
  );
}


// import { useTranslations } from "next-intl";

// import { ubuntu } from "@/libs/font";

// import Image from "next/image";

// import { BtnOfHero } from "@/components/shared/CustmsBtns";

// export default function Hero() {
//   const t = useTranslations("Hero");
//   return (
//     <>
//       <section className="py-20">
//         <div className="flex flex-col xl:flex-row items-center justify-between relative px-10 3xl:px-0">
//           <div className="xl:relative z-10">
//             <h1
//               className={`${ubuntu.className} text-4xl sm:text-5xl md:text-8xl font-bold mb-6 md:mb-8`}
//             >
//               {t("titleP1")}
//               <br />
//               {t("titleP2")}
//               <br />
//               {t("titleP3")}
//             </h1>
//             <p className="md:w-1/2 py-5 text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold mb-8">
//               {t("description")}
//             </p>
//             <BtnOfHero text={t("GetStartedBtn")} linkto={"/dashboard"} />
//           </div>
//           <div className="mt-10 flex justify-center xl:absolute right-0">
//             <Image
//               src="/images/home/hero/hero-img.svg"
//               alt="Students"
//               width={500}
//               height={300}
//               className="w-full"
//             />
//             <div className="absolute inset-0 z-0 bg-transparent"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
