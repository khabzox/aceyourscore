import Footer from "@/components/LandingPage/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="max-w-[95rem] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
