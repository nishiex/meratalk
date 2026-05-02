"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  Briefcase, Headphones, Globe2, Users2, Workflow,
  Check, ChevronDown, ChevronUp, Phone, ArrowRight,
  Gauge, BarChart3, Languages, ShieldCheck, Clock,
  Cpu, LineChart, PhoneCall, Building2, BadgeDollarSign
} from "lucide-react"

const coreCapabilities = [
  {
    icon: Workflow,
    title: "Multi-Tenant Agent Workspaces",
    description: "Spin up isolated workspaces for every client account in minutes. Keep brands, scripts, and KPIs separated while sharing one unified BPO platform."
  },
  {
    icon: PhoneCall,
    title: "Predictive & Power Dialing",
    description: "Cut idle time and triple connect rates with predictive, progressive, and preview dialers tuned for high-volume outbound campaigns and collections."
  },
  {
    icon: Languages,
    title: "Omnichannel & Multilingual Routing",
    description: "Blend voice, chat, email, and WhatsApp in one queue. Route by language, skill, or customer tier so every contact lands with the right agent first."
  },
  {
    icon: Cpu,
    title: "AI Agent Assist & Real-Time QA",
    description: "Live transcripts, next-best-action prompts, and automated scoring on 100% of calls help supervisors coach faster and lift CSAT week over week."
  },
  {
    icon: BarChart3,
    title: "Client SLA & Margin Dashboards",
    description: "Track AHT, occupancy, conversion, and revenue per seat per client in real time so operations leaders defend SLAs and protect contract margin."
  },
  {
    icon: Globe2,
    title: "Global SIP & Local Caller IDs",
    description: "Carrier-grade SIP trunks with local presence in 80+ countries lift answer rates and let agents call as a local number from any delivery hub."
  }
]

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "PCI DSS, SOC 2 & HIPAA Ready",
    description: "Independently audited controls protect cardholder, health, and customer data across every campaign, queue, and recorded interaction."
  },
  {
    icon: Clock,
    title: "24/7 Always-On Operations",
    description: "Geo-redundant data centers and 99.999% uptime keep follow-the-sun delivery centers connected through outages, peaks, and seasonal surges."
  },
  {
    icon: Users2,
    title: "Built for Remote & Hybrid Agents",
    description: "Browser-based softphone, supervisor whisper, and device-level security let agents go live from offices, home, or hybrid hubs in minutes."
  },
  {
    icon: BadgeDollarSign,
    title: "Per-Seat & Per-Minute Pricing",
    description: "Flexible commercial models match how BPOs bill clients. Scale up for new programs and right-size between contracts without long lock-ins."
  }
]

const platformPillars = [
  "One platform for inbound support, outbound sales, collections, and back-office processes across every client.",
  "Real-time wallboards, supervisor whisper, and AI-driven QA help team leads coach agents at scale every shift.",
  "Native CRM and ticketing integrations keep customer context flowing into Salesforce, Zendesk, HubSpot, and more.",
  "Carrier-grade voice, secure WebRTC, and global numbering keep delivery centers connected from day one."
]

const faqs = [
  {
    question: "How quickly can our BPO onboard new client programs and ramp hundreds of agents on the MeraTalk contact center platform?",
    answer: "A dedicated implementation pod handles workspace setup, number provisioning, IVR design, CRM integration, and agent training in parallel. Most BPOs launch a new client program within 2 to 4 weeks and ramp from 50 to 500+ agents using self-serve provisioning, role templates, and bulk user imports without involving our team for every change."
  },
  {
    question: "Does MeraTalk support multi-tenant operations so we can host many client brands on a single, secure outsourcing platform?",
    answer: "Yes. Every client account runs in its own isolated workspace with separate IVRs, scripts, recordings, dashboards, user roles, and data residency settings. Branding, caller IDs, and SLAs stay client-specific, while your operations leaders get a global view across all programs to balance staffing, monitor margins, and enforce shared security policies."
  },
  {
    question: "How does MeraTalk help us hit aggressive client SLAs around AHT, FCR, CSAT, and abandonment without overstaffing every queue?",
    answer: "Skills-based routing, predictive dialing, and real-time forecasting align live demand with available agents across sites. AI agent assist surfaces answers and disposition codes so AHT drops without rushing customers. Live wallboards and threshold-based alerts flag SLA risk early, helping workforce managers move agents between queues before penalties trigger."
  },
  {
    question: "What integrations are available to connect MeraTalk with our clients' CRMs, ticketing tools, and workforce management software?",
    answer: "MeraTalk ships with native connectors for Salesforce, Zendesk, HubSpot, Microsoft Dynamics, Freshdesk, ServiceNow, NICE, Verint, and 200+ tools. Open REST APIs, webhooks, and SDKs let your engineering team push call activity, recordings, transcripts, and dispositions into client systems and pull customer context back into the agent screen-pop in real time."
  },
  {
    question: "How does MeraTalk handle compliance for regulated outbound campaigns including TCPA, GDPR, and Do-Not-Call list management worldwide?",
    answer: "Built-in TCPA-safe dialing, time-zone-aware pacing, consent capture, and DNC scrubbing protect outbound programs across the US, UK, EU, and APAC. Recordings store on encrypted, region-aware infrastructure with configurable retention. Granular role-based access, masking of PII in transcripts, and full audit logs satisfy GDPR, CCPA, HIPAA, and PCI DSS reviews from any client compliance team."
  }
]

function BpoHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
          alt="BPO contact center team collaborating on customer support calls"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function BpoOperationsImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
        alt="Contact center supervisor reviewing agent performance dashboards"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Gauge className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">SLA performance</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Live across clients</div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <LineChart className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Revenue per seat</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Up to 38% higher</div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">BPO &amp; Outsourcing Communication Platform</span>
        </div>
      </div>
    </div>
  )
}

function BpoDeliveryImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#e6f7f5]">
        <Image
          src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80"
          alt="Remote BPO agent helping a customer from a home workstation"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
        <span className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] whitespace-nowrap">
          Follow-the-sun delivery, anywhere
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function BpoOutsourcingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <div className="h-[72px]" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f0fdfa] via-white to-[#e6f7f5] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0a9e8f]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b8dd6]/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0a9e8f]/10 text-[#0a9e8f] text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5">
                <Briefcase className="w-3.5 h-3.5" />
                For BPO &amp; Outsourcing
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                The Communication Platform Built for Modern{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  BPO &amp; Outsourcing Operations
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Run inbound support, outbound sales, collections, and back-office programs for every client on one secure, AI-powered contact center. MeraTalk delivers multi-tenant workspaces, global SIP, predictive dialing, and real-time SLA dashboards so outsourcing leaders win bigger contracts, ramp agents faster, and protect margin on every seat.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0a9e8f] text-white px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#0d4a4a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Book A Demo
                </Link>
                <Link
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white text-[#0d4a4a] border border-[#0d4a4a]/15 px-7 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#f0fdfa] transition-all"
                >
                  See Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <BpoHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Why BPOs Choose MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <BpoOperationsImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                One Platform to Serve Every Client, Channel &amp; Shift
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                BPOs juggle dozens of clients, regulations, and KPIs at once. Stitching together telephony, CRMs, dialers, and QA tools per program drains margin and slows ramp. MeraTalk replaces that patchwork with one cloud platform that scales from 25-seat pilots to 10,000-agent global operations, giving each client a tailored experience without forking your tech stack.
              </p>
              <div className="space-y-4">
                {platformPillars.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Core Capabilities (6 icon boxes) */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities Engineered for Outsourcing at Scale
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From multi-tenant workspaces to AI-driven QA, every feature is purpose-built for BPOs that win on speed, quality, and tight unit economics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e6f7f5] hover:shadow-[0_8px_40px_rgba(10,158,143,0.12)] hover:border-[#0a9e8f]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 group-hover:from-[#0a9e8f] group-hover:to-[#0d4a4a] transition-all">
                  <feature.icon className="w-7 h-7 text-[#0a9e8f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0d4a4a] mb-3">{feature.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section - Delivery Model */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Onboard Faster, Ramp Smarter, Retain Clients Longer
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                A repeatable launch playbook gets new client programs live in days — not months — and keeps every site, supervisor, and agent productive from the first call.
              </p>
              <div className="space-y-4">
                {[
                  "Launch new client workspaces with prebuilt IVR, script, and dashboard templates in days.",
                  "Onboard agents with browser-based softphones, role templates, and self-serve provisioning.",
                  "Coach in real time with whisper, barge-in, and AI scoring on 100% of recorded interactions.",
                  "Prove ROI to clients with branded reports on AHT, FCR, CSAT, conversion, and abandonment."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#0a9e8f] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[15px] text-[#1a1a2e] font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <BpoDeliveryImage />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted by Outsourcing Leaders Across the Globe
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Compliance, reliability, and operational flexibility are the fundamentals that make MeraTalk the long-term partner for BPOs serving banks, retailers, telcos, and SaaS leaders.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#e6f7f5] hover:shadow-lg hover:border-[#0a9e8f]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a9e8f]/10 to-[#3b8dd6]/10 flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-7 h-7 text-[#0a9e8f]" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d4a4a] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7] line-clamp-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#5a6a7a]">
              Answers to the questions BPO and outsourcing leaders ask us most often.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f8fffe] rounded-xl border border-[#e6f7f5] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f0fdfa] transition-colors"
                >
                  <span className="font-semibold text-[15px] text-[#0d4a4a] pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0a9e8f] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
