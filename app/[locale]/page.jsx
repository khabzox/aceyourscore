import NavBar from "@/components/HomePage/NavBar";
import Hero from "@/components/HomePage/Hero";
import Exams from "@/components/HomePage/Exams";
import About from "@/components/HomePage/About";
import HowAceYourScoreWorks from "@/components/HomePage/HowAceYourScoreWorks";
import Pricing from "@/components/HomePage/Pricing";
import OurBlog from "@/components/HomePage/OurBlog";
import CTA from "@/components/HomePage/CTA";
import Footer from "@/components/HomePage/Footer";
// import 
export default function Home() {
  return (
    <>

      <NavBar />
      <Hero />
      <Exams />
      <About />
      <HowAceYourScoreWorks />
      <Pricing />
      <OurBlog />
      <CTA />
      <Footer />
    </>
  );
}
