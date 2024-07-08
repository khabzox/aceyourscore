import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/HomePage/Footer";

export default function Blog({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
