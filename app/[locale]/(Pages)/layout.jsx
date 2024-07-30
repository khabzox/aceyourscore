import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/HomePage/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}