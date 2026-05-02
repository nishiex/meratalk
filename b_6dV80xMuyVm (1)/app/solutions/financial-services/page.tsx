"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/meratalk/navbar"
import { Footer } from "@/components/meratalk/footer"
import { CTABanner } from "@/components/meratalk/cta-banner"
import {
  Landmark, ShieldCheck, Lock, FileLock2, Phone,
  Check, ChevronDown, ChevronUp, BadgeDollarSign, ScrollText,
  Building2, UserCheck, FileCheck,
  ArrowRight, Workflow, LineChart
} from "lucide-react"

const coreCapabilities = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Encrypted Voice & Messaging",
    description: "End-to-end encrypted calls, SMS, and chat with PCI DSS, SOC 2, and GLBA controls so every client conversation is private and audit-ready."
  },
  {
    icon: ScrollText,
    title: "Compliant Call Recording & Archiving",
    description: "Capture, transcribe, and retain every advisor call with WORM storage and tamper-proof archives that satisfy FINRA, SEC 17a-4, and MiFID II rules."
  },
  {
    icon: Workflow,
    title: "Smart Routing for Branches & Advisors",
    description: "Route customers to the right banker, branch, or licensed advisor based on portfolio, language, or product with skills-based intelligent IVR flows."
  },
  {
    icon: BadgeDollarSign,
    title: "Secure Payment & IVR Tokenization",
    description: "PCI-compliant agent-assisted payments and self-service IVR keep card data out of recordings and CRM systems through real-time tokenization."
  },
  {
    icon: LineChart,
    title: "AI Conversation Intelligence",
    description: "Real-time transcripts, sentiment scoring, and disclosure detection flag risk, surface coaching moments, and protect every advisor interaction."
  },
  {
    icon: Building2,
    title: "Core Banking & CRM Integrations",
    description: "Native connectors for Salesforce Financial Services Cloud, Fiserv, Jack Henry, FIS, and Redtail keep client context flowing across every channel."
  }
]

const trustPillars = [
  {
    icon: Lock,
    title: "PCI DSS & SOC 2 Type II",
    description: "Independently audited controls protect cardholder data and customer records across every layer of the platform."
  },
  {
    icon: FileCheck,
    title: "FINRA, SEC & GLBA Ready",
    description: "Recording, retention, and supervision tools mapped to financial regulations across broker-dealers, RIAs, and banks."
  },
  {
    icon: ShieldCheck,
    title: "99.999% Carrier-Grade Uptime",
    description: "Geo-redundant US data centers and resilient SIP backbone keep trading desks and contact centers always-on."
  },
  {
    icon: UserCheck,
    title: "Dedicated Financial Specialists",
    description: "Implementation and support teams who understand banking, wealth, lending, and insurance workflows 24/7."
  }
]

const platformPillars = [
  "PCI DSS, SOC 2, GLBA, and FINRA-aligned safeguards across voice, video, and messaging.",
  "Direct integrations with core banking, lending, and wealth platforms keep advisor context in sync.",
  "AI-powered transcription, sentiment, and disclosure detection on every regulated conversation.",
  "Carrier-grade 99.999% uptime so trading desks and call centers never go offline."
]

const faqs = [
  {
    question: "Is MeraTalk fully compliant with FINRA, SEC, GLBA, and PCI DSS requirements for regulated financial services workflows and customer data?",
    answer: "Yes. MeraTalk is engineered for regulated finance with PCI DSS Level 1, SOC 2 Type II, ISO 27001, and GLBA-aligned controls. Call recording, retention, and supervision features are mapped to FINRA Rule 3110, SEC 17a-4 WORM storage, and MiFID II. Every voice, SMS, and video channel gives compliance, legal, and risk teams the audit trails, encryption, and access controls they need."
  },
  {
    question: "Can MeraTalk integrate seamlessly with our existing core banking, CRM, lending, and wealth management systems used across the firm?",
    answer: "Absolutely. We provide native connectors for Salesforce Financial Services Cloud, Microsoft Dynamics 365, Redtail, Wealthbox, Fiserv DNA, Jack Henry SilverLake, FIS Horizon, nCino, Encompass, and 200+ financial tools. Open REST and webhook APIs let you sync call activity, recordings, transcripts, and customer identifiers into any internal system without ripping out what already works."
  },
  {
    question: "How does MeraTalk help reduce compliance risk and improve supervision across distributed advisors, agents, and branch employees nationwide?",
    answer: "Every regulated call is recorded, transcribed, and archived to immutable WORM storage with full chain of custody. AI flags missed disclosures, sentiment shifts, vulnerable-customer indicators, and prohibited language so supervisors can review high-risk calls within hours instead of weeks. Customers typically reduce sample-based supervision overhead by 40% to 60% in the first quarter."
  },
  {
    question: "What does the deployment process look like for a multi-branch bank, broker-dealer, or insurance carrier rolling out MeraTalk across regions?",
    answer: "A dedicated financial services implementation pod handles discovery, number porting, regulatory mapping, CRM integration, and staff training in phased waves. Most regional banks and mid-sized broker-dealers go live within 6 to 8 weeks with zero downtime, and global firms are migrated branch by branch and desk by desk to keep trading, advisory, and service operations uninterrupted."
  },
  {
    question: "How does MeraTalk support secure payments, fraud prevention, and customer authentication for high-value transactions over the phone and digital channels?",
    answer: "MeraTalk includes PCI-compliant agent-assisted payments and self-service IVR that tokenize card data in real time so it never touches recordings or CRM. Voice biometrics, knowledge-based authentication, and step-up MFA verify high-risk callers before sensitive actions. Combined with AI fraud detection on call patterns and metadata, banks and lenders cut authentication time and account takeover losses simultaneously."
  }
]

function FinanceHeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80"
          alt="Financial services advisor reviewing portfolio performance and market data"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative accent circles */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] rounded-full opacity-30 -z-10" />
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full opacity-30 -z-10" />
    </div>
  )
}

function FinanceHubImage() {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(13,74,74,0.18)]">
      <Image
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
        alt="Financial analyst reviewing investment charts and market data"
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
        priority={false}
      />

      {/* Soft brand overlay for visual consistency */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d4a4a]/55 via-[#0d4a4a]/15 to-transparent" />

      {/* Floating stat card - top left */}
      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0a9e8f] to-[#0d4a4a] flex items-center justify-center">
          <Landmark className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Client trust</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">Every interaction</div>
        </div>
      </div>

      {/* Floating stat card - bottom right */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#3b8dd6] to-[#0a9e8f] flex items-center justify-center">
          <FileLock2 className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="text-[11px] text-[#5a6a7a] leading-none mb-1">Data protection</div>
          <div className="text-[14px] font-bold text-[#0d4a4a] leading-none">End-to-end encrypted</div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0">
        <div className="bg-[#0d4a4a]/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-lg">
          <span className="text-[12px] font-semibold text-white tracking-wide">Financial Services Communication Platform</span>
        </div>
      </div>
    </div>
  )
}

function ClientJourneyImage() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-[#e6f7f5]">
        <Image
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
          alt="Client using a mobile banking app to manage finances on the go"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
        <span className="text-[12px] font-bold tracking-[1.4px] uppercase text-[#0a9e8f] whitespace-nowrap">
          From first call to lifelong relationship
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0a9e8f]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function FinancialServicesPage() {
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
                <Landmark className="w-3.5 h-3.5" />
                For Financial Services
              </div>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d4a4a] leading-[1.2] mb-6">
                Secure, Compliant Communication for Modern{" "}
                <span className="bg-gradient-to-r from-[#87CEEB] to-[#90EE90] bg-clip-text text-transparent">
                  Financial Services
                </span>
              </h1>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Connect clients, advisors, and back-office teams on one regulator-ready platform. MeraTalk delivers encrypted voice, compliant call recording, AI conversation intelligence, and core banking integrations so banks, broker-dealers, lenders, and insurers can serve customers faster while keeping every interaction private, supervised, and auditable.
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
              <FinanceHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Why Financial Services Chooses MeraTalk */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <FinanceHubImage />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                Communication That Earns Lifelong Client Trust
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                From community banks and credit unions to global broker-dealers and insurance carriers, financial firms need more than a phone system. They need a regulator-ready communication backbone that protects customer data, integrates with the core, and helps advisors deliver guidance without friction. MeraTalk replaces fragmented tools with one trusted platform built for the realities of modern finance.
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

      {/* Core Capabilities (6 icon boxes) */}
      <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-[#f8fffe]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Capabilities Built for Regulated Workflows
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[700px] mx-auto leading-[1.7]">
              From compliant call recording to AI-powered conversation intelligence, every feature is engineered for the daily realities of banking, wealth, lending, and insurance.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fourth Section - Client Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-6">
                A Connected Client Journey, From First Call to Lifelong Relationship
              </h2>
              <p className="text-[16px] text-[#5a6a7a] leading-[1.8] mb-8">
                Smart routing, encrypted messaging, and AI supervision keep bankers, advisors, and back-office teams coordinated across every client interaction.
              </p>
              <div className="space-y-4">
                {[
                  "Skills-based IVR routes high-value clients straight to the right banker or licensed advisor.",
                  "Voice biometrics and step-up MFA verify callers before sensitive transactions or transfers.",
                  "AI conversation intelligence flags missed disclosures, suitability gaps, and coaching moments.",
                  "WORM-archived recordings keep regulators, auditors, and supervision teams always satisfied."
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
              <ClientJourneyImage />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - 4 icon boxes (no buttons) */}
      <section className="py-20 bg-gradient-to-b from-[#f8fffe] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[#0d4a4a] mb-4">
              Trusted Across Banks, Broker-Dealers, Lenders & Insurers
            </h2>
            <p className="text-[16px] text-[#5a6a7a] max-w-[640px] mx-auto leading-[1.7]">
              Compliance, reliability, and finance-first design are the fundamentals that make MeraTalk the long-term partner for community banks, credit unions, RIAs, and global financial firms.
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
                <p className="text-[14px] text-[#5a6a7a] leading-[1.7]">{item.description}</p>
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
              Answers to the questions financial services leaders ask us most often.
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
