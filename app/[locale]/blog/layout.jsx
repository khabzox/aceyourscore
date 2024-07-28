import Header from "@/components/blog/HomePage/Header";
import Footer from "@/components/HomePage/Footer";


export const metadata = {
  title: 'AceYourScore | Blog',
}

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
