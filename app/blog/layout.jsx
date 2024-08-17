import Header from "@/components/LandingPage/NavBar";
import Footer from "@/components/LandingPage/Footer";

export const metadata = {
  title: "AceYourScore | Blog",
};

export default function Blog({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
