import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tagline from "@/components/Tagline";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import FinanceSimple from "@/components/FinanceSimple";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tagline />
        <Features />
        <Dashboard />
        <FinanceSimple />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
