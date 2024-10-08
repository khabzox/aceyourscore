import Header from "@/components/LandingPage/NavBar";
import Footer from "@/components/LandingPage/Footer";
import { MetadataSignIn } from "@/libs/metadata";

export const metadata = MetadataSignIn;

export default function SignInLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-36">{children}</main>
      <Footer />
    </>
  );
}
