import Footer from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="mt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
