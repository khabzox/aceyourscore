import NavBar from "@/components/LandingPage/NavBar";
import Hero from "@/components/LandingPage/Hero";
import Exams from "@/components/LandingPage/Exams";
import AboutUS from "@/components/LandingPage/AboutUS";
import HowAceYourScoreWorks from "@/components/LandingPage/HowAceYourScoreWorks";
import OurTeachers from "@/components/LandingPage/our-teachers";
import WhyAceYourScore from "@/components/LandingPage/WhyAceYourScore";
import Testimonials from "@/components/LandingPage/Testimonials";
import Pricing from "@/components/LandingPage/Pricing";
import OurBlog from "@/components/LandingPage/OurBlog";
import CTA from "@/components/LandingPage/CTA";
import ContactUs from "@/components/LandingPage/ContactUS";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
import FooterPage from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      {/* <LanguageSwitcher/> */}
      <NavBar />
      <main>
        <section className="max-w-[95rem] mx-auto">
          <Hero />
        </section>

        <section className="max-w-[95rem] mx-auto">
          <Exams />
        </section>

        <AboutUS />

        <section className="max-w-[95rem] mx-auto">
          <WhyAceYourScore />
        </section>

        <OurTeachers />

        <section className="max-w-[95rem] mx-auto">
          <HowAceYourScoreWorks />
        </section>

        <Testimonials />

        <section className="max-w-[95rem] mx-auto">
          <ContactUs />
          <CTA />
        </section>
      </main>
      <FooterPage />
      {/* <main>
        <Pricing />
         <OurBlog /> 
      </main>
      */}
    </>
  );
}
