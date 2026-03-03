"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import { BrainCircuit, ShieldCheck, RefreshCw, ArrowRight, Globe } from "lucide-react";

const Hero = () => {
  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("process");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const companies = [
    "TechFlow",
    "OmniNode",
    "Aura Logistics",
    "Vitalis",
    "Nexus AI",
    "Stellar Systems",
    "Quantum Labs",
    "Horizon Data",
    "Apex Ventures",
    "CloudScale",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Dissolving Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(156, 163, 175, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-8 mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Now accepting projects
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] hero-gradient-text">
          Secure, Scalable Digital Systems Built for <span className="text-slate-400">Serious Businesses.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
          We design and engineer AI powered systems that scale with growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/services"
            className="button-gradient text-[#0F1115] px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform"
          >
            View Solutions
          </Link>
          <button
            onClick={scrollToProcess}
            className="glass px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-800 transition-colors"
          >
            Our Process
          </button>
        </div>
      </motion.div>

      {/* Trust Bar / Company Marquee */}
      <div className="relative z-10 w-full pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-600 text-xs font-bold uppercase tracking-[0.3em] mb-8">
            Trusted by industry leaders
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee flex whitespace-nowrap items-center gap-16">
              {[...companies, ...companies].map((company, idx) => (
                <span
                  key={idx}
                  className="text-slate-500 text-xl md:text-2xl font-black opacity-30 hover:opacity-100 transition-opacity cursor-default select-none uppercase tracking-tighter"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-slate-300" />,
      title: "Custom Web Systems",
      desc: "Tailored enterprise-grade web solutions built on modern stacks for speed and reliability.",
    },
    {
      icon: <BrainCircuit className="text-slate-300" />,
      title: "AI Workflow Automation",
      desc: "Optimizing complex business operations with intelligent, autonomous AI agents and LLM integrations.",
    },
    {
      icon: <ShieldCheck className="text-slate-300" />,
      title: "Secure Backend Architecture",
      desc: "Hardened infrastructure designed for extreme data integrity, high availability, and massive scale.",
    },
    {
      icon: <RefreshCw className="text-slate-300" />,
      title: "Ongoing Support & DevOps",
      desc: "Continuous scaling, reliable maintenance, and automated deployment pipelines for zero-downtime.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">Engineered for Performance</h3>
        </div>
        <p className="text-slate-400 max-w-md text-lg">
          Comprehensive technical solutions designed to handle enterprise-level complexity and traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-primary/40 transition-all"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-400/10">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-100">{service.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const cases = [
    {
      tag: "SMB / WEB",
      title: "Landing Page for small and medium size businesses",
      image: "/landing_page.png",
    },
    {
      tag: "STARTUP / AI",
      title: "Workflow automations for fast growing startups",
      image: "/workflow_automation.png",
    },
    {
      tag: "ENTERPRISE / FINTECH",
      title: "Dashboarding and Management systems for Businesses",
      image: "/dashboarding.png",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Recent Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">Selected Case Studies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-slate-800 relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    {item.tag}
                  </span>
                  <h4 className="text-2xl font-bold mt-1 text-slate-100">{item.title}</h4>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep dive into your business requirements, existing systems, and long-term scaling goals.",
    },
    {
      num: "02",
      title: "Architecture",
      desc: "Designing the skeletal structure with a focus on modularity, security, and high-performance throughput.",
    },
    {
      num: "03",
      title: "Engineering",
      desc: "Agile development cycles with rigorous code quality standards and continuous testing protocols.",
    },
    {
      num: "04",
      title: "Security Audit",
      desc: "Comprehensive penetration testing and infrastructure hardening before any production rollout.",
    },
    {
      num: "05",
      title: "Deployment",
      desc: "Automated provisioning and global rollout with 24/7 monitoring and performance optimization.",
    },
  ];

  return (
    <section id="process" className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Methodology</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">How We Build</h3>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative group">
              <div className="text-8xl font-black text-slate-800/30 absolute -top-8 -left-4 select-none transition-colors duration-500 group-hover:text-primary/20">
                {step.num}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pt-8"
              >
                <h4 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-slate-800 group-hover:bg-primary/30 transition-colors duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(1);

  const faqs = [
    {
      q: "How secure is our data?",
      a: "We use encrypted transmission (HTTPS), secure cloud infrastructure, access controls, and role-based permissions. Client documents are processed securely and are not used to train public AI models.",
    },
    {
      q: "Do you use our documents to train AI models?",
      a: "No. Client documents are processed strictly for service delivery and are not used to train public AI systems.",
    },
    {
      q: "Are AI-generated contract insights legally binding?",
      a: "No. Our AI outputs are informational tools designed to assist your workflow. Final review and legal decisions must be made by qualified professionals.",
    },
    {
      q: "Can your system integrate with our existing CRM or storage systems?",
      a: "Yes. We offer integration with common cloud storage platforms and CRM systems. Custom integrations are available based on your requirements.",
    },
    {
      q: "How long does implementation take?",
      a: "Typical implementation ranges from 2–6 weeks depending on project scope and integration requirements.",
    },
    {
      q: "What results can we expect?",
      a: "Clients typically experience reduced document review time, improved operational efficiency, and faster deal processing.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Support</h2>
          <h3 className="text-4xl font-bold text-slate-100 mb-6">Common Questions</h3>
          <p className="text-slate-400">Can't find what you're looking for? Reach out to our technical team directly.</p>
          <button className="mt-8 flex items-center gap-2 text-slate-300 font-bold hover:gap-4 transition-all group">
            Contact Specialist
            {/* <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-800 rounded-xl p-6 bg-slate-900/50 cursor-pointer"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-slate-100">{faq.q}</h4>
                {/* {openIdx === idx ? <Minus className="text-slate-400" /> : <Plus className="text-slate-400" />} */}
              </div>
              {openIdx === idx && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-4 text-slate-400 leading-relaxed"
                >
                  {faq.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero, Services, Portfolio, Process, FAQ };
