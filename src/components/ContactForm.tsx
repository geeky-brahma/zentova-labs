import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
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
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
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
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
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
            className="w-full button-gradient text-[#0F1115] font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-center font-medium">{message}</p>
          )}
          {status === "error" && (
            <p className="text-rose-400 text-center font-medium">{message}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};
