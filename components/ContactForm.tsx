"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

    try {
      if (!accessKey) {
        throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY");
      }

      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been received. We'll get back to you soon.");
        setShowForm(false);
        form.reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Message could not be sent. Please contact us directly at: zentovalabs@gmail.com or +91-9337683197");
        setShowForm(false);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Message could not be sent. Please contact us directly at: zentovalabs@gmail.com or +91-9337683197");
      setShowForm(false);
    }
  };

  const handleTryAgain = () => {
    setStatus("idle");
    setShowForm(true);
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
        <h3 className="text-4xl font-bold text-slate-100">Contact Us</h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-2xl border border-slate-800"
      >
        {!showForm ? (
          <div className="text-center py-12">
            {status === "success" ? (
              <p className="text-emerald-400 text-xl font-medium">{message}</p>
            ) : (
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-red-400 text-lg font-medium">{message}</p>
                </div>
                <button
                  onClick={handleTryAgain}
                  className="button-gradient text-background-dark px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full button-gradient text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};
