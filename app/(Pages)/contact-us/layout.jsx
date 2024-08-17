import CTA from "@/components/LandingPage/CTA";
import FooterPage from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";
import { MetadataContactUS } from "@/libs/metadata";

export const metadata = MetadataContactUS;

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-32">
        {children}
        <div className="max-w-[95rem] mx-auto">
          <CTA />
        </div>
      </main>
      <FooterPage />
    </>
  );
}
