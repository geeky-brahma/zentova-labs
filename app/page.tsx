import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero, Services, Portfolio, Process, FAQ } from "@/components/HomePageSections";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
