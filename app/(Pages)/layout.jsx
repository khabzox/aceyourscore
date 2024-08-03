import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/LandingPage/Footer/footer-1";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
