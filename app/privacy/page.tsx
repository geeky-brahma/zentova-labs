"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />
      <main className="pt-32 pb-24 px-4 min-h-screen grid-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black hero-gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 font-medium tracking-widest uppercase text-sm">
              Effective Date: March 3, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-3xl border border-slate-800 space-y-12 text-slate-400 leading-relaxed"
          >
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">01</span> Introduction
              </h2>
              <p className="text-lg">
                Welcome to Zentova Labs ("Company", "we", "our", or "us"). We provide AI-powered document
                intelligence and automation services to businesses. This Privacy Policy explains how we collect, use,
                process, and protect information when you use our website and services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">02</span> Information We Collect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                  <h3 className="text-lg font-semibold text-slate-200 mb-4">2.1 Information You Provide</h3>
                  <ul className="space-y-2">
                    {[
                      "Name",
                      "Email address",
                      "Company name",
                      "Phone number",
                      "Uploaded documents",
                      "Form messages",
                      "Account details",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                  <h3 className="text-lg font-semibold text-slate-200 mb-4">2.2 Automatically Collected</h3>
                  <ul className="space-y-2">
                    {["IP address", "Browser type", "Device information", "Pages visited", "Usage analytics", "Cookie data"].map(
                      (item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 rounded-full bg-primary/40" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">03</span> How We Use Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Provide and improve our services",
                  "Deliver AI document analysis",
                  "Respond to inquiries",
                  "Maintain system security",
                  "Prevent fraud or abuse",
                  "Comply with legal obligations",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-xl border border-slate-800/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">04</span> Document & Data Handling
              </h2>
              <div className="space-y-3">
                {[
                  "Client documents are processed solely for the purpose of delivering contracted services.",
                  "We do not use client-uploaded documents to train public AI models.",
                  "All documents remain the property of the client.",
                  "We retain documents only as long as necessary for service delivery or legal compliance.",
                ].map((text, i) => (
                  <p key={i} className="pl-6 border-l-2 border-primary/20 italic">
                    {text}
                  </p>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="text-primary/50 text-sm font-mono">05</span> Data Security
                </h2>
                <p className="text-sm">
                  We implement industry-standard safeguards including: Encrypted data transmission (HTTPS), Secure
                  cloud infrastructure, Access controls, and Restricted internal access.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="text-primary/50 text-sm font-mono">06</span> Third-Party Services
                </h2>
                <p className="text-sm">
                  We may use third-party providers including cloud hosting, analytics tools, and AI service providers.
                  These providers operate under their own privacy policies.
                </p>
              </section>
            </div>

            <section className="pt-8 border-t border-slate-800">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Contact & Rights</h2>
                <p className="mb-6">
                  Depending on your jurisdiction, you may have the right to access, correct, or delete your data.
                </p>
                <a href="mailto:zentovalabs@gmail.com" className="text-primary font-bold hover:underline">
                  zentovalabs@gmail.com
                </a>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
