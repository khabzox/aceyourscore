import FooterPage from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";
import { MetadataAboutUS } from "@/libs/metadata";

export const metadata = MetadataAboutUS;

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-20">{children}</main>
      <FooterPage />
    </>
  );
}
