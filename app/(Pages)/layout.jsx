import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/LandingPage/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
