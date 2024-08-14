import Header from "@/components/LandingPage/NavBar";
import Footer from "@/components/LandingPage/Footer";
import { MetadataSignUp } from "@/libs/metadata";

export const metadata = MetadataSignUp

export default function AdminLayout({ children }) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
