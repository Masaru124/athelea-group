"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const models = [
    {
      title: "Lead Capture & CRM Sync",
      desc: "Auto-routes new leads from forms and ads into your CRM, then instantly notifies the right sales rep.",
      tier: "Starter tier",
      price: "from $450",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6M22 11h-6" />
        </svg>
      )
    },
    {
      title: "Invoice & Payment Automation",
      desc: "Generates, sends, and reconciles invoices automatically across your accounting tools.",
      tier: "Growth tier",
      price: "from $650",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 2v4M16 2v4" />
        </svg>
      )
    },
    {
      title: "Customer Support Triage",
      desc: "Auto-tags, routes, and drafts responses to incoming support tickets using AI.",
      tier: "Growth tier",
      price: "from $600",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      title: "Social Media & Content Scheduler",
      desc: "Pulls content from a sheet or Notion database and auto-publishes it across platforms.",
      tier: "Starter tier",
      price: "from $400",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      )
    },
    {
      title: "E-commerce Order Sync",
      desc: "Syncs orders, inventory, and shipping across Shopify, WooCommerce, and fulfillment tools.",
      tier: "Growth tier",
      price: "from $700",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      title: "Data Reporting & Dashboards",
      desc: "Pulls data from multiple sources into a single live report, emailed to your team weekly.",
      tier: "Starter tier",
      price: "from $500",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18.7 8 14 12.7l-3-3L7 13.7" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      num: "I",
      title: "Discovery call",
      desc: "We learn your tools, your bottlenecks, and what success looks like for your team."
    },
    {
      num: "II",
      title: "Workflow design",
      desc: "We map the automation end to end, or match you to the closest existing model in our library."
    },
    {
      num: "III",
      title: "Build & test",
      desc: "Our team builds it directly in n8n and tests it against your real data before it ever touches production."
    },
    {
      num: "IV",
      title: "Launch & train",
      desc: "We deploy the workflow live and walk your team through exactly how it works."
    },
    {
      num: "V",
      title: "Ongoing support",
      desc: "We monitor, maintain, and optimize the workflow as your business and your stack keep changing."
    }
  ];

  const services = [
    {
      title: "Custom Workflow Development",
      desc: "Bespoke automations built around your exact stack, edge cases, and approval chains — nothing forced into a template."
    },
    {
      title: "Automation Audits",
      desc: "We review your current processes end to end and hand you a prioritized list of what's worth automating first."
    },
    {
      title: "Managed Automation",
      desc: "Ongoing monitoring, updates, and optimization on a retainer, so workflows keep working as your tools change."
    },
    {
      title: "Team Training",
      desc: "We teach your internal team to read, manage, and extend the workflows we build — no dependency required."
    }
  ];

  const differentiators = [
    {
      num: "Ownership",
      title: "Open-source foundation",
      desc: "n8n means no vendor lock-in. You own your workflows outright, not a rented license to them."
    },
    {
      num: "Reach",
      title: "Integrates with 400+ tools",
      desc: "Built to work with the software you already run, not a closed ecosystem you have to migrate into."
    },
    {
      num: "Expertise",
      title: "Automation specialists",
      desc: "Not a generic agency picking up automation as a side service — we live in n8n every day."
    },
    {
      num: "Pricing",
      title: "Transparent pricing",
      desc: "No hidden per-task fees that creep up as your volume grows, unlike Zapier-style billing."
    }
  ];

  const caseStudies = [
    {
      stat: "80%",
      result: "Reduction in manual order processing time within three weeks of going live.",
      meta: "E-commerce · Order Sync model"
    },
    {
      stat: "12 hrs",
      result: "Saved per week on lead follow-up after switching to automated CRM routing.",
      meta: "Real estate · Lead Capture model"
    },
    {
      stat: "3x",
      result: "Faster support ticket response time after deploying AI-assisted triage.",
      meta: "SaaS agency · Custom build"
    }
  ];

  const testimonials = [
    {
      quote: "We went from three people copy-pasting orders all morning to a workflow that just runs. It paid for itself in the first month.",
      initials: "MK",
      name: "Maya Kapoor",
      role: "Ops Lead, Bloomline Retail"
    },
    {
      quote: "Athelea didn't just hand us a template — they actually sat with our process and built around how we work, not how a generic tool wanted us to.",
      initials: "DR",
      name: "Daniel Reyes",
      role: "Founder, Northbound Realty"
    },
    {
      quote: "Support tickets used to sit for hours. Now triage happens instantly and our team only sees what actually needs a human.",
      initials: "SC",
      name: "Sara Chen",
      role: "Head of CX, Forma Agency"
    }
  ];

  const faqs = [
    {
      q: "Do I need technical knowledge to use these?",
      a: "No. We handle the n8n setup, logic, and integrations end to end. Your team interacts with the result — a synced CRM, an automated report — not the workflow builder itself."
    },
    {
      q: "What if I already use Zapier or Make?",
      a: "We can migrate existing automations into n8n, usually at a lower ongoing cost since n8n doesn't charge per task the way those platforms do. We'll review what you have during the discovery call."
    },
    {
      q: "Can you build something not in your catalog?",
      a: "Yes — that's exactly what our Custom Workflow Development service is for. The catalog covers common cases; most of our work is custom builds around a specific business."
    },
    {
      q: "What happens if a workflow breaks?",
      a: "Growth and Enterprise plans include monitoring, so we're usually aware before you are. Starter customers can reach the community support channel or upgrade for direct support hours."
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes, through our Managed Automation service — we monitor, update, and optimize workflows on a retainer as your tools and processes change over time."
    }
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold selection:text-ivory">
      
      {/* 1. Top Bar */}
      <div className="bg-navy text-ivory text-center py-2.5 px-4 font-mono text-[11px] tracking-[0.14em] uppercase border-b border-navy-deep">
        Trusted by businesses automating with n8n since{" "}
        <strong className="text-gold-light font-semibold">2022</strong>
      </div>

      {/* 2. Navigation */}
      <nav className="sticky top-0 z-50 bg-ivory-soft/95 backdrop-blur-md border-b border-rule transition-all duration-300">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center font-serif text-2xl font-semibold tracking-wide text-navy">
            <span className="mr-2.5 flex items-center" aria-hidden="true">
              <svg viewBox="0 0 22 22" className="w-5 h-5" fill="none">
                <circle cx="5" cy="5" r="3.2" fill="#B8945F" />
                <circle cx="17" cy="11" r="3.2" stroke="#8C8579" strokeWidth="1.3" />
                <circle cx="5" cy="17" r="3.2" stroke="#8C8579" strokeWidth="1.3" />
                <path d="M8 6L14 10" stroke="#D9D2C2" strokeWidth="1.3" />
                <path d="M8 16L14 12" stroke="#D9D2C2" strokeWidth="1.3" />
              </svg>
            </span>
            Athelea Group
          </a>

          {/* Nav links - Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.18em] uppercase font-semibold text-navy">
            <a href="#models" className="hover:text-gold transition-colors">Products</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#how" className="hover:text-gold transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gold transition-colors">Resources</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block border border-navy px-6 py-2.5 text-[11px] tracking-[0.18em] uppercase font-semibold text-navy hover:bg-navy hover:text-ivory transition-colors duration-300"
            >
              Get Started
            </a>
            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-navy p-1 text-2xl focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-rule bg-ivory-soft px-6 py-6 flex flex-col gap-5 text-xs tracking-wider uppercase font-semibold text-navy animate-fadeIn">
            <a href="#models" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">Products</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">Services</a>
            <a href="#how" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">How It Works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">Pricing</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">Resources</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors py-1">Contact</a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center border border-navy py-3 hover:bg-navy hover:text-ivory transition-colors"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* 3. Hero Section */}
      <header className="relative bg-ivory overflow-hidden py-24 md:py-32 border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center flex flex-col items-center">
          <span className="eyebrow-divider tracked text-gold mb-6">Business Automation, Engineered</span>
          <h1 className="font-serif text-4xl md:text-[56px] text-navy font-semibold leading-[1.15] max-w-[860px] mb-8">
            Pre-built n8n automations that run your business{" "}
            <em className="text-gold italic font-normal">while you focus on growing it</em>
          </h1>
          <p className="text-[15px] md:text-[17px] text-warm-gray max-w-[620px] mb-10 leading-relaxed">
            Athelea Group designs, builds, and maintains custom n8n workflows for businesses that want automation without hiring a dev team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#models"
              className="bg-navy text-ivory border border-navy px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-navy-deep transition-colors duration-300"
            >
              Explore Our Automation Models
            </a>
            <a
              href="#contact"
              className="border border-rule text-navy px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold hover:border-navy transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          <span className="font-mono text-[10px] tracking-widest text-warm-gray uppercase mb-16">
            No-code on your end · We own the n8n complexity
          </span>

          {/* n8n Animated Canvas Mockup */}
          <div
            className="w-full max-w-[960px] aspect-[1100/340] border border-rule rounded-sm bg-ivory-soft overflow-hidden shadow-sm flex flex-col justify-center items-center relative"
            role="img"
            aria-label="Animated diagram showing how custom n8n workflows route new leads automatically to CRM and notifications."
          >
            <svg viewBox="0 0 1100 340" className="w-full h-full text-warm-gray">
              <style>{`
                @keyframes dashmove {
                  to { stroke-dashoffset: -200; }
                }
                .flow-line-anim {
                  stroke: var(--rule);
                  stroke-width: 1.5;
                  fill: none;
                  stroke-dasharray: 4 5;
                  animation: dashmove 12s linear infinite;
                }
                @keyframes pulseTravel {
                  0% { offset-distance: 0%; opacity: 0; }
                  8% { opacity: 1; }
                  45% { opacity: 1; }
                  50% { offset-distance: 100%; opacity: 0; }
                  100% { offset-distance: 100%; opacity: 0; }
                }
                .pulse-1 {
                  animation: pulseTravel 3.6s ease-in-out infinite;
                }
                .pulse-2 {
                  animation: pulseTravel 3.6s ease-in-out infinite;
                  animation-delay: 1.8s;
                }
                .pulse-3 {
                  animation: pulseTravel 3.6s ease-in-out infinite;
                  animation-delay: 2.4s;
                }
              `}</style>
              
              {/* Lines */}
              <path id="flowPath1" className="flow-line-anim" d="M 160 90 C 280 90, 280 170, 400 170" />
              <path id="flowPath2" className="flow-line-anim" d="M 560 170 C 680 170, 680 90, 800 90" />
              <path id="flowPath3" className="flow-line-anim" d="M 560 170 C 680 170, 680 250, 800 250" />

              {/* Glowing Pulses */}
              <circle className="pulse-1 fill-gold drop-shadow-[0_0_6px_rgba(184,148,95,0.8)]" r="4.5" style={{ offsetPath: "path('M 160 90 C 280 90, 280 170, 400 170')" }} />
              <circle className="pulse-2 fill-gold drop-shadow-[0_0_6px_rgba(184,148,95,0.8)]" r="4.5" style={{ offsetPath: "path('M 560 170 C 680 170, 680 90, 800 90')" }} />
              <circle className="pulse-3 fill-gold drop-shadow-[0_0_6px_rgba(184,148,95,0.8)]" r="4.5" style={{ offsetPath: "path('M 560 170 C 680 170, 680 250, 800 250')" }} />

              {/* Node 1: Form Input */}
              <rect x="60" y="64" width="100" height="52" rx="4" className="fill-navy stroke-rule" strokeWidth="1.2" />
              <circle cx="76" cy="76" r="3.5" className="fill-gold" />
              <text x="96" y="94" className="font-mono text-[10.5px] fill-ivory uppercase tracking-wider font-semibold">Lead</text>

              {/* Node 2: Router */}
              <rect x="400" y="144" width="160" height="52" rx="4" className="fill-navy-deep stroke-gold" strokeWidth="1.2" />
              <text x="424" y="174" className="font-mono text-[10.5px] fill-gold-light uppercase tracking-wider font-semibold">Router &amp; Enrich</text>

              {/* Node 3: CRM */}
              <rect x="800" y="64" width="120" height="52" rx="4" className="fill-navy stroke-rule" strokeWidth="1.2" />
              <text x="824" y="94" className="font-mono text-[10.5px] fill-ivory uppercase tracking-wider font-semibold">CRM Sync</text>

              {/* Node 4: Notify Rep */}
              <rect x="800" y="224" width="160" height="52" rx="4" className="fill-navy stroke-rule" strokeWidth="1.2" />
              <text x="824" y="254" className="font-mono text-[10.5px] fill-ivory uppercase tracking-wider font-semibold">Notify Sales Rep</text>
            </svg>
          </div>
        </div>
      </header>

      {/* 4. Trust Strip */}
      <div className="bg-ivory border-b border-rule py-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left flex-wrap">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-2xl font-semibold text-navy">300+</span>
            <span className="font-mono text-[11px] tracking-wider uppercase text-warm-gray">workflows deployed</span>
          </div>
          <div className="hidden md:block w-[1px] h-6 bg-rule"></div>
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-xl text-navy">Industries</span>
            <span className="font-mono text-[11px] tracking-wider uppercase text-warm-gray">e-commerce, real estate, agencies, finance</span>
          </div>
          <div className="hidden md:block w-[1px] h-6 bg-rule"></div>
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-2xl font-semibold text-navy">400+</span>
            <span className="font-mono text-[11px] tracking-wider uppercase text-warm-gray">tool integrations via n8n</span>
          </div>
        </div>
      </div>

      {/* 5. Problem/Pain Section */}
      <section className="py-24 max-w-[1080px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">The Problem</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            Your team is doing work software should be doing
          </h2>
          <p className="text-sm md:text-[15px] text-warm-gray mt-4 max-w-[620px] mx-auto">
            Every manual step is a place where leads go cold, errors creep in, and your best people spend time on tasks that don't need a human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-rule">
          <div className="p-8 md:p-10 border-r border-b border-rule flex gap-6 items-start">
            <div className="feature-mark flex-shrink-0">I</div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Manual Data Entry</h3>
              <p className="text-[13.5px] text-warm-gray leading-relaxed">
                Manually copying and pasting customer data, orders, and tickets between tools again and again, every single day.
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10 border-r border-b border-rule flex gap-6 items-start">
            <div className="feature-mark flex-shrink-0">II</div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Cold Leads</h3>
              <p className="text-[13.5px] text-warm-gray leading-relaxed">
                Missed opportunities and slow reply times because lead capture and subsequent follow-ups aren't automatic.
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10 border-r border-b border-rule flex gap-6 items-start">
            <div className="feature-mark flex-shrink-0">III</div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Repetitive Administration</h3>
              <p className="text-[13.5px] text-warm-gray leading-relaxed">
                Hours lost every week on billing reconciliation, report collection, and routing support tickets that never get easier.
              </p>
            </div>
          </div>
          <div className="p-8 md:p-10 border-r border-b border-rule flex gap-6 items-start">
            <div className="feature-mark flex-shrink-0">IV</div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-2">Resource Strains</h3>
              <p className="text-[13.5px] text-warm-gray leading-relaxed">
                No budget or justification to hire a full-time, in-house automation engineer to build, maintain, and monitor your tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Solution Overview */}
      <section className="py-24 max-w-[1080px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">The Solution</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            Meet our Automation Models
          </h2>
          <p className="text-sm md:text-[15px] text-warm-gray mt-4 max-w-[620px] mx-auto">
            Ready-to-deploy n8n workflows, customized to your stack — or built from scratch by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-rule p-10 bg-navy text-ivory flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-gold-light">Product Path</span>
              <h3 className="font-serif text-2xl font-semibold mt-4 mb-4 text-ivory">Browse the library</h3>
              <p className="text-[14px] text-ivory/80 leading-relaxed mb-8 max-w-[36ch]">
                Pre-built automation models for the most common bottlenecks. Pick one, tell us your tools, and we configure it for your stack.
              </p>
            </div>
            <a
              href="#models"
              className="inline-block border border-gold text-gold font-mono text-[11px] tracking-wider uppercase py-3 px-6 text-center hover:bg-gold hover:text-navy transition-colors duration-300 font-semibold"
            >
              View Automation Models
            </a>
          </div>

          <div className="border border-rule p-10 bg-ivory-soft flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-wider uppercase text-gold">Service Path</span>
              <h3 className="font-serif text-2xl font-semibold mt-4 mb-4 text-navy">Build something custom</h3>
              <p className="text-[14px] text-warm-gray leading-relaxed mb-8 max-w-[36ch]">
                Nothing in the catalog fits? Our team designs and builds a bespoke workflow around exactly how your business runs.
              </p>
            </div>
            <a
              href="#services"
              className="inline-block border border-navy text-navy font-mono text-[11px] tracking-wider uppercase py-3 px-6 text-center hover:bg-navy hover:text-ivory transition-colors duration-300 font-semibold"
            >
              See Custom Services
            </a>
          </div>
        </div>
      </section>

      {/* 7. Product Catalog / Automation Models Grid */}
      <section id="models" className="py-24 max-w-[1080px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">Automation Models</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            Six workflows. Every one of them solves a bottleneck.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <div
              key={i}
              className="border border-rule p-8 bg-ivory-soft hover:border-gold hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center text-gold mb-6 bg-ivory">
                  {model.icon}
                </div>
                <h4 className="font-serif text-lg font-semibold text-navy mb-3">{model.title}</h4>
                <p className="text-[13px] text-warm-gray leading-relaxed mb-6">{model.desc}</p>
              </div>
              <div className="pt-4 border-t border-rule/50 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                <span className="text-warm-gray">{model.tier}</span>
                <span className="text-navy font-semibold">{model.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. How It Works (Process Section) */}
      <section id="how" className="bg-navy text-ivory py-24 border-b border-navy-deep">
        <div className="max-w-[880px] mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <span className="eyebrow-divider tracked mb-4 text-gold-light">The Process</span>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory font-semibold">
              From first call to a workflow running in production
            </h2>
            <p className="text-sm text-gold-light/80 mt-4 max-w-[560px] mx-auto font-mono tracking-wide uppercase">
              The same five steps whether you buy a model or build custom.
            </p>
          </div>

          <div className="relative pl-8 md:pl-16 border-l border-rule/20 flex flex-col gap-16">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[45px] md:-left-[77px] top-1 w-8 h-8 md:w-10 md:h-10 border border-gold bg-navy rounded-full flex items-center justify-center font-serif text-[13px] italic text-gold-light group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-ivory mb-2">{step.title}</h4>
                  <p className="text-[14px] text-gold-light/75 leading-relaxed max-w-[600px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Services Section */}
      <section id="services" className="py-24 max-w-[1080px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">Services</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            Beyond templates — full automation partnership
          </h2>
          <p className="text-sm md:text-[15px] text-warm-gray mt-4 max-w-[620px] mx-auto">
            For businesses that need more than a library to choose from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-rule">
          {services.map((service, i) => (
            <div key={i} className="p-8 md:p-10 border-r border-b border-rule bg-ivory-soft hover:bg-ivory transition-colors duration-300">
              <h4 className="font-serif text-lg font-semibold text-navy mb-3 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block"></span>
                {service.title}
              </h4>
              <p className="text-[13.5px] text-warm-gray leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Why n8n / Why Athelea (Differentiator Section) */}
      <section className="bg-ivory-soft py-24 border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow-divider tracked mb-4">Why Athelea</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
              Why businesses choose Athelea Group
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((diff, i) => (
              <div key={i} className="border-b border-rule md:border-b-0 pb-6 md:pb-0">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gold block mb-3 font-semibold">
                  {diff.num}
                </span>
                <h4 className="font-serif text-lg font-semibold text-navy mb-3 leading-snug">
                  {diff.title}
                </h4>
                <p className="text-[13px] text-warm-gray leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Case Studies / Results */}
      <section className="bg-navy text-ivory py-24 border-b border-navy-deep">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow-divider tracked mb-4 text-gold-light">Results</span>
            <h2 className="font-serif text-3xl md:text-4xl text-ivory font-semibold">
              What this looks like in production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="border border-gold/30 p-8 bg-navy-deep flex flex-col justify-between">
                <div>
                  <div className="font-serif text-4xl md:text-5xl font-semibold text-gold mb-4 leading-none">
                    {cs.stat}
                  </div>
                  <p className="text-[14px] text-ivory/80 leading-relaxed mb-6">{cs.result}</p>
                </div>
                <div className="pt-4 border-t border-gold/20 font-mono text-[10px] tracking-wider uppercase text-gold-light/65">
                  {cs.meta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-24 max-w-[1080px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            From the teams running on it
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <div key={i} className="border border-rule p-8 bg-ivory-soft flex flex-col justify-between">
              <blockquote className="font-serif text-[16px] italic text-navy leading-relaxed mb-8">
                &ldquo;{testi.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-4 border-t border-rule/50">
                <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center font-mono text-xs font-semibold text-gold bg-ivory">
                  {testi.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-navy">{testi.name}</div>
                  <div className="text-[11px] text-warm-gray font-mono uppercase tracking-wider">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Pricing Section */}
      <section id="pricing" className="py-24 border-b border-rule">
        <div className="max-w-[1080px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow-divider tracked mb-4">Pricing</span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
              Pick a tier, or talk to us about something custom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
            {/* Starter Plan */}
            <div className="border border-rule p-8 md:p-10 bg-ivory-soft flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-gold font-semibold">Starter</span>
                <div className="font-serif text-4xl font-semibold text-navy mt-4 mb-2">
                  $0<span className="font-sans text-[13px] text-warm-gray font-normal"> /month</span>
                </div>
                <p className="text-[13px] text-warm-gray mb-8">For teams ready to self-serve their first automation.</p>
                <ul className="flex flex-col gap-4 mb-8 text-[13px] text-warm-gray border-t border-rule/50 pt-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Access to template library
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Self-serve setup guides
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Community support
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center border border-navy text-navy font-mono text-[10px] tracking-wider uppercase py-3.5 hover:bg-navy hover:text-ivory transition-colors font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Growth Plan (Featured) */}
            <div className="border border-gold p-8 md:p-10 bg-navy text-ivory flex flex-col justify-between relative transform md:-translate-y-4 shadow-md">
              <span className="absolute -top-3.5 right-8 bg-gold text-navy font-mono text-[9px] tracking-wider uppercase py-1 px-3 font-semibold rounded-sm">
                Most popular
              </span>
              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-gold-light font-semibold">Growth</span>
                <div className="font-serif text-4xl font-semibold text-ivory mt-4 mb-2">
                  $890<span className="font-sans text-[13px] text-gold-light font-normal"> /month</span>
                </div>
                <p className="text-[13px] text-ivory/80 mb-8">Templates plus guided implementation and live support.</p>
                <ul className="flex flex-col gap-4 mb-8 text-[13px] text-ivory/90 border-t border-gold/30 pt-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Everything in Starter
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Guided implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Monthly support hours
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Priority response time
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center bg-gold text-navy font-mono text-[10px] tracking-wider uppercase py-3.5 hover:bg-gold-light transition-colors font-semibold"
              >
                Get Started
              </a>
            </div>

            {/* Custom/Enterprise Plan */}
            <div className="border border-rule p-8 md:p-10 bg-ivory-soft flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-gold font-semibold">Enterprise</span>
                <div className="font-serif text-4xl font-semibold text-navy mt-4 mb-2">
                  Custom
                </div>
                <p className="text-[13px] text-warm-gray mb-8">Full custom builds with dedicated support and SLA.</p>
                <ul className="flex flex-col gap-4 mb-8 text-[13px] text-warm-gray border-t border-rule/50 pt-6">
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Full custom builds
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    SLA &amp; uptime guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Fully managed automation
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center border border-navy text-navy font-mono text-[10px] tracking-wider uppercase py-3.5 hover:bg-navy hover:text-ivory transition-colors font-semibold"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ Section */}
      <section id="faq" className="py-24 max-w-[760px] mx-auto px-6 md:px-8 border-b border-rule">
        <div className="text-center mb-16">
          <span className="eyebrow-divider tracked mb-4">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
            Common questions
          </h2>
        </div>

        <div className="flex flex-col border-t border-rule">
          {faqs.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div key={index} className="border-b border-rule">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 hover:text-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-[19px] font-medium text-navy">
                    {faq.q}
                  </span>
                  <span className="w-5 h-5 flex items-center justify-center relative flex-shrink-0 text-navy font-mono font-normal">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[14.5px] text-warm-gray leading-relaxed max-w-[64ch]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 15. Final CTA Section */}
      <section className="bg-navy text-ivory py-24 text-center border-b border-navy-deep relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse 50% 60% at 50% 0%, rgba(184,148,95,0.1), transparent) pointer-events-none" />
        <div className="relative z-10 max-w-[600px] mx-auto px-6">
          <span className="eyebrow-divider tracked text-gold-light mb-4 inline-flex">Get Started</span>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory font-semibold mb-6">
            Ready to put your business on autopilot?
          </h2>
          <p className="text-[15px] text-gold-light/80 mb-10 max-w-[480px] mx-auto">
            See exactly what to automate first — no commitment, just a clear plan from our team.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-navy px-10 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-gold-light hover:scale-[1.01] transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* 16. Footer */}
      <footer className="bg-navy-deep text-ivory/60 py-20 border-t border-navy-deep">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-rule/10">
            {/* Tagline */}
            <div className="lg:col-span-2">
              <div className="font-serif text-2xl font-semibold tracking-wide text-ivory mb-6 flex items-center">
                <span className="mr-2.5 flex items-center" aria-hidden="true">
                  <svg viewBox="0 0 22 22" className="w-5 h-5" fill="none">
                    <circle cx="5" cy="5" r="3.2" fill="#B8945F" />
                    <circle cx="17" cy="11" r="3.2" stroke="#8C8579" strokeWidth="1.3" />
                    <circle cx="5" cy="17" r="3.2" stroke="#8C8579" strokeWidth="1.3" />
                    <path d="M8 6L14 10" stroke="#D9D2C2" strokeWidth="1.3" />
                    <path d="M8 16L14 12" stroke="#D9D2C2" strokeWidth="1.3" />
                  </svg>
                </span>
                Athelea Group
              </div>
              <p className="text-[13.5px] leading-relaxed max-w-[280px]">
                Custom and pre-built n8n automation, designed, built, and maintained for businesses without a dev team.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h5 className="font-mono text-[10px] tracking-widest uppercase text-gold-light mb-6">Products</h5>
              <ul className="flex flex-col gap-3.5 text-[13px]">
                <li><a href="#models" className="hover:text-gold transition-colors">Lead Capture &amp; Sync</a></li>
                <li><a href="#models" className="hover:text-gold transition-colors">Invoice Automation</a></li>
                <li><a href="#models" className="hover:text-gold transition-colors">Support Triage</a></li>
                <li><a href="#models" className="hover:text-gold transition-colors">Content Scheduler</a></li>
                <li><a href="#models" className="hover:text-gold transition-colors">Order Sync</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[10px] tracking-widest uppercase text-gold-light mb-6">Services</h5>
              <ul className="flex flex-col gap-3.5 text-[13px]">
                <li><a href="#services" className="hover:text-gold transition-colors">Automation Audits</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Custom Builds</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Managed Automation</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">Team Training</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-[10px] tracking-widest uppercase text-gold-light mb-6">Company</h5>
              <ul className="flex flex-col gap-3.5 text-[13px]">
                <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono tracking-wider uppercase">
            <p>&copy; {new Date().getFullYear()} Athelea Group. All rights reserved.</p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 border border-rule/10 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19h-3v-9h3v9zM6.5 8.25c-1 0-1.75-.75-1.75-1.75s.75-1.75 1.75-1.75 1.75.75 1.75 1.75-.75 1.75-1.75 1.75zM20 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.5c.5-.85 1.6-1.5 2.5-1.5 2.2 0 4 1.8 4 4v5z" /></svg>
              </a>
              <a href="#" aria-label="X" className="w-8 h-8 border border-rule/10 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.8L5.2 22H2l8.1-9.3L1.5 2H8.3l4.7 6.2L18.9 2z" /></svg>
              </a>
              <a href="mailto:info@atheleagroup.com" aria-label="Email" className="w-8 h-8 border border-rule/10 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
