"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({
    to,
    children,
    isAnchor = false,
    onClick,
  }: {
    to: string;
    children: React.ReactNode;
    isAnchor?: boolean;
    onClick?: () => void;
  }) => {
    if (isAnchor) {
      return (
        <a
          href={isHome ? to : `/${to}`}
          onClick={onClick}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={to} onClick={onClick} className="text-sm font-medium hover:text-primary transition-colors">
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass rounded-full px-6 py-3 flex items-center gap-8 w-full justify-between border border-slate-400/20"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="text-slate-300">
              <img src="/logo.png" alt="Zentova Labs Logo" className="h-8 w-auto" referrerPolicy="no-referrer" />
            </div>
            <span className="font-bold tracking-tight text-lg">Zentova Labs</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <a href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="/#process" className="text-sm font-medium hover:text-primary transition-colors">Process</a>
            <a href="/#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex button-gradient text-background-dark px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
            Get Started
          </a>
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass rounded-2xl border border-slate-400/20 p-5 flex flex-col gap-4"
          >
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink to="#portfolio" isAnchor onClick={() => setIsMobileMenuOpen(false)}>Portfolio</NavLink>
            <NavLink to="#process" isAnchor onClick={() => setIsMobileMenuOpen(false)}>Process</NavLink>
            <NavLink to="#faq" isAnchor onClick={() => setIsMobileMenuOpen(false)}>FAQ</NavLink>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="button-gradient text-background-dark px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity text-center"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
