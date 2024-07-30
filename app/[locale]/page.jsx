import NavBar from "@/components/HomePage/NavBar";
import Hero from "@/components/HomePage/Hero";
import Exams from "@/components/HomePage/Exams";
import About from "@/components/HomePage/About";
import HowAceYourScoreWorks from "@/components/HomePage/HowAceYourScoreWorks";
import OurTeachers from "@/components/HomePage/our-teachers";
import Pricing from "@/components/HomePage/Pricing";
import OurBlog from "@/components/HomePage/OurBlog";
import CTA from "@/components/HomePage/CTA";
import Footer from "@/components/HomePage/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Exams />
        <About />
        <OurTeachers/>
        <HowAceYourScoreWorks />
        <Pricing />
        {/* <OurBlog /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
