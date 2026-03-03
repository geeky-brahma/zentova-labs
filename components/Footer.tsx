"use client";

import Link from "next/link";
import { Share2, Globe, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-slate-100 py-20 px-4 border-t border-slate-900 overflow-hidden relative">
      <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-slate-400 opacity-5 select-none pointer-events-none">
        ZENTOVA
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Zentova Labs Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <span className="text-2xl font-bold tracking-tight">Zentova Labs</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8">
            Building the digital foundation for the next generation of global enterprises. Precision engineering for a complex world.
          </p>
          <div className="space-y-3 mb-8">
            <a href="mailto:zentovalabs@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
              <Mail size={18} />
              <span className="text-sm">zentovalabs@gmail.com</span>
            </a>
            <a href="tel:+91-9337683197" className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors">
              <Phone size={18} />
              <span className="text-sm">+91-9337683197</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Share2 size={18} className="text-slate-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Globe size={18} className="text-slate-400" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-primary font-bold text-sm uppercase mb-6">Navigation</h5>
          <ul className="flex flex-col gap-4 text-slate-400">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-primary transition-colors">
                Process
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-primary font-bold text-sm uppercase mb-6">Legal</h5>
          <ul className="flex flex-col gap-4 text-slate-400">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-sm">
        <p>© 2026 Zentova Labs. All rights reserved.</p>
        <p>Designed with 💖 by Zentova Labs.</p>
      </div>
    </footer>
  );
};
