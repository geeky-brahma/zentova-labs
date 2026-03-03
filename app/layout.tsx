import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentova Labs",
  description: "Secure, scalable digital systems built for serious businesses",
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
