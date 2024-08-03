import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/LandingPage/Footer/footer-1";

export const metadata = {
  title: "AceYourScore | Blog",
};

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
