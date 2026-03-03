"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Globe,
  BrainCircuit,
  ShieldCheck,
  RefreshCw,
  Database,
  Cloud,
  Cpu,
  Lock,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, desc, features }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass p-8 rounded-2xl border border-slate-800 hover:border-primary/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-xl bg-slate-400/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <Icon className="text-slate-300 group-hover:text-primary transition-colors" size={28} />
    </div>
    <h3 className="text-2xl font-bold text-slate-100 mb-4">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Systems",
      desc: "We build high-performance, enterprise-grade web applications tailored to your specific business needs.",
      features: [
        "React & Next.js Expertise",
        "Real-time Dashboards",
        "Complex State Management",
        "Progressive Web Apps",
      ],
    },
    {
      icon: BrainCircuit,
      title: "AI Workflow Automation",
      desc: "Leverage the power of Large Language Models and autonomous agents to streamline your operations.",
      features: [
        "LLM Integration",
        "Custom AI Agents",
        "Natural Language Processing",
        "Automated Decision Systems",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Secure Backend Architecture",
      desc: "Robust, scalable server-side solutions designed with a security-first mindset.",
      features: [
        "Microservices Architecture",
        "API Design & Security",
        "Database Optimization",
        "High Availability Systems",
      ],
    },
    {
      icon: RefreshCw,
      title: "DevOps & Cloud",
      desc: "Modern deployment pipelines and cloud infrastructure management for seamless scaling.",
      features: [
        "CI/CD Pipelines",
        "Cloud Migration",
        "Containerization (Docker/K8s)",
        "Infrastructure as Code",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Scalable data pipelines and storage solutions for modern data-driven enterprises.",
      features: [
        "ETL Pipelines",
        "Data Warehousing",
        "Real-time Processing",
        "Data Security",
      ],
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      desc: "Protecting your digital assets with advanced security measures and regular audits.",
      features: [
        "Penetration Testing",
        "Security Compliance",
        "Identity Management",
        "Threat Detection",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      <Navbar />
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black mb-6 text-slate-100"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light"
            >
              Comprehensive technical solutions designed to handle enterprise-level
              complexity and drive innovation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
