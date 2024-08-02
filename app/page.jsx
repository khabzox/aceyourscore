import NavBar from "@/components/LandingPage/NavBar";
import Hero from "@/components/LandingPage/Hero";
import Exams from "@/components/LandingPage/Exams";
import About from "@/components/LandingPage/About";
import HowAceYourScoreWorks from "@/components/LandingPage/HowAceYourScoreWorks";
import OurTeachers from "@/components/LandingPage/our-teachers";
import Pricing from "@/components/LandingPage/Pricing";
import OurBlog from "@/components/LandingPage/OurBlog";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/LandingPage/Footer";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
export default function Home() {
  return (
    <>
      {/* <LanguageSwitcher/> */}
      <NavBar />
      <main>
        <Hero />
        <Exams />
        <About />
        <OurTeachers />
        <HowAceYourScoreWorks />
        <Pricing />
        {/* <OurBlog /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
