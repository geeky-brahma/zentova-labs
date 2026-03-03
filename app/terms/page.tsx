"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
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
              Terms of Service
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
                <span className="text-primary/50 text-sm font-mono">01</span> Acceptance of Terms
              </h2>
              <p className="text-lg">
                By accessing or using zentovalabs.com or our services, you agree to these Terms of Service. If you do
                not agree, do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">02</span> Description of Services
              </h2>
              <p>
                We provide AI-powered document intelligence, automation tools, and consulting services. Services may
                include document analysis, contract summaries, extraction systems, and workflow automation tools. All
                outputs are informational in nature.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">03</span> No Legal or Financial Advice
              </h2>
              <div className="bg-rose-500/5 p-6 rounded-2xl border border-rose-500/20">
                <p className="text-slate-300 italic">
                  Our services do not constitute legal, financial, tax, investment, or regulatory advice. Clients are
                  solely responsible for reviewing AI-generated outputs and obtaining professional advice when
                  necessary.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">04</span> Client Responsibilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Legal rights to upload documents",
                  "Content does not violate laws",
                  "Responsible for final decisions",
                  "No unlawful activities",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">05</span> Intellectual Property
              </h2>
              <p>
                All software, systems, and proprietary tools remain the intellectual property of Zentova Labs. Clients
                retain ownership of their uploaded documents and data.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="text-primary/50 text-sm font-mono">06</span> Payment Terms
                </h2>
                <p className="text-sm">
                  Fees are defined in separate agreements. Payments are non-refundable unless explicitly stated. Late
                  payments may result in suspension of services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                  <span className="text-primary/50 text-sm font-mono">07</span> Limitation of Liability
                </h2>
                <p className="text-sm">
                  To the maximum extent permitted by law, we are not liable for indirect damages. Total liability shall
                  not exceed fees paid in the preceding 3 months.
                </p>
              </section>
            </div>

            <section className="pt-8 border-t border-slate-800">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 text-center">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Governing Law</h2>
                <p className="text-slate-400">
                  These Terms are governed by the laws of <span className="text-slate-100 font-bold">Odisha</span>.
                  Any disputes shall be resolved in the courts of that jurisdiction.
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
