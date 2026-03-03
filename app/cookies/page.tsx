"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CookiesPolicy() {
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
              Cookies Policy
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
                <span className="text-primary/50 text-sm font-mono">01</span> What Are Cookies?
              </h2>
              <p className="text-lg">
                Cookies are small data files stored on your device to improve website functionality and user
                experience.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">02</span> Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Essential", desc: "Required for core website functionality." },
                  { title: "Analytics", desc: "Used to analyze traffic and improve performance." },
                  { title: "Performance", desc: "Help us understand how users interact with our website." },
                  { title: "Marketing", desc: "Used for advertising or remarketing purposes." },
                ].map((cookie, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">{cookie.title} Cookies</h3>
                    <p className="text-sm text-slate-400">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">03</span> Managing Cookies
              </h2>
              <p>
                You may disable cookies through your browser settings. Disabling certain cookies may impact website
                functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
                <span className="text-primary/50 text-sm font-mono">04</span> Third-Party Cookies
              </h2>
              <p>Third-party services we use may place cookies subject to their own policies.</p>
            </section>

            <section className="pt-8 border-t border-slate-800">
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">Privacy Concerns?</h2>
                <p className="mb-6">If you have questions about our use of cookies, please contact us.</p>
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
