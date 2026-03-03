import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://zentovalabs.com";

export const metadata: Metadata = {
  title: "Zentova Labs | Secure Digital Systems & Engineering",
  description: "Secure, scalable digital systems built for serious businesses. Expert engineering in web, AI, and backend systems.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Zentova Labs | Secure Digital Systems & Engineering",
    description: "Expert engineering in web, AI, and backend systems. We build secure, scalable solutions for serious businesses.",
    url: baseUrl,
    siteName: "Zentova Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zentova Labs - Secure Digital Systems",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentova Labs | Secure Digital Systems & Engineering",
    description: "Expert engineering in web, AI, and backend systems.",
    images: ["/og-image.jpg"],
    creator: "@zentovalabs",
  },
  robots: "index, follow",
  keywords: [
    "software engineering",
    "web development",
    "AI solutions",
    "backend systems",
    "digital transformation",
    "scalable systems",
  ],
  authors: [{ name: "Zentova Labs" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-dark text-slate-100">
        {children}
      </body>
    </html>
  );
}
