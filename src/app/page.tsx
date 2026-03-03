import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero, Services, Portfolio, Process, FAQ } from "@/components/HomePageSections";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Zentova Labs | Enterprise Digital Systems & Solutions",
  description: "Build secure, scalable digital systems with expert engineering in web development, AI solutions, and backend infrastructure.",
  openGraph: {
    title: "Zentova Labs | Enterprise Digital Systems & Solutions",
    description: "Expert software engineering services delivering secure, scalable solutions for modern businesses.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zentova Labs Services",
      },
    ],
  },
};

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
